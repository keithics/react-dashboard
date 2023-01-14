import { initialPerson } from 'lib/person';
import { BaptismalInterface } from 'pages/baptismal/baptismal.interface';
import { deleteSilentFetch, getFetch, postSilentFetch, putSilentFetch } from 'request/request';

export const getBaptisms = async ({ params: { page = 1 } }) => {
  return await postSilentFetch('/certificates/birth/page/', { page });
};

export const getBaptismal = async ({ params: { id = 'new' } }) => {
  if (id !== 'new') {
    return await getFetch('/certificates/birth/' + id);
  } else {
    return {
      certificateType: 'birth',
      firstName: '',
      lastName: '',
      birthDate: new Date(),
      occasionDate: new Date(),
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
