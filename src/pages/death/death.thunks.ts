import { LoaderFunctionArgs } from '@remix-run/router/utils';
import { initialPerson } from 'lib/person';
import { BaptismalConfirmation, BaptismalInterface } from 'pages/baptismal/baptismal.interface';
import { deleteSilentFetch, getFetch, postSilentFetch, putSilentFetch } from 'request/request';

export const getBaptisms = async function (type: BaptismalConfirmation, baptismalPaginationParams: LoaderFunctionArgs) {
  const {
    params: { page },
  } = baptismalPaginationParams;
  return await postSilentFetch(`/certificates/birth/page/`, { page, type });
};

export const getBaptismal = async function (type: BaptismalConfirmation, baptismalParams: LoaderFunctionArgs) {
  const {
    params: { id = 'new' },
  } = baptismalParams;

  if (id !== 'new') {
    return await getFetch(`/certificates/death/${id}`);
  } else {
    return {
      certificateType: type,
      firstName: '',
      lastName: '',
      birthDate: new Date(),
      occasionDate: new Date(),
      occasionType: type,
      address: '',
      parent1: initialPerson,
      parent2: initialPerson,
      celebrantPriest: initialPerson,
      sponsor1: initialPerson,
      sponsor2: initialPerson,
      bookNumber: 0,
      pageNumber: 0,
    };
  }
};

export const deleteBirth = async (id: string) => {
  await deleteSilentFetch(`/certificates/birth/${id}`);
};

export const addBirth = async (data: BaptismalInterface) => {
  return await postSilentFetch('/certificates/birth/', data);
};

export const updateBirth = async (data: BaptismalInterface) => {
  return await putSilentFetch(`/certificates/birth/${data._id}`, data);
};
