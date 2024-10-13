import { ReactElement } from 'react';

import Image from 'next/image';

export default function CoinModalButtonComponent(): ReactElement {
  return (
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1">
        <Image
          alt="Coin"
          src="/assets/coin-logo/solana-logo.png"
          width={24}
          height={24}
        />
        295
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <span className="text-neutral">
            <Image
              alt="Coin"
              src="/assets/coin-logo/ethereum-logo.png"
              width={24}
              height={24}
            />{' '}
            Ethereum
          </span>
        </li>
        <li>
          <span className="text-neutral">
            <Image
              alt="Coin"
              src="/assets/coin-logo/binance-logo.png"
              width={24}
              height={24}
            />{' '}
            BNB Smart Chain
          </span>
        </li>
      </ul>
    </div>
  );
}
