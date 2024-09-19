'use client';

import { getMintWareProgram, getMintWareProgramId } from '@mint-ware/anchor';
import { Program } from '@coral-xyz/anchor';
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
    queryFn: () => program.account.mintWare.all(),
  });

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const initialize = useMutation({
    mutationKey: ['mint-ware', 'initialize', { cluster }],
    mutationFn: (keypair: Keypair) =>
      program.methods
        .initialize()
        .accounts({ mintWare: keypair.publicKey })
        .signers([keypair])
        .rpc(),
    onSuccess: (signature) => {
      transactionToast(signature);
      return accounts.refetch();
    },
    onError: () => toast.error('Failed to initialize account'),
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
    queryFn: () => program.account.mintWare.fetch(account),
  });

  const closeMutation = useMutation({
    mutationKey: ['mint-ware', 'close', { cluster, account }],
    mutationFn: () =>
      program.methods.close().accounts({ mintWare: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accounts.refetch();
    },
  });

  const decrementMutation = useMutation({
    mutationKey: ['mint-ware', 'decrement', { cluster, account }],
    mutationFn: () =>
      program.methods.decrement().accounts({ mintWare: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  const incrementMutation = useMutation({
    mutationKey: ['mint-ware', 'increment', { cluster, account }],
    mutationFn: () =>
      program.methods.increment().accounts({ mintWare: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  const setMutation = useMutation({
    mutationKey: ['mint-ware', 'set', { cluster, account }],
    mutationFn: (value: number) =>
      program.methods.set(value).accounts({ mintWare: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  return {
    accountQuery,
    closeMutation,
    decrementMutation,
    incrementMutation,
    setMutation,
  };
}
