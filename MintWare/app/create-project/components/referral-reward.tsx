export default function ReferralReward() {
  return (
    <div className="card w-[100%] bg-base-100 w-96 shadow-md rounded rounded-tl-[16px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[16px]">
      <div className="card-body">
        <div className="card-title">
          <h2 className="text-base-content">Referral Reward</h2>
        </div>
        <div className="flex flex-col w-full mt-4">
          <input
            type="text"
            className="w-full h-[64px] bg-[#E7ECFF] border-solid border-[1px] border-primary rounded rounded-[8px] px-4 py-2 focus:outline-0"
            placeholder="Enter percentage here"
            value={'5%'}
          />
          <p className="text-neutral text-xl font-regular mt-4">
            This percentage determines how much of the swap total will be used
            as a reward for bringing in new participants. For example, if set to
            10%, a referrer will earn 10% of the total value of every swap made
            using their referral link. (Min 5%)
          </p>
        </div>
      </div>
    </div>
  );
}
