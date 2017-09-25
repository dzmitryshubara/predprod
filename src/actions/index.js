import { FILTER_LIST, ADD_PERSON, CHANGE_PERSON, DELETE_PERSON } from '../constants';

export const filterList = searchValue => {
  return {
    type: FILTER_LIST,
    searchValue
  };
}

export const deletePerson = id => {
  return {
    type: DELETE_PERSON,
    id
  };
}

export const changePerson = data => {
  return {
    type: CHANGE_PERSON,
    data
  };
}

export const addPerson = data => {
  return {
    type: ADD_PERSON,
    data
  }
}
