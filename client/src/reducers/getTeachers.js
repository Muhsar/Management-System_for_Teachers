import {Get_Teachers,
Add_Teacher,
Delete_Teacher,
Teacher_Detail,
Preview_Teachers,
Loading,
Update_Teacher
} from '../actions/types'

const initialState = {
    teachers:[],
    loading:false,
    msg:'',
    error:''
}

export default function(state= initialState, action) {
    switch (action.type) {
      case Get_Teachers:
        return {
          ...state,
          teachers: action.payload,
          loading: false
        };

      case Delete_Teacher:
        return {
          ...state,
          teachers: state.teachers.filter(teacher => teacher._id !== action.payload)
        };
      case Add_Teacher:
        return {
          ...state,
          teachers: [action.payload, ...state.teachers],
          msg: action.msg,
          error:action.error
        };
      case Update_Teacher:
        return{
          ...state,
          teachers:[action.payload]
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
