import { initialPerson } from 'lib/person';
import { BaptismalInterface } from 'pages/baptismal/baptismal.interface';
import { getFetch, postSilentFetch } from 'request/request';

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

// export const loadBirth = (id) => async (dispatch) => {
//     if (id === 'new') {
//         dispatch(birthSuccessOne({ birthDate: currentDate(), occasionDate: currentDate() }));
//         dispatch(requestSuccess()); // reset all request states
//     } else {
//         const response = await request(`/certificates/birth/${id}`, dispatch);
//         if (response) {
//             dispatch(birthSuccessOne(response));
//         }
//     }
// };
//
// export const deleteBirth = (id) => async (dispatch) => {
//     console.log(id);
//     const response = await request(`/certificates/birth/${id}`, dispatch, null, 'delete');
//     if (response) {
//         dispatch(birthDeleted(response._id));
//         dispatch(deleteSuccess());
//     }
// };
//
export const saveBirth = async (data: BaptismalInterface) => {
  return await postSilentFetch('/certificates/birth/', data);
};
