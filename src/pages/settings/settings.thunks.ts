import {SettingsInterface} from 'pages/settings/settings.interface';
import {getSilentFetch, putFetch} from 'request/request';

export const getSettings = async function () {
  return await getSilentFetch(`/settings`);
};

export const updateSettings = async (data: SettingsInterface) => {
  return await putFetch(`/settings`, data);
};
