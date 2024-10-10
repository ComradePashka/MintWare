import { ReactElement } from 'react';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer(): ReactElement {
  return (
    <footer className="flex flex-col min-h-[772px] w-full border-t bg-[url('/assets/gradient-bg.png')] bg-cover bg-center p-10">
      <div className="flex flex-col min-h-[390px] w-full bg-white rounded rounded-tl-[16px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[16px] p-10">
        <div className="flex flex-row w-full">
          <div className="flex flex-col flex-1">
            <Image
              alt="Logo"
              src="/assets/logo-group.png"
              width={160}
              height={48}
            />
          </div>
          <div className="flex flex-row flex-1 justify-between">
            <div className="flex flex-col">
              <text className="text-xs font-normal">COMPANY</text>
              <br />
              <a href="#" className="text-lg font-extralight text-[#292626]">
                About Us
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Whitepaper
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Careers
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Blog
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Contacts Us
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Partners
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Help Center
              </a>
            </div>
            <div className="flex flex-col">
              <text className="text-xs font-normal">PRODUCTS</text>
              <br />
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Buy Crypto
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                P2P Trading
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Convert
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Trade
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Web3 Marketplace
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                All Crypto
              </a>
            </div>
            <div className="flex flex-col">
              <text className="text-xs font-normal">RESOURCES</text>
              <br />
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Projects
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Portfolio
              </a>
              <a href="#" className="text-lg font-extralight text-[#292626]">
                Dashboard
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-1 items-end">
            <button className="h-[46px] w-[160px] btn btn-primary text-white rounded rounded-tl-[16px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[16px]">
              Request a call
            </button>
            <p className="text-xs font-normal text-right text-[#292626] mt-[16px]">
              +1 (999) 999-99-99
            </p>
            <p className="text-xs font-normal text-right text-[#292626]	">
              inquire@mintware.com
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between mt-auto">
          <div className="flex flex-row flex-1">
            <Link
              href="#"
              className="flex flex-row w-[40px] h-[40px] items-center justify-center rounded rounded-full bg-[#292626]"
            >
              <Image
                alt="Telegram Logo"
                src="/assets/telegram.png"
                width={18}
                height={14}
              />
            </Link>
            <Link
              href="#"
              className="flex flex-row w-[40px] h-[40px] items-center justify-center rounded rounded-full bg-[#292626] ml-3"
            >
              <Image
                alt="Telegram Logo"
                src="/assets/discord.png"
                width={18}
                height={14}
              />
            </Link>
            <Link
              href="#"
              className="flex flex-row w-[40px] h-[40px] items-center justify-center rounded rounded-full bg-[#292626] ml-3"
            >
              <Image
                alt="Telegram Logo"
                src="/assets/x.png"
                width={18}
                height={14}
              />
            </Link>
            <Link
              href="#"
              className="flex flex-row w-[40px] h-[40px] items-center justify-center rounded rounded-full bg-[#292626] ml-3"
            >
              <Image
                alt="Telegram Logo"
                src="/assets/medium.png"
                width={18}
                height={14}
              />
            </Link>
            <Link
              href="#"
              className="flex flex-row w-[40px] h-[40px] items-center justify-center rounded rounded-full bg-[#292626] ml-3"
            >
              <Image
                alt="Telegram Logo"
                src="/assets/whatsapp.png"
                width={18}
                height={14}
              />
            </Link>
          </div>
          <div className="flex flex-col flex-1 justify-end">
            <p className="text-xs font-normal text-right text-[#292626]">
              24 Metrotech Center,
            </p>
            <p className="text-xs font-normal text-right text-[#292626]">
              Brooklyn, NY 11201, USA
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between mt-[48px]">
        <div className="flex flex-col flex-1">
          <p className="text-3xl font-normal text-white">
            Never want to miss a sale?
          </p>
          <p className="text-6xl font-bold text-white mt-[8px]">
            Sign up for our newsletter <br /> and get the latest news and <br />
            updates.
          </p>
        </div>
        <div className="flex flex-col flex-1 items-end justify-end">
          <p className="text-xl font-normal text-white">
            Send us your contact email and we will contact you.
          </p>
          <Link
            href="#"
            className="flex flex-row w-[519px] h-[59px] items-start justify-center full-width text-white border-[1px] border-white px-6 py-2 rounded rounded-lg mt-4"
          >
            <div className="flex flex-col flex-1">
              <text className="text-sm font-normal text-white text-opacity-50">
                Your email
              </text>
              <text className="text-xl font-bold text-white">
                someone@mail.com
              </text>
            </div>
            <div className="flex flex-col flex-1 h-full items-end justify-center">
              <Image
                alt="arrow"
                src="/assets/arrow-next.png"
                width={24}
                height={24}
              />
            </div>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col flex-1">
          <p className="text-md font-thin text-white">
            © Copyright MintWare 2024. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col flex-1 items-end justify-end">
          <p className="text-md font-thin text-white">
            Privacy Policy | Terms and Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
