import { ReactElement } from 'react';
import Image from 'next/image';

export default function WalletButtonComponent(): ReactElement {
  const formatAddress = (address: string): string => {
    if (address.length <= 12) return address;
    const start = address.slice(0, 5);
    const end = address.slice(-4);
    return `${start}...${end}`;
  };

  return (
    <button className="btn bg-primary text-white hover:bg-primary hover:text-white w-[184px] h-[46px] rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
      <div className="flex flex-row items-center text-ellipsis w-full whitespace-nowrap text-nowrap">
        <Image
          className="mr-2"
          alt="Wallet"
          src="/assets/wallet.png"
          width={24}
          height={24}
        />
        <p>{formatAddress('0x86887d6a55a1d5ea2d4c4f5c8b7c0f1b2b0b4b6b8')}</p>
      </div>
    </button>
  );
}
