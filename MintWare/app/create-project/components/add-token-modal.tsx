import { ReactElement } from 'react';

export default function AddTokenModal(): ReactElement {
  return (
    <>
      <dialog id="add_token_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Tokens</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-neutral font-regular">
                Token Address
              </span>
              <span className="label-text-alt text-base-content font-semibold">
                Balance: 29,697,055 DEMO
              </span>
            </label>
            <label className="input flex items-center gap-2 bg-[#E7ECFF] border-solid border-[1px] border-primary">
              <input
                type="text"
                className="grow text-neutral font-regular"
                placeholder="Amount"
                value={'0.00'}
              />
              <button className="btn btn-sm w-[80px] btn-primary btn-outline rounded rounded-[4px] hover:!text-white">
                MAX
              </button>
            </label>
          </div>
          <div className="flex flex-row w-full gap-2 mt-4">
            <button className="btn btn-sm btn-outline h-[38px] btn-primary rounded-full hover:!text-white">
              25%
            </button>
            <button className="btn btn-sm btn-outline h-[38px] btn-primary rounded-full hover:!text-white">
              50%
            </button>
            <button className="btn btn-sm btn-outline h-[38px] btn-primary rounded-full hover:!text-white">
              75%
            </button>
            <button className="btn btn-sm btn-outline h-[38px] btn-primary rounded-full hover:!text-white">
              100%
            </button>
          </div>
          <div className="flex w-full mt-4">
            <button className="btn btn-md btn-primary w-full text-white rounded rounded-tl-[8px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[8px]">
              Add Tokens
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
