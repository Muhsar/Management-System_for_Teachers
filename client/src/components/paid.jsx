import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getPaidStudent} from '../actions/candidateAction'
class Paid extends Component {

    componentDidMount() {
      this.props.getPaidStudent()
    }
    render(){
      const {studentBill} = this.props.studentBill
      const PaidList = (this.props.studentBill.loading===false)?((studentBill.length) ? (
              studentBill.map(debtor => {
                  return (
                    <tr className='odd' key={debtor._id}>
                    <td>
                          {debtor.name}
                    </td>
                    <td>{debtor.surname}</td>
                    <td>{debtor.clas}</td>
                    <td>#{debtor.fees}</td>

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
                      <th className='sorting' tabindex='0' aria-controls='dataTable' rowspan='1' colspan='1' aria-label='Fee: activate to sort column ascending' > Fee</th>
                      </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th rowspan='1' colspan='1'> Name </th>
                      <th rowspan='1' colspan='1'> Surname </th>
                      <th rowspan='1' colspan='1'> Class </th>
                      <th rowspan='1' colspan='1'> Fee </th>
                      </tr>
                  </tfoot>
                  <tbody>
                  {PaidList}
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

  Paid.propTypes = {
    getPaidStudent:PropTypes.func.isRequired,
    studentBill:PropTypes.object.isRequired
  }
  const mapStateToProps= state => {
    return{
      studentBill:state.studentBill
    }
  };
export default connect(mapStateToProps,{getPaidStudent})(Paid)
