import Link from 'next/link';
import Image from 'next/image';
import { ReactElement } from 'react';
import { usePathname } from 'next/navigation';
import CoinModalButtonComponent from '../coin/coin-modal-button';
import { WalletButton } from '../solana/solana-provider';

type NavbarProps = {
  links: { label: string; path: string; dev?: boolean }[];
};

export default function Navbar({ links }: NavbarProps): ReactElement {
  const pathname = usePathname();
  return (
    <div className="navbar h-[80px] bg-white text-neutral-content flex-col md:flex-row space-y-2 md:space-y-0 border-b px-10">
      <div className="flex-1">
        <Link href="/">
          <Image width={134} height={48} alt="Logo" src="/logo.png" />
        </Link>
        <ul className="menu-horizontal px-10 space-x-2">
          {links.map(({ label, path, dev }) => (
            <li key={path} className={dev ? 'dev-wrapper' : ''}>
              <Link
                className={`no-underline ${
                  pathname === path ? 'text-primary' : 'text-neutral'
                }`}
                href={path}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none space-x-2">
        <CoinModalButtonComponent />
        <WalletButton />
      </div>
    </div>
  );
}
