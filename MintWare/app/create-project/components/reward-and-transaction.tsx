'use client';

import { useState } from 'react';

export default function RewardAndTransaction() {
  const [tabSelected, setTabSelected] = useState<number>(0);

  return (
    <div className="card w-[100%] bg-base-100 w-96 shadow-md rounded rounded-tl-[16px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[16px]">
      <div className="card-body">
        <div className="card-body px-0">
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
              <div className="flex flex-col w-full justify-center bg-[#E7ECFF] border-primary rounded-[8px] p-7">
                <h2 className="text-base-content text-2xl font-bold">0 DEMO</h2>
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
              Tab content 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
