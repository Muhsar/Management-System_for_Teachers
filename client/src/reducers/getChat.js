import {Get_Chat,
Add_Chat,
Delete_Chat,
Loading,
Update_Chat,
Get_ChatPage,
Add_ChatPage
} from '../actions/types'

const initialState = {
    chats:[],
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {
      case Get_Chat:
        return {
          ...state,
          chats: action.payload,
          loading: false
        };
        case Get_ChatPage:
          return {
            ...state,
            chats: action.payload,
            loading: false
          };
      case Delete_Chat:
        return {
          ...state,
          chats: state.chats.filter(student => student._id !== action.payload)
        };
      case Add_Chat:
        return {
          ...state,
          chats: [action.payload,...state.chats]
        };
        case Add_ChatPage:
          return {
            ...state,
            chats: [action.payload,...state.chats]
          };
      case Update_Chat:
        return{
          ...state,
          chats:[action.payload]
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
