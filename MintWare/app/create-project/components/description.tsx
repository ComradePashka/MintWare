import { ReactElement } from "react";

export default function Description(): ReactElement {
  return (
    <div className="card w-[100%] bg-base-100 w-96 shadow-md rounded rounded-tl-[16px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[16px]">
      <div className="card-body">
        <div className="card-title">
          <h2 className="text-base-content">Description</h2>
        </div>
        <div className="flex flex-col w-full mt-4">
          <textarea
            className="w-full h-[120px] bg-[#E7ECFF] border-solid border-[1px] border-primary rounded rounded-[8px] px-4 py-2 focus:outline-0"
            placeholder="Enter description here"
          />
        </div>
      </div>
    </div>
  );
}
