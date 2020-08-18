import {Get_Students,
Add_Student,
Delete_Student,
Loading,
Student_Detail,
Preview_Students,
Update_Student,
Muslims,
Christians
} from '../actions/types'

const initialState = {
    students:[],
    loading:false,
    msg:''
}

export default function(state= initialState, action) {
    switch (action.type) {
      case Get_Students:
        return {
          ...state,
          students: action.payload,
          loading: false
        };
        case Muslims:
          return {
            ...state,
            students: action.payload,
            loading: false
          };
          case Christians:
            return {
              ...state,
              students: action.payload,
              loading: false
            };

      case Delete_Student:
        return {
          ...state,
          students: state.students.filter(student => student._id !== action.payload)
        };
      case Add_Student:
        return {
          ...state,
          students: [action.payload, ...state.students],
          msg: action.msg
        };
      case Update_Student:
        return{
          ...state,
          students:[action.payload]
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
