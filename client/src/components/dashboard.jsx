import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {getStudents,getClassBill,getStudentBill} from '../actions/candidateAction'
import {connect} from 'react-redux'
import jwt_decode from 'jwt-decode'
import {Link} from 'react-router-dom'
class Dashboard extends Component{

  componentDidMount() {
    const decode = jwt_decode(localStorage.token)
    this.props.getStudents()
    this.props.getClassBill(decode.clas)
    this.props.getStudentBill()
  }
  render(){
    const {studentBill} = this.props.studentBill
    const {students} = this.props.students
    const preview = students.slice(0,10)
    const {classBill} = this.props.classBill
    const decode = jwt_decode(localStorage.token)
    const Students = (this.props.students.loading===false)?((preview.length) ? (
            preview.map(student => {
                return (
                  <tr key ={student._id} >
                      <td>{student.surname+' '+student.name}</td>
                      <td class="text-right">{
                        (student.gender==='Male')?('M'):('F')
                      }</td>
                  </tr>
                )
            })
        ) : (
                <tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No data available in table</td></tr>
            )):(<div className="spinner-border spinner-border-lg"></div>)
    return(
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="overview-wrap">
                                    <h2 class="title-1">Dashboard</h2>

                                </div>
                            </div>
                        </div>
                        <div class="row m-t-25">
                            <div class="col-sm-6 col-lg-3">
                                <div class="overview-item overview-item--c1">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="fa fa-users"></i>
                                            </div>
                                            <div class="text">
                                                <h2>{students.length}</h2>
                                                <span>Students</span>
                                            </div>
                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart1"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="overview-item overview-item--c2">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="fa fa-building"></i>
                                            </div>
                                            <div class="text">
                                                <h2>{decode.clas}</h2>
                                            </div>
                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart2"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="overview-item overview-item--c3">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="fa fa-times"></i>
                                            </div>
                                            <div class="text">
                                                <h2>{studentBill.length}</h2>
                                                <span>Debtors</span>
                                            </div>
                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart3"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="overview-item overview-item--c4">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="fa fa-check"></i>
                                            </div>
                                            <div class="text">
                                                <h2>{students.length - studentBill.length}</h2>
                                                <span>Debts Free</span>
                                            </div>
                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart4"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="row">
                <div class="col-lg-8 mb-5 mb-lg-0">
                <h2 class="title-1 m-b-25">Class Bill</h2>
                    <div class="blog_left_sidebar">
                    <article class="blog_item">
                    <div class="card">
                    <div class="card-header">
                    <strong class="card-title">{classBill.clas}</strong>
                    </div>
                    <div class="card-body">
                    <table class="table table-bordered">

                    <tbody>
                    <tr>
                    <td colspan='3'>School Fees</td>
                    <td>#{classBill.fees}</td>
                    </tr>
                    <tr>
                    <td colspan='3'>Uniform</td>
                    <td>#{classBill.uniform}</td>
                    </tr>
                    <tr>
                    <th></th>
                    <th>No. Of Exercise Books Needed</th>
                    <th>Price Per book</th>
                    <th>Total</th>
                    </tr>
                    <tr>
                    <th>Exercise Book</th>
                    <th>{classBill.exerciseBooks}</th>
                    <th>#{classBill.pricePerBook}</th>
                    <th>#{classBill.exerciseBooks*classBill.pricePerBook}</th>
                    </tr>
                    <tr>
                    <th colspan='2'></th>
                    <th>No. Of Text Books Needed</th>
                    <th>Total Price</th>
                    </tr>
                    <tr>
                    <th colspan='2'>Text Books</th>
                    <th>{classBill.textBooks}</th>
                    <th>#{classBill.totalTextBookPrice}</th>
                    </tr>
                    <tr>
                    <th colspan='3'>Total</th>
                    <th>
                    #{classBill.fees+classBill.uniform+(classBill.exerciseBooks*classBill.pricePerBook)+classBill.totalTextBookPrice}
                    </th>
                    </tr>
                    </tbody>
                    </table>
                    </div>
                    </div>
                    </article>
                    </div>
                </div>
                <div class="col-lg-4">
                                <h2 class="title-1 m-b-25">Students</h2>
                                <div class="au-card au-card--bg-blue au-card-top-countries m-b-40">
                                    <div class="au-card-inner">
                                        <div class="table-responsive">
                                            <table class="table table-top-countries">
                                                <tbody>
                                                    {Students}
                                                </tbody>
                                            </table>
                                            <Link to='/students' type='button' className='btn btn-block text-center btn-outline-light'>View All</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
            </div>

    )
  }
}
Dashboard.propTypes={
  getStudents:PropTypes.func.isRequired,
  getClassBill:PropTypes.func.isRequired,
  getStudentBill:PropTypes.func.isRequired,
  students:PropTypes.object.isRequired,
  classBill:PropTypes.object.isRequired,
  studentBill:PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    students:state.students,
    classBill:state.classBill,
    studentBill:state.studentBill
  }
}
export default connect(mapStateToProps,{getStudents,getClassBill,getStudentBill})(Dashboard)
