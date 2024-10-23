import { ReactElement } from "react";

export default function Summary(): ReactElement {
  return (
    <div className="card w-[100%] bg-base-100 w-96 shadow-md rounded rounded-tl-[16px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[16px]">
      <div className="card-body">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full">
            <span className="text-neutral text-xl font-regular">Total</span>
            <span className="text-base-content text-xl font-semibold ml-auto">
              0 MINT
            </span>
          </div>
          <p className="text-neutral text-xl font-regular mt-4">
            All changes will become public immediately after saving. A fee will
            only be charged when adding a new project; editing existing projects
            is free of charge.
          </p>
          <div className="flex w-full mt-4 items-center justify-center">
            <button className="btn btn-md btn-primary w-[320px] text-white rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
