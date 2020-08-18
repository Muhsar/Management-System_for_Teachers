import {
  Get_Students,
  Loading,
  Student_Detail,
  Preview_Students,
  Teacher_Detail,
  Update_Teacher,
  Get_News,
  Bill_Detail,
  Get_StudentBill,
  Get_ClassBill,
  StudentBillDetail,
  PaidStudent,
  Add_Chat,
  Get_Chat,
  Update_Chat,
  Delete_Chat,
  Muslims,
  Christians,
  Add_ChatPage,
  Get_ChatPage,
  GetResult,
  AddResult,
  GetResults,
  GetTotal,
  FirstTerm,
  SecondTerm,
  ThirdTerm,
  DeleteResult
} from './types'
import axios from 'axios'

export const teacherDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/teacher/'+id)
  .then(res =>
    dispatch({
      type: Teacher_Detail,
      payload:res.data
    }),
  )

};


export const updateTeacher = (id,teacher) => (
  dispatch
) => {
  axios
  .post(`/updateteacher/${id}`, teacher)
  .then(res =>
    dispatch({
      type: Update_Teacher,
      payload: res.data,
      msg:res.data.msg
    })
  )

};


export const getStudents = () => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/students')
  .then(res =>
    dispatch({
      type: Get_Students,
      payload: res.data
    }),
  )

};
export const getMuslims = () => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/muslims')
  .then(res =>
    dispatch({
      type: Muslims,
      payload: res.data
    }),
  )

};
export const getChristians = () => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/christians')
  .then(res =>
    dispatch({
      type: Christians,
      payload: res.data
    }),
  )

};
export const previewStudents = () => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/students')
  .then(res =>
    dispatch({
      type: Preview_Students,
      payload: res.data.slice(0,10)
    }),
  )

};
export const studentDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/student/'+id)
  .then(res =>
    dispatch({
      type: Student_Detail,
      payload:res.data
    }),
  )

};




export const getNews =()=>(dispatch)=>{
  axios.get('/news')
  .then(res=>dispatch({
    type:Get_News,
    payload:res.data
  }))
}




export const billDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/bill/'+id)
  .then(res =>
    dispatch({
      type: Bill_Detail,
      payload:res.data
    }),
  )

};
export const getClassBill = (clas) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/classbill/'+clas)
  .then(res =>
    dispatch({
      type: Get_ClassBill,
      payload:res.data
    }),
  )

};

export const getPaidStudent =()=>(dispatch)=>{
  axios.get('/paid')
  .then(res=>dispatch({
    type:PaidStudent,
    payload:res.data
  }))
}
export const getStudentBill =()=>(dispatch)=>{
  axios.get('/studentbill')
  .then(res=>dispatch({
    type:Get_StudentBill,
    payload:res.data
  }))
}
export const studentBillDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/studentbill/'+id)
  .then(res =>
    dispatch({
      type: StudentBillDetail,
      payload:res.data
    }),
  )

};

export const addChat = (chat) => (
  dispatch
) => {
  axios
  .post('/chat', chat)
  .then(res =>
    dispatch({
      type:Add_Chat,
      payload:res.data
    }))
  }
  export const getChat =()=>(dispatch)=>{
    axios.get('/chat')
    .then(res=>dispatch({
      type:Get_Chat,
      payload:res.data
    }))
  }
  export const updateChat =(id,chat)=>(dispatch)=>{
    axios.post(`/chat/${id}`, chat)
    .then(res=>dispatch({
      type:Update_Chat,
      payload:res.data
    }))
  }
  export const deleteChat =(id)=>(dispatch)=>{
    axios.delete('/chat/'+id)
    .then(res=>dispatch({
      type:Delete_Chat,
      payload:id
    }))
  }
  export const addChatPage = (chat) => (
    dispatch
  ) => {
    axios
    .post('/chatpage', chat)
    .then(res =>
      dispatch({
        type:Add_ChatPage,
        payload:res.data
      }))
    }
    export const getChatPage =(id)=>(dispatch)=>{
      axios.get('/chatpage/'+id)
      .then(res=>dispatch({
        type:Get_ChatPage,
        payload:res.data
      }))
    }
    export const setLoading = () => {
      return {
        type: Loading
      };
    };
    export const addResult = (result) => (
      dispatch
    ) => {
      axios
      .post('/result', result)
      .then(res =>
        dispatch({
          type:AddResult,
          payload:(res.data.error)?(''):(res.data),
          msg:(res.data.error)?(res.data.error):('')
        }))
      }
      export const getResult =(id)=>(dispatch)=>{
        axios.get('/result/'+id)
        .then(res=>dispatch({
          type:GetResult,
          payload:res.data
        }))
      }
      export const deleteResult =(id)=>(dispatch)=>{
        axios.delete('/result/'+id)
        .then(res=>dispatch({
          type:DeleteResult,
          payload:id
        }))
      }
      export const firstTerm =(id)=>dispatch=>{
        axios.get('/1sttermresult/'+id)
        .then(res=>dispatch({
          type:FirstTerm,
          payload:res.data
        }))
      }
      export const secondTerm =(id)=>dispatch=>{
        axios.get('/2ndtermresult/'+id)
        .then(res=>dispatch({
          type:SecondTerm,
          payload:res.data
        }))
      }
      export const thirdTerm =(id)=>dispatch=>{
        axios.get('/3rdtermresult/'+id)
        .then(res=>dispatch({
          type:ThirdTerm,
          payload:res.data
        }))
      }
