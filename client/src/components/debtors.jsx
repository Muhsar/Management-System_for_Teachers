import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getStudentBill} from '../actions/candidateAction'
import {Link} from 'react-router-dom'
import './style.css'
class Debtors extends Component {

    componentDidMount() {
      this.props.getStudentBill()
    }
    render(){
      const {studentBill} = this.props.studentBill
      const debtorsList = (this.props.studentBill.loading===false)?((studentBill.length) ? (
              studentBill.map(debtor => {
                  return (
                    <tr className='odd' key={debtor._id}>
                    <td>
                        <Link className='text-secondary nav-link' to={'/debtor/'+debtor.student_id}>  {debtor.name}</Link>
                    </td>
                    <td>{debtor.surname}</td>
                    <td>{debtor.clas}</td>
                    <td>#{debtor.amountPaid}</td>
                    <td>#{debtor.fees-debtor.amountPaid}</td>

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
         Debtor's List
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
                      <th className='sorting' tabindex='0' aria-controls='dataTable' rowspan='1' colspan='1' aria-label='Amount Paid: activate to sort column ascending' > Amount Paid</th>
                      <th className='sorting_asc' tabindex='0' aria-controls='dataTable' rowspan='1' colspan='1' aria-label='Amount Left: activate to sort column descending' aria-sort='ascending' > Amount Left</th>
                      </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th rowspan='1' colspan='1'> Name </th>
                      <th rowspan='1' colspan='1'> Surname </th>
                      <th rowspan='1' colspan='1'> Class </th>
                      <th rowspan='1' colspan='1'> Amount Paid </th>
                      <th rowspan='1' colspan='1'> Amount Left </th>
                      </tr>
                  </tfoot>
                  <tbody>
                  {debtorsList}
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

  Debtors.propTypes = {
    getStudentBill:PropTypes.func.isRequired,
    studentBill:PropTypes.object.isRequired
  }
  const mapStateToProps= state => {
    return{
      studentBill:state.studentBill
    }
  };
export default connect(mapStateToProps,{getStudentBill})(Debtors)
