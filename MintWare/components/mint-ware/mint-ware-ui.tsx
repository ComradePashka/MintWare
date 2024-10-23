'use client';

import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { useMemo, useState } from 'react';
import { AppModal, ellipsify } from '../ui/ui-layout';
import { ExplorerLink } from '../cluster/cluster-ui';
import {
  useMintWareProgram,
  useMintWareProgramAccount,
} from './mint-ware-data-access';
import { ClusterNetwork } from '../cluster/cluster-data-access';
import { useWallet } from '@solana/wallet-adapter-react';
import { BN } from '@coral-xyz/anchor';

export function MintWareCreate() {
  const { initialize } = useMintWareProgram();
  const [showCreateProjectModal, setshowCreateProjectModal] = useState(false);

  return (
    <div>
      HERE!!!
      <MintWareCreateProjectModal
        show={showCreateProjectModal}
        hideModal={() => setshowCreateProjectModal(false)}
      />
      <div className="space-x-2">
        <button
          className="btn btn-xs lg:btn-md btn-outline"
          onClick={() => setshowCreateProjectModal(true)}
          disabled={initialize.isPending}>
            New Project {initialize.isPending && '...'}
        </button>
      </div>
    </div>
  )
}


export function MintWareCreateProjectModal({
  hideModal,
  show,
}: {
  hideModal: () => void;
  show: boolean;
}) {
  const { publicKey, sendTransaction, wallet } = useWallet()
  
  const { initialize } = useMintWareProgram();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rewardPercent, setRewardPercent] = useState<number>(5);
  const [amount, setAmount] = useState<number>(0);

  return (
    <AppModal
      title={'Add Project'}
      hide={hideModal}
      show={show}
      submit={() => {
        initialize.mutateAsync({name, description, rewardPercent, amount})
        // hideModal();
      }}
      submitLabel="Save"
    >
      <input
        type="text"
        placeholder="Name"
        className="input input-bordered w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="input input-bordered w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Reward percent (5-100)"
        className="input input-bordered w-full"
        value={rewardPercent.toString()}
        onChange={(e) => setRewardPercent(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Amount"
        className="input input-bordered w-full"
        value={amount.toString()}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
    </AppModal>
  );
}


export function MintWareList() {
  const { accounts, getProgramAccount } = useMintWareProgram();

  if (getProgramAccount.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (!getProgramAccount.data?.value) {
    return (
      <div className="alert alert-info flex justify-center">
        <span>
          Program account not found. Make sure you have deployed the program and
          are on the correct cluster.
        </span>
      </div>
    );
  }
  return (
    <div className={'space-y-6'}>
      {accounts.isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : accounts.data?.length ? (
        <div className="grid md:grid-cols-2 gap-4">
          {accounts.data?.map((account) => (
            <MintWareCard
              key={account.publicKey.toString()}
              account={account.publicKey}
            />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h2 className={'text-2xl'}>No accounts</h2>
          No accounts found. Create one above to get started.
        </div>
      )}
    </div>
  );
}

function MintWareCard({ account }: { account: PublicKey }) {
  const {
    accountQuery,
  } = useMintWareProgramAccount({ account });

  //TODO: remove when not needed!
  // const count = useMemo(
  //   () => accountQuery.data?.rewardsPool ?? 0,
  //   [accountQuery.data?.rewardsPool]
  // );
  const count = 2;

  return accountQuery.isLoading ? (
    <span className="loading loading-spinner loading-lg"></span>
  ) : (
    <div className="card card-bordered border-base-300 border-4 text-neutral-content">
      <div className="card-body items-center text-center">
        <div className="space-y-6">
          <h2
            className="card-title justify-center text-3xl cursor-pointer"
            onClick={() => accountQuery.refetch()}
          >
            {count}
          </h2>
          <div className="card-actions justify-around">
            <button
              className="btn btn-xs lg:btn-md btn-outline"
              // onClick={() => incrementMutation.mutateAsync()}
              // disabled={incrementMutation.isPending}
            >
              Increment
            </button>
            {/* <button
              className="btn btn-xs lg:btn-md btn-outline"
              onClick={() => {
                const value = window.prompt(
                  'Set value to:',
                  count.toString() ?? '0'
                );
                if (
                  !value ||
                  parseInt(value) === count ||
                  isNaN(parseInt(value))
                ) {
                  return;
                }
                return setMutation.mutateAsync(parseInt(value));
              }}
              disabled={setMutation.isPending}
            >
              Set
            </button> */}
            {/* <button
              className="btn btn-xs lg:btn-md btn-outline"
              onClick={() => decrementMutation.mutateAsync()}
              disabled={decrementMutation.isPending}
            >
              Decrement
            </button> */}
          </div>
          <div className="text-center space-y-4">
            <p>
              <ExplorerLink
                path={`account/${account}`}
                label={ellipsify(account.toString())}
              />
            </p>
            <button
              className="btn btn-xs btn-secondary btn-outline"
              onClick={() => {
                if (
                  !window.confirm(
                    'Are you sure you want to close this account?'
                  )
                ) {
                  return;
                }
//TODO: implement call when close() added                
                return "Ok!";
//                return closeMutation.mutateAsync();
              }}
//              disabled={closeMutation.isPending}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
