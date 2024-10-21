import Image from 'next/image';

export default function TokenAddress() {
  return (
    <div className="card w-[100%] bg-base-100 w-96 shadow-md rounded rounded-tl-[16px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[16px]">
      <div className="card-body">
        <div className="card-title">
          <h2 className="text-base-content">Token Address</h2>
        </div>
        <label className="input input-bordered w-full bg-[#E7ECFF] border-primary focus:outline-solid-0 flex items-center rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px] gap-2 mt-4">
          <Image
            alt="Coin"
            src="/assets/coin-logo/solana-logo.png"
            width={24}
            height={24}
          />
          <input
            type="text"
            className="grow placeholder:font-regular placeholder:text-base text-neutral"
            placeholder="Search here"
            value={'0x793ea9692Ada1900fBd0B80FFFEc6E431fe8b391'}
            readOnly
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div className="flex w-full justify-between gap-2 mt-4">
          <div className="flex flex-1 flex-row items-center bg-[#E7ECFF] border-primary rounded rounded-[8px] p-7 gap-4">
            <Image
              alt="Wallet Image"
              src="/assets/wallet-image.png"
              width={80}
              height={80}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl text-base-content font-bold">
                DEMODOGX Token / DEMO
              </h2>
              <p className="text-neutral">Market Cap: $2,435,400</p>
            </div>
          </div>
          <div className="flex flex-1 flex-row items-center bg-[#E7ECFF] border-primary rounded rounded-[8px] p-7">
            <div className="flex flex-col w-full justify-center h-[80px] p-4 gap-2">
              <p className="text-neutral">Your Balance</p>
              <p className="text-xl text-base-content font-bold">
                29,697,055 DEMO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
