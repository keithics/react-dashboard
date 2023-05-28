import {LoaderFunctionArgs} from '@remix-run/router/utils';
import {ResponseInterface} from 'common/interfaces/request.interface';

export type WithId = {_id: string};

export interface CrudInterface<T> {
    add: (data: T) => Promise<T>;
    get: (params: LoaderFunctionArgs) => Promise<T>;
    update: (data: T extends WithId ? T : never) => Promise<T>;
    page: (paginationParams: LoaderFunctionArgs) => Promise<ResponseInterface<T>>;
    remove: (id: string) => Promise<void>;
}
