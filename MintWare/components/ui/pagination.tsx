import { ReactElement } from 'react';

type PaginationProps = {
    page: number,
    pageSize: number,
    totalItems: number,
    onPageChange: (page: number) => void
};

export default function Pagination(props: PaginationProps): ReactElement {
    const { page, pageSize, totalItems, onPageChange } = props;
    const totalPages = Math.ceil(totalItems / pageSize);

    const handlePrevious = () => {
        if (page > 1) {
            onPageChange(page - 1);
        }
    };

    const handleNext = () => {
        if (page < totalPages) {
            onPageChange(page + 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`px-4 py-2 border-[1px] border-gray-200 ${i === page ? 'bg-gray-200' : 'bg-white'
                        }`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="flex w-full items-center justify-end mt-4 gap-x-4 text-sm text-[#6B7280]">
            <div>
                Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, totalItems)} of {totalItems} entries
            </div>
            <div className='flex '>
                <button
                    onClick={handlePrevious}
                    disabled={page === 1}
                    className="px-4 py-1 border-[1px] border-gray-200 hover:bg-gray-200 bg-white text-white rounded-l disabled:opacity-50"
                >
                    <svg
                        fill="#000000"
                        width="10px"
                        height="10px"
                        viewBox="0 0 512 512"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        transform="matrix(-1, 0, 0, 1, 0, 0)"
                    >
                        <path d="M214.78,478l-20.67-21.57L403.27,256,194.11,55.57,214.78,34,446.46,256ZM317.89,256,86.22,34,65.54,55.57,274.7,256,65.54,456.43,86.22,478Z" />
                    </svg>
                </button>
                {renderPageNumbers()}
                <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className="px-4 py-1 border-[1px] border-gray-200 hover:bg-gray-200 bg-white text-white rounded-r disabled:opacity-50"
                >
                    <svg
                        fill="#000000"
                        width="10px"
                        height="10px"
                        viewBox="0 0 512 512"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M214.78,478l-20.67-21.57L403.27,256,194.11,55.57,214.78,34,446.46,256ZM317.89,256,86.22,34,65.54,55.57,274.7,256,65.54,456.43,86.22,478Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}