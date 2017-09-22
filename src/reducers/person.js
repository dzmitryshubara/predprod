import { ADD_PERSON, CONTACTS,CHANGE_PERSON, DELETE_PERSON } from '../constants';
const initialState = CONTACTS;

export default function person(state=initialState, action) {
  switch(action.type) {
    case ADD_PERSON:
      return [
        ...state,
        action.data
      ];
    case CHANGE_PERSON:
      return [
        ...state.filter(person => person.id !== action.data.id),
        action.data
      ]
    case DELETE_PERSON:
      const personId = action.id;
      return state.filter(person => person.id !== personId);
    default: return state;
  }
}
