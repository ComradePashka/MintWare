import { ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <footer className="flex h-[772px] w-full border-t bg-[url('/assets/gradient-bg.png')] bg-cover bg-center p-10">
      <div className="flex flex-col h-[390px] w-full bg-white rounded rounded-tl-[16px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[16px]">
        <div className="flex flex-row w-full p-10">
          <div className="flex flex-col flex-1">
            <img
              className="h-[48px] w-[160px]"
              alt="Logo"
              src="/assets/logo-group.png"
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
        <div className="flex flex-row w-full pl-10 pr-10 justify-between">
          <div className="flex flex-row flex-1">
            <div className="flex flex-row w-[40px] h-[40px] items-center justify-center rounded rounded-full bg-[#292626]">
              <svg
                className="text-[#292626]"
                width="28"
                height="28"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 23 23"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
            </div>
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
        <br />
      </div>
    </footer>
  );
}
