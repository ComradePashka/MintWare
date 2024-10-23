'use client';

import { DEV_USDCOIN_MINT, getMintWareProgram, getMintWareProgramId, getProjectATA, getProjectPDA, settingsPDA } from '@mint-ware/anchor';
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Cluster, Keypair, PublicKey } from '@solana/web3.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useCluster } from '../cluster/cluster-data-access';
import { useAnchorProvider } from '../solana/solana-provider';
import { useTransactionToast } from '../ui/ui-layout';
import { getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { BN } from '@coral-xyz/anchor';
import { SYSTEM_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/native/system';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';

export function useMintWareProgram() {
  const { publicKey, sendTransaction, signTransaction, wallet } = useWallet();
  const { connection } = useConnection();
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const provider = useAnchorProvider();
  const programId = useMemo(
    () => getMintWareProgramId(cluster.network as Cluster),
    [cluster]
  );
  const program = getMintWareProgram(provider);

  if (!publicKey) throw new WalletNotConnectedError();


  const projectPDA = getProjectPDA(publicKey, DEV_USDCOIN_MINT)
  const poolATA = getProjectATA(publicKey, DEV_USDCOIN_MINT)
  const signerATA = getAssociatedTokenAddressSync(DEV_USDCOIN_MINT, publicKey)

  const accounts = useQuery({
    queryKey: ['mint-ware', 'all', { cluster }],
    queryFn: () => program.account.project.all(),
  });

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const initialize = useMutation({
    mutationKey: ['mint-ware', 'create', { cluster }],
    mutationFn: async ({name, description, rewardPercent, amount}: {name: string, description: string, rewardPercent: number, amount: number }) =>
    {
      console.log(name, description, rewardPercent, amount)

      let tx =  await program.methods
      .projectInit(name, description, rewardPercent, new BN(amount))
      .accountsStrict({
        project: projectPDA,
        poolAta: poolATA,
        tokenMint: DEV_USDCOIN_MINT,
        signerAta: signerATA,
        signer: publicKey,
        systemProgram: SYSTEM_PROGRAM_ID,
        tokenProgram: TOKEN_PROGRAM_ID
      })
      .transaction()

      console.log("wallet", wallet)
      console.log("tx", tx)

      // tx.feePayer = publicKey
      // tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash

//      const signedTx = await signTransaction(tx)
//      const txId = await connection.sendRawTransaction(signedTx.serialize())
      let tx2 = await sendTransaction(tx, connection, {skipPreflight: true})
      console.log("Result:", tx2)
      return await connection.confirmTransaction(tx2)


      // const {
      //   context: { slot: minContextSlot },
      //   value: { blockhash, lastValidBlockHeight }
      // } = await connection.getLatestBlockhashAndContext()

      // const signature = await sendTransaction(tx, connection) // , { minContextSlot }
      // return await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature})
    },
    onSuccess: (tx) => {
      transactionToast("TX" + tx);
      return accounts.refetch();
    },
    onError: (e) =>
      toast.error('Failed to initialize account' + e),
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
    queryFn: () => program.account.project.fetch(account),
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
