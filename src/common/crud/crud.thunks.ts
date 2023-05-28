import { LoaderFunctionArgs } from '@remix-run/router/utils';
import { CrudInterface, WithId } from 'common/crud/crud.interface';
import { ResponseInterface } from 'common/interfaces/request.interface';
import { deleteSilentFetch, getFetch, postSilentFetch, putSilentFetch } from 'request/request';

export function crudThunks<T>({ url, defaultValue }: { url: string; defaultValue: T }): CrudInterface<T> {
  const page = async function (paginationParams: LoaderFunctionArgs): Promise<ResponseInterface<T>> {
    const {
      params: { page },
    } = paginationParams;
    return await postSilentFetch(`/${url}/page/`, { page });
  };

  const get = async function (params: LoaderFunctionArgs):Promise<T> {
    const {
      params: { id = 'new' },
    } = params;

    if (id !== 'new') {
      return await getFetch(`/${url}/${id}`);
    } else {
      return defaultValue;
    }
  };

  const remove = async (id: string) => {
    await deleteSilentFetch(`/${url}/${id}`);
  };

  const add = async (data: T) => {
    return await postSilentFetch<T, T>('/${url}/', data);
  };

  const update = async (data: T extends WithId ? T : never) => {
    return await putSilentFetch(`/${url}/${data._id}`, data);
  };

  return { page, get, remove, add, update };
}
