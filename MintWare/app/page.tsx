import ProjectList from '@/components/project/project-list';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const JupiterTerminalWidget = dynamic(
  () => import('@/components/jupiter/terminal'),
  { ssr: false }
);

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-1">
        <div role="alert" className="flex alert w-full h-[48px] rounded-lg">
          <div className="flex w-full h-full justify-centerr items-center">
            <div className="flex w-full max-w-6xl mx-auto items-center">
              <span>
                <Image
                  alt="Logo"
                  src="/assets/ad-icon.png"
                  width={32}
                  height={32}
                />
              </span>
              <span className="ml-2 text-md font-normal text-primary">
                MEGATRUMP
              </span>
              <span className="ml-2 text-md font-normal">
                Instant Withdrawal Crypto Coins - $2,000 Bonus + 33% Rakeback
              </span>
              <span className="ml-2 text-md font-normal text-primary">
                TRADE NOW!
              </span>
              <div className="ml-auto flex items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#7E859A"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-alert-circle"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
                </svg>
                <span className="text-[12px] font-normal text-neutral mr-4">
                  Ad
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7E859A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col w-full max-w-6xl mx-auto">
        <div className="flex flex-row items-center">
          <span className="text-[32px] font-semibold">We Believe in</span>
          <span className="ml-2 text-[32px] font-semibold text-primary">
            Empowering Communities and Founders
          </span>
        </div>
        <span className="text-[14px] font-normal text-neutral">
          Discover new projects, earn rewards, and contribute to the growth of
          Web 3 communities.
        </span>
        <br />
        <div className="card bg-base-100 w-full shadow-xl rounded-tl-[16px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[16px]">
          <div className="card-body">
            <div className="flex flex-row">
              <div className="flex flex-col flex-1 justify-center items-center">
                <span className="text-[14px] font-normal text-neutral">
                  Total Volume ($)
                </span>
                <span className="text-[40px] font-bold mt-2">$24M+</span>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center">
                <span className="text-[14px] font-normal text-neutral">
                  Active Users
                </span>
                <span className="text-[40px] font-bold mt-2">38K+</span>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center">
                <span className="text-[14px] font-normal text-neutral">
                  Projects
                </span>
                <span className="text-[40px] font-bold mt-2">20K+</span>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center">
                <span className="text-[14px] font-normal text-neutral">
                  Rewards
                </span>
                <span className="text-[40px] font-bold mt-2">$50K</span>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center">
                <button className="btn w-[240px] h-[46px] btn-primary text-white rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                  Start Referring
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-col w-full max-w-6xl mx-auto">
        <Link href="#">
          <div className="w-full h-[400px] rounded rounded-tl-[16px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[16px] bg-[url('/assets/register-bg.png')] bg-cover bg-center bg-no-repeat"></div>
        </Link>
      </div>
      <br />
      <br />
      <ProjectList />
      {/* <JupiterTerminalWidget /> */}
      <br />
      <br />
      <br />
    </div>
  );
}
