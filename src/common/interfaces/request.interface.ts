export interface GetParamsInterface {
    params: {
        id: string;
    };
}

export interface PaginationInterface {
    params: {
        page: string;
    };
}

export interface ResponseInterface<T> {
    currenPage: number;
    docs: T[];
    totalPages: number;
}
