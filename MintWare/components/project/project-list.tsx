'use client';

import { Project } from '@prisma/client';
import Image from 'next/image';

import useSWR from 'swr';

//@ts-expect-error need fetcher
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProjectList() {
  const { data, error } = useSWR('/api/projects', fetcher);
  if (error) return <div className="w-full text-center">An error occured.</div>;
  if (!data) return <div className="w-full text-center">Loading ...</div>;

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full max-w-6xl mx-auto">
        <div className="card bg-base-100 w-full shadow-xl">
          <div className="card-body">
            <h2 className="card-title px-4">
              <label className="input input-bordered w-full bg-[#E7ECFF] border-primary focus:outline-solid-0 flex items-center rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px] gap-2">
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
                <input
                  type="text"
                  className="grow placeholder:font-regular placeholder:text-base"
                  placeholder="Search here"
                />
              </label>
            </h2>
            <div className="overflow-x-auto mt-2">
              <table className="table">
                {/* head */}
                <thead className="bg-[#E2E8F0]">
                  <tr>
                    <th></th>
                    <th className="text-[#292626] text-semibold text-base">
                      Name
                    </th>
                    <th className="text-[#292626] text-semibold text-base">
                      Market Cap
                    </th>
                    <th className="text-[#292626] text-semibold text-base">
                      24h %
                    </th>
                    <th className="text-[#292626] text-semibold text-base">
                      Referral Vol.
                    </th>
                    <th className="text-[#292626] text-semibold text-base">
                      Reward %
                    </th>
                    <th className="text-[#292626] text-semibold text-base">
                      Reward ($)
                    </th>
                    <th className="text-[#292626] text-semibold text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/pepe.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">
                            PepeTokX
                          </span>
                          <span className="text-sm text-[#6B7280]">PEPEX</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-red-500 gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right text-red-500"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 7l10 10" />
                          <path d="M17 8l0 9l-9 0" />
                        </svg>
                        -1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/spacex.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">
                            SpaceX
                          </span>
                          <span className="text-sm text-[#6B7280]">SPACEX</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-red-500 gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right text-red-500"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 7l10 10" />
                          <path d="M17 8l0 9l-9 0" />
                        </svg>
                        -1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/moodeng.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">
                            MOODENG
                          </span>
                          <span className="text-sm text-[#6B7280]">
                            MOODENG
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-primary gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right text-primary"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 7l-10 10" />
                          <path d="M8 7l9 0l0 9" />
                        </svg>
                        1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/g1.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">
                            Liquity
                          </span>
                          <span className="text-sm text-[#6B7280]">LIQUI</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-red-500 gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right text-red-500"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 7l10 10" />
                          <path d="M17 8l0 9l-9 0" />
                        </svg>
                        -1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/g2.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">
                            PlaTON
                          </span>
                          <span className="text-sm text-[#6B7280]">PLAT</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-primary gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right text-primary"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 7l-10 10" />
                          <path d="M8 7l9 0l0 9" />
                        </svg>
                        1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                  {/* row 6 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/g3.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">
                            TempleDAO
                          </span>
                          <span className="text-sm text-[#6B7280]">TEMP</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-red-500 gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right text-red-500"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 7l10 10" />
                          <path d="M17 8l0 9l-9 0" />
                        </svg>
                        -1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                  {/* row 7 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/g4.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">
                            SushiCake
                          </span>
                          <span className="text-sm text-[#6B7280]">SUSHI</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-primary gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right text-primary"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 7l-10 10" />
                          <path d="M8 7l9 0l0 9" />
                        </svg>
                        1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                  {/* row 8 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/g5.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">
                            BullRunX
                          </span>
                          <span className="text-sm text-[#6B7280]">BULLX</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-red-500 gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right text-red-500"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 7l10 10" />
                          <path d="M17 8l0 9l-9 0" />
                        </svg>
                        -1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                  {/* row 9 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/g6.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">
                            WireLime
                          </span>
                          <span className="text-sm text-[#6B7280]">WIRE</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-primary gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right text-primary"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 7l-10 10" />
                          <path d="M8 7l9 0l0 9" />
                        </svg>
                        1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                  {/* row 10 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/g7.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">
                            FormulaCoin
                          </span>
                          <span className="text-sm text-[#6B7280]">FCOIN</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-red-500 gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right text-red-500"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 7l10 10" />
                          <path d="M17 8l0 9l-9 0" />
                        </svg>
                        -1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                  {/* row 11 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/g8.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">
                            VenomDAO
                          </span>
                          <span className="text-sm text-[#6B7280]">VENOM</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-primary gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right text-primary"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 7l-10 10" />
                          <path d="M8 7l9 0l0 9" />
                        </svg>
                        1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                  {/* row 12 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/g9.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">
                            Decentral
                          </span>
                          <span className="text-sm text-[#6B7280]">DECE</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-red-500 gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right text-red-500"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 7l10 10" />
                          <path d="M17 8l0 9l-9 0" />
                        </svg>
                        -1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                  {/* row 13 */}
                  <tr>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/g10.png"
                          alt="project logo"
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">Ark</span>
                          <span className="text-sm text-[#6B7280]">ARK</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $59.5T
                    </td>
                    <td>
                      <div className="flex items-center text-base text-primary gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right text-primary"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 7l-10 10" />
                          <path d="M8 7l9 0l0 9" />
                        </svg>
                        1.52%
                      </div>
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $28.7M
                    </td>
                    <td className="text-base text-neutral text-regular">
                      6.67%
                    </td>
                    <td className="text-base text-neutral text-regular">
                      $23K
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
                        Subscribe
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
