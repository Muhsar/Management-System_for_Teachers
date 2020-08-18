import {
  Loading,
  FirstTerm,
  SecondTerm,
  ThirdTerm
} from '../actions/types'

const initialState = {
  result:[],
  loading:false,
  msg:''
}

export default function(state= initialState, action) {
  switch (action.type) {
    case FirstTerm:
    return {
      ...state,
      result: action.payload,
      loading: false
    };
    case SecondTerm:
    return {
      ...state,
      result: action.payload,
      loading: false
    };
    case ThirdTerm:
    return {
      ...state,
      result: action.payload,
      loading: false
    };



    case Loading:
    return {
      ...state,
      loading: true
    };
    default:
    return state;
  }
}
