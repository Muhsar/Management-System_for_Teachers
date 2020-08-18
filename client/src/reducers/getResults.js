import {GetResults,
Loading,
} from '../actions/types'

const initialState = {
    results:[],
    loading:false,
    msg:''
}

export default function(state= initialState, action) {
    switch (action.type) {
      case GetResults:
        return {
          ...state,
          results: action.payload,
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
