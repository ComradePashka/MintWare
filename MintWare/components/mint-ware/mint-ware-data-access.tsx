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
    queryFn: () => program.account.rewards.all(),
  });

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const initialize = useMutation({
    mutationKey: ['mint-ware', 'create', { cluster }],
    mutationFn: (keypair: Keypair) =>
      program.methods
        .create("Test Rewards Pool", "Test Description")
        .accounts({ user : keypair.publicKey })
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
    queryFn: () => program.account.rewards.fetch(account),
  });

  return {
    accountQuery,
  };
}
