import Description from './components/description';
import ReferralReward from './components/referral-reward';
import RewardAndTransaction from './components/reward-and-transaction';
import Summary from './components/summary';
import TokenAddress from './components/token-address';

export default function Page() {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto my-10 mb-72">
      <h1 className="text-3xl text-base-content font-semibold">
        Manage <span className="text-primary">MintWare Project</span>
      </h1>
      <br />
      <div className="flex flex-col w-full">
        <TokenAddress />
        <br />
        <RewardAndTransaction />
        <br />
        <ReferralReward />
        <br />
        <Description />
        <br />
        <Summary />
      </div>
    </div>
  );
}
