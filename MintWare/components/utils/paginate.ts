export interface PaginatedResult {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    items: any[];
}

export const paginate = (
    array: any[],
    page: number = 1,
    pageSize: number = 5
): PaginatedResult => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedItems = array.slice(startIndex, endIndex);
    const totalItems = array.length;

    return {
        page,
        pageSize,
        totalItems,
        totalPages: Math.ceil(totalItems / pageSize),
        items: paginatedItems,
    };
};