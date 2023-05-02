import {deleteSilentFetch, postSilentFetch, putSilentFetch} from 'request/request';

export const remove = async (id: string,type:string):Promise<void> => {
    await deleteSilentFetch(`/certificates/${type}/${id}`);
};

export const add = async <T>(data: T,type:string) => {
    return await postSilentFetch('/certificates/${type}/', data);
};

export const update = async <T>(data: T,type:string) => {
    // @ts-ignore
    return await putSilentFetch(`/certificates/${type}/${data._id}`, data);
};
