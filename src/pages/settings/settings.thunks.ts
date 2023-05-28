import { getSilentFetch, postFetch } from 'request/request';

export const getSettings = async function () {
  return await getSilentFetch(`/settings`);
};

export const updateSettings = async (data: FormData) => {
  return await postFetch(`/settings`, data);
};
