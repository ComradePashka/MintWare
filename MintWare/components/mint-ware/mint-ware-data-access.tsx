'use client';

import { getMintWareProgram, getMintWareProgramId } from '@mint-ware/anchor';
import { useConnection } from '@solana/wallet-adapter-react';
import { Cluster, Keypair, PublicKey } from '@solana/web3.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useCluster } from '../cluster/cluster-data-access';
import { useAnchorProvider } from '../solana/solana-provider';
import { useTransactionToast } from '../ui/ui-layout';

export function useMintWareProgram() {
  const { connection } = useConnection();
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const provider = useAnchorProvider();
  const programId = useMemo(
    () => getMintWareProgramId(cluster.network as Cluster),
    [cluster]
  );
  const program = getMintWareProgram(provider);

  const accounts = useQuery({
    queryKey: ['mint-ware', 'all', { cluster }],
    queryFn: () => program.account.projectData.all(),
  });

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const initialize = useMutation({
    mutationKey: ['mint-ware', 'create', { cluster }],
    mutationFn: ({name, description, reward_percent, amount}: {name: string, description: string, reward_percent: Number, amount: BigInt }) =>
      program.methods
        .create({name, description, reward_percent, amount})
        //TODO: fugure our how to reuse signer for PDA creation
        // .accountsStrict({
        //   rewards: associatedAddress,
        //   user: keypair.publicKey,
        //   systemProgram : SystemProgram,
        // })
       .accounts()
       .signers([keypair])
        .rpc(),
    onSuccess: (signature) => {
      transactionToast(signature);
      return accounts.refetch();
    },
    onError: () =>
      toast.error('Failed to initialize account'),
  });

  return {
    program,
    programId,
    accounts,
    getProgramAccount,
    initialize,
  };
}

export function useMintWareProgramAccount({ account }: { account: PublicKey }) {
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const { program, accounts } = useMintWareProgram();

  const accountQuery = useQuery({
    queryKey: ['mint-ware', 'fetch', { cluster, account }],
    queryFn: () => program.account.projectData.fetch(account),
  });


  // template for another endpoints, create is implemented in useMintWareProgram hook
  //
  // const createMutation = useMutation({
  //   mutationKey: ['mint-ware', 'create', { cluster, account }],
  //   mutationFn: ({name, description} : {name: string, description: string} ) =>
  //     program.methods.create(name, description).accounts({ user: account}).rpc(),
  //   onSuccess: (tx) => {
  //     transactionToast(tx);
  //     return accounts.refetch();
  //   },
  // });


  //TODO: implement close() 
  //
  // const closeMutation = useMutation({
  //   mutationKey: ['mint-ware', 'close', { cluster, account }],
  //   mutationFn: () =>
  //     program.methods.close().accounts({ mintWare: account }).rpc(),
  //   onSuccess: (tx) => {
  //     transactionToast(tx);
  //     return accounts.refetch();
  //   },
  // });

  return {
    accountQuery,
  };
}
