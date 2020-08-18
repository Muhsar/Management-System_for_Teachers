import React, { Component } from 'react'
import PropTypes from 'prop-types'
import kR from '../unnamed.jpg'
import {connect} from 'react-redux'
import {teacherDetail, deleteTeacher} from '../actions/candidateAction'
import  {Link} from 'react-router-dom'
class Teacher extends Component {

  componentDidMount() {
    this.props.teacherDetail(this.props.match.params.teacher_id)
  }
  handleDelete=()=>{
    this.props.deleteTeacher(this.props.match.params.teacher_id)
  }
  render(){
    const {teacher} = this.props.teacher
    return(
            <div class="main-content">
      <div class='container-fluid'>
      <div class="col-md-8 mx-auto">
                              <aside class="profile-nav alt">
                                  <section class="card">
                                      <div class="card-header user-header alt bg-dark">
                                          <div class="media">
                                                  <img class="align-self-center rounded-circle mr-3" style={{width:'85px', height:'85px'}} alt="" src={kR}/>
                                              <div class="media-body">
                                                  <h2 class="text-light display-6">{teacher.surname+' '+teacher.name}</h2>
                                                  <p class="text-light">{teacher.clas}</p>
                                              </div>
                                          </div>
                                      </div>


                                      <ul class="list-group list-group-flush">

                                        <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Teacher's Identification Number:</div>
                                            <div className='col'>{teacher.teacher_id}</div>
                                          </div>
                                        </li>
                                          <li class="list-group-item">
                                            <div className='row'>
                                              <div className='col'>Gender:</div>
                                              <div className='col'>{teacher.gender}</div>
                                            </div>
                                          </li>


                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Address:</div>
                                            <div className='col'>{teacher.address}</div>
                                          </div>
                                          </li>


                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Email Address:</div>
                                            <div className='col'>{teacher.email}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Mobile Number:</div>
                                            <div className='col'>{teacher.number}</div>
                                          </div>
                                          </li>

                                      </ul>
                                      <div className='row'>
                                        <div className='col'>
                                        <Link to={'/editteacher/'+teacher.teacher_id} className='btn btn-outline-primary btn-block' type="button">Edit Teacher's Info</Link>
                                        </div>
                                        <div className='col'>
                                        <button onClick={this.handleDelete} className='btn btn-outline-danger btn-block' type="button">Delete Teacher</button>
                                        </div>
                                      </div>
                                  </section>
                              </aside>
                          </div>
      </div>
      </div>
    )
  }
}
Teacher.propTypes = {
  teacherDetail:PropTypes.func.isRequired
}
const mapStateToProps= state => {
return{
    teacher:state.teacher
  }
}
export default connect(mapStateToProps, {teacherDetail, deleteTeacher})(Teacher)
