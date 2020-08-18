import React, { Component } from 'react'
import PropTypes from 'prop-types'
import kR from '../unnamed.jpg'
import {connect} from 'react-redux'
import {studentDetail} from '../actions/candidateAction'
import  {Link} from 'react-router-dom'
class Student extends Component {

  componentDidMount() {
    this.props.studentDetail(this.props.match.params.student_id)
  }

  render(){
    const {student} = this.props.student
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
                                                  <h2 class="text-light display-6">{student.surname+' '+student.name}</h2>
                                                  <p class="text-light">{student.clas}</p>
                                              </div>
                                          </div>
                                      </div>


                                      <ul class="list-group list-group-flush">
                                        {
                                          (student.department)?(
                                            <li class="list-group-item">
                                            <div className='row'>
                                            <div className='col'>Department:</div>
                                            <div className='col'>{student.department}</div>
                                            </div>
                                            </li>
                                          ):(
                                            <React.Fragment></React.Fragment>
                                          )
                                        }
                                        <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Student's Identification Number:</div>
                                            <div className='col'>{student.student_id}</div>
                                          </div>
                                        </li>
                                          <li class="list-group-item">
                                            <div className='row'>
                                              <div className='col'>Gender:</div>
                                              <div className='col'>{student.gender}</div>
                                            </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Religion:</div>
                                            <div className='col'>{student.religion}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Date Of Birth:</div>
                                            <div className='col'>{student.date}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>State Of Origin:</div>
                                            <div className='col'>{student.sog}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Local Government Area:</div>
                                            <div className='col'>{student.lga}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Address:</div>
                                            <div className='col'>{student.address}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Guardian's Name:</div>
                                            <div className='col'>{student.pname}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Guardian's Surname:</div>
                                            <div className='col'>{student.psurname}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Email Address:</div>
                                            <div className='col'>{student.email}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Mobile Number:</div>
                                            <div className='col'>{student.number}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Guardian's Address:</div>
                                            <div className='col'>{student.paddress}</div>
                                          </div>
                                          </li>
                                      </ul>

                                  </section>
                              </aside>
                          </div>
      </div>
      </div>
    )
  }
}
Student.propTypes = {
  studentDetail:PropTypes.func.isRequired
}
const mapStateToProps= state => {
return{
    student:state.student
  }
}
export default connect(mapStateToProps, {studentDetail})(Student)
