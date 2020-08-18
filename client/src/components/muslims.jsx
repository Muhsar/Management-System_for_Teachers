import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {getMuslims} from '../actions/candidateAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class Muslims extends Component {

  componentDidMount() {
    this.props.getMuslims()
  }
  render(){
    const {students} = this.props.students
    const studentsList = (this.props.students.loading===false)?((students.length) ? (
            students.map(student => {
                return (
                  <tr className='odd' key={student._id}>
                  <td>
                  <div className='dropdown'>
                      <Link className='text-secondary nav-link dropdown-toggle' id='navbardrop' to='#' data-toggle='dropdown'>  {student.name}</Link>
                      <div className='dropdown-menu'>
                      <Link className='text-secondary dropdown-item' to={'/student/'+student.student_id}> view Child's Info</Link>
                      <Link to={'/editstudent/'+student.student_id} className='text-secondary dropdown-item'>Edit Student's Info</Link>
                      </div>
                  </div>
                  </td>
                  <td>{student.surname}</td>
                  <td>{student.clas}</td>
                  <td>{student.gender}</td>
                  <td className='sorting_1'>{student.age}</td>

                  </tr>
                )
            })
        ) : (
                <tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No data available in table</td></tr>
            )):(<div className="spinner-border spinner-border-lg"></div>)
    return(
            <div class="main-content">
            <div class="card shadow">
    <div class="card-header py-3">
      <h4 class="m-0 font-weight-bold text-secondary">
       Student's List
       </h4>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <div class="row">
          <div class="col-sm-12">
            <table className='table table-bordered dataTable' id='dataTable' width='100%' cellspacing='0' role='grid' aria-describedby='dataTable_info'  >

              <thead>
                  <tr  role='row'>
                    <th className='sorting' tabindex='0' aria-controls='dataTable' rowspan='1' colspan='1' aria-label='Name: activate to sort column ascending'  > Name </th>
                    <th className='sorting' tabindex='0' aria-controls='dataTable' rowspan='1' colspan='1' aria-label='Surname: activate to sort column ascending'  > Surname</th>
                    <th className='sorting' tabindex='0' aria-controls='dataTable' rowspan='1' colspan='1' aria-label='Class: activate to sort column ascending'  > Class</th>
                    <th className='sorting' tabindex='0' aria-controls='dataTable' rowspan='1' colspan='1' aria-label='Gender: activate to sort column ascending' > Gender</th>
                    <th className='sorting_asc' tabindex='0' aria-controls='dataTable' rowspan='1' colspan='1' aria-label='Age: activate to sort column descending' aria-sort='ascending' > Age</th>
                    </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th rowspan='1' colspan='1'> Name </th>
                    <th rowspan='1' colspan='1'> Surname </th>
                    <th rowspan='1' colspan='1'> Class </th>
                    <th rowspan='1' colspan='1'> Gender </th>
                    <th rowspan='1' colspan='1'> Age </th>
                    </tr>
                </tfoot>
                <tbody>
                {studentsList}
                </tbody>
                </table>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    )
  }
}

Muslims.propTypes = {
  getMuslims:PropTypes.func.isRequired,
  students:PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    students:state.students
  }
};
export default connect(mapStateToProps,{getMuslims})(Muslims)
