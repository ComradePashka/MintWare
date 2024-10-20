'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { mockedProjectsList } from './data-mocks';
import { paginate, PaginatedResult } from '../utils/paginate';
import Pagination from '../ui/pagination';

const fetchData = async () => {
  const response = await fetch('/api/projects');
  return await response.json();
};

export default function ProjectList() {
  const [paginatedResult, setPaginatedResult] = useState<PaginatedResult>(paginate(mockedProjectsList, 1, 5));
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['projectsData'],
    queryFn: fetchData,
  });

  if (error) return <div className="w-full text-center">An error occured.</div>;
  if (isFetching) return <div className="w-full text-center">Loading...</div>;

  function handleChangePage(page: number) {
    setCurrentPage(page);
    setPaginatedResult(paginate(mockedProjectsList, page, 5))
  }

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
                  {paginatedResult.items.length ? paginatedResult.items.map((item) => {
                    return <tr>
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
                            src={item.logo}
                            alt="project logo"
                            width={32}
                            height={32}
                          />
                          <div className="flex flex-col">
                            <span className="text-base font-semibold">{item.name}</span>
                            <span className="text-sm text-[#6B7280]">{item.symbol}</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-base text-neutral text-regular">
                        {item.marketCap}
                      </td>
                      <td>
                        <div className={`${item.percent24h.includes('-') ? 'text-red-500' : 'text-primary'} flex items-center text-base  gap-2`}>
                          {item.percent24h.includes('-') ?
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
                            :
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
                          }
                          {item.percent24h}
                        </div>
                      </td>
                      <td className="text-base text-neutral text-regular">
                        {item.referralVolume}
                      </td>
                      <td className="text-base text-neutral text-regular">
                        {item.rewardPercent}
                      </td>
                      <td className="text-base text-neutral text-regular">
                        {item.rewardDollar}
                      </td>
                      <td>
                        <button className="btn btn-sm btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px] opacity-50 cursor-not-allowed">
                          {item.actions}
                        </button>
                      </td>
                    </tr>
                  }) : <tr></tr>}
                </tbody>
              </table>
              <Pagination
                page={currentPage}
                pageSize={paginatedResult.pageSize}
                totalItems={paginatedResult.totalItems}
                onPageChange={handleChangePage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
