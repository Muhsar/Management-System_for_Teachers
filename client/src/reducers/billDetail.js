import {
Loading,
Bill_Detail,
Get_ClassBill
} from '../actions/types'

const initialState = {
    classBill:'',
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {

      case Bill_Detail:
        return {
          ...state,
          classBill:action.payload,
          loading: false
        };
        case Get_ClassBill:
          return {
            ...state,
            classBill:action.payload,
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
