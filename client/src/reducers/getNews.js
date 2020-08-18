import {Get_News,
Add_News,
Delete_News,
Loading,
Update_News
} from '../actions/types'

const initialState = {
    news:[],
    loading:false,
    msg:''
}

export default function(state= initialState, action) {
    switch (action.type) {
      case Get_News:
        return {
          ...state,
          news: action.payload,
          loading: false
        };

      case Delete_News:
        return {
          ...state,
          news: state.news.filter(student => student._id !== action.payload)
        };
      case Add_News:
        return {
          ...state,
          news: [action.payload, ...state.news],
          msg: action.msg
        };
      case Update_News:
        return{
          ...state,
          news:[action.payload]
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
