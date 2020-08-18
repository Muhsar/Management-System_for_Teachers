import { combineReducers } from "redux";
import getTeachers from './getTeachers'
import getStudents from './getStudents'
import teacherDetail from './teacherDetail'
import studentDetail from './studentDetail'
import getNews from './getNews'
import newsDetail from './newsDetail'
import getBill from './getBill'
import billDetail from './billDetail'
import getStudentBill from './getStudentBill'
import studentBillDetail from './studentBillDetail'
import getChat from './getChat'
import getResult from './getResult'
import getResults from './getResults'
export default combineReducers({
  teachers:getTeachers,
  students:getStudents,
  student:studentDetail,
  teacher:teacherDetail,
  news: getNews,
  info:newsDetail,
  classBill:billDetail,
  bill:getBill,
  studentBill:getStudentBill,
  debtor:studentBillDetail,
  chats:getChat,
  result:getResult,
  results:getResults
})
