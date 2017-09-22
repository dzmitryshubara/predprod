import { FILTER_LIST } from '../constants';

export default function filter(state = '', action) {
  switch (action.type) {
    case FILTER_LIST:
      return action.searchValue;
    default: return state;
  }
}
