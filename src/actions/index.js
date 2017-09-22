import { FILTER_LIST, ADD_PERSON, CHANGE_PERSON, DELETE_PERSON } from '../constants';

export function filterList(searchValue) {
  return {
    type: FILTER_LIST,
    searchValue
  };
}
export function deletePerson(id) {
  return {
    type: DELETE_PERSON,
    id
  };
}

export function changePerson(data) {
  return {
    type: CHANGE_PERSON,
    data
  };
}

export function addPerson(data) {
  return {
    type: ADD_PERSON,
    data
  }
}
