import {
Loading,
Student_Detail,
} from '../actions/types'

const initialState = {
    student:'',
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {

      case Student_Detail:
        return {
          ...state,
          student:action.payload,
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
