import {
Loading,
News_Detail,
} from '../actions/types'

const initialState = {
    info:'',
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {

      case News_Detail:
        return {
          ...state,
          info:action.payload,
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
