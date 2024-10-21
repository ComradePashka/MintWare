'use client';

import { useState } from 'react';

export default function RewardAndTransaction() {
  const [tabSelected, setTabSelected] = useState<number>(0);

  return (
    <div className="card w-[100%] bg-base-100 w-96 shadow-md rounded rounded-tl-[16px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[16px]">
      <div className="card-body">
        <div role="tablist" className="tabs tabs-lg tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            id="tab1"
            className={`tab font-medium ${
              tabSelected === 0 ? 'text-primary' : 'text-neutral'
            }`}
            aria-label="Reward"
            style={{
              borderBottom:
                tabSelected === 0 ? '2px solid' : '1px solid #E7ECFF',
            }}
            checked={tabSelected === 0}
            onChange={() => setTabSelected(0)}
          />
          <div role="tabpanel" className="tab-content mt-4">
            <div className="flex w-full h-[94px] items-center justify-center bg-[#E7ECFF] border-primary rounded-[8px] px-7">
              <p className="text-base-content text-2xl font-bold">0 DEMO</p>
            </div>
            <div className="flex mt-6">
              <div className="flex-1">
                <span className="text-base-content text-lg font-semibold">
                  10000
                </span>
                <span className="text-neutral text-lg font-regular ml-2">
                  / 100,000 tokens
                </span>
              </div>
              <div className="flex-0">
                <button className="btn btn-md btn-primary btn-outline rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px] hover:!text-white">
                  Remove Token
                </button>
                <button className="btn btn-md w-[160px] btn-primary text-white rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px] ml-2">
                  Add Token
                </button>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            id="tab2"
            className={`tab font-medium ${
              tabSelected === 1 ? 'text-primary' : 'text-neutral'
            }`}
            aria-label="Transaction History"
            style={{
              borderBottom:
                tabSelected === 1 ? '2px solid' : '1px solid #E7ECFF',
            }}
            checked={tabSelected === 1}
            onChange={() => setTabSelected(1)}
          />
          <div role="tabpanel" className="tab-content mt-4">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-base-content font-semibold text-base">
                      Date & Time
                    </th>
                    <th className="text-base-content font-semibold text-base">
                      Wallet
                    </th>
                    <th className="text-base-content font-semibold text-base">
                      Rewards (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-base-content text-base">
                      08/24/2024 10:38 AM
                    </td>
                    <td className="text-base-content text-base">
                      CryptoDawg12345
                    </td>
                    <td className="text-base-content text-base">$25.00</td>
                  </tr>
                  <tr>
                    <td className="text-base-content text-base">
                      08/24/2024 10:38 AM
                    </td>
                    <td className="text-base-content text-base">
                      CryptoDawg12345
                    </td>
                    <td className="text-base-content text-base">$25.00</td>
                  </tr>
                  <tr>
                    <td className="text-base-content text-base">
                      08/24/2024 10:38 AM
                    </td>
                    <td className="text-base-content text-base">
                      CryptoDawg12345
                    </td>
                    <td className="text-base-content text-base">$25.00</td>
                  </tr>
                  <tr>
                    <td className="text-base-content text-base">
                      08/24/2024 10:38 AM
                    </td>
                    <td className="text-base-content text-base">
                      CryptoDawg12345
                    </td>
                    <td className="text-base-content text-base">$25.00</td>
                  </tr>
                  <tr>
                    <td className="text-base-content text-base">
                      08/24/2024 10:38 AM
                    </td>
                    <td className="text-base-content text-base">
                      CryptoDawg12345
                    </td>
                    <td className="text-base-content text-base">$25.00</td>
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
