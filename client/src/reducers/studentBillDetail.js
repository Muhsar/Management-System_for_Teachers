import {
Loading,
StudentBillDetail
} from '../actions/types'

const initialState = {
    debtor:'',
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {

      case StudentBillDetail:
        return {
          ...state,
          debtor:action.payload,
          loading: false
        }
        
      case Loading:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
