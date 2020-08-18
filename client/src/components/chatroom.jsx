import React, { Component } from 'react'
import kR from '../unnamed.jpg'
import {connect} from 'react-redux'
import {getStudents} from '../actions/candidateAction'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
class ChatRoom extends Component {


componentDidMount() {
    this.props.getStudents()
}
  render(){
    const {students} = this.props.students
    const Chats = (this.props.students.loading===false)?((students.length) ? (
            students.map(student => {
              return(
                <div class="au-message__item unread">
                    <div class="au-message__item-inner">
                        <Link class="au-message__item-text" to={'/chat/'+student.student_id}>
                            <div class="avatar-wrap">
                                <div class="avatar">
                                    <img src={kR} alt={student.name}/>
                                </div>
                            </div>
                            <div class="text">
                                <h5 class="name">{student.surname+' '+student.name}</h5>
                            </div>
                        </Link>
                    </div>
                </div>


              )
            })
          ):(<div className="spinner-border spinner-border-lg"></div>)
        ):(<div className="spinner-border spinner-border-lg"></div>)
    return(
            <div class="main-content">
      <div class='container-fluid'>
      <div class="col-md-8 mx-auto">
      <div class="au-card au-card--no-shadow au-card--no-pad m-b-40">
                                  <div class="au-card-title" style={{backgroundImage:'url('+kR+')'}}>
                                      <div class="bg-overlay bg-overlay--blue"></div>

                                      <h3>
                                          <i class="zmdi zmdi-comment-text"></i>Chat Room</h3>
                                      <button class="au-btn-plus">
                                          <i class="zmdi zmdi-plus"></i>
                                      </button>
                                  </div>
                                  <div class="au-inbox-wrap js-inbox-wrap">
                                      <div class="au-message js-list-load">

                                          <div class="au-message-list">

                                            {Chats}

                                          </div>

                                      </div>

                                  </div>
                              </div>
                          </div>
      </div>
      </div>
    )
  }
}
ChatRoom.propTypes = {
  students: PropTypes.object.isRequired,
  getStudents: PropTypes.func.isRequired
}
const mapStateToProps= state => {
return{
  students: state.students
}
}
export default connect(mapStateToProps,{getStudents})(ChatRoom)
