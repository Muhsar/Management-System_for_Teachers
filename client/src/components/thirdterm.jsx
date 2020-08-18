import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import kR from '../unnamed.jpg'
import {thirdTerm,studentDetail} from '../actions/candidateAction'
import jwt_decode from 'jwt-decode'
class ThirdTerm extends Component {
  componentDidMount() {
    this.props.studentDetail(this.props.match.params.student_id)
    this.props.thirdTerm(this.props.match.params.student_id)

  }
  render() {
    const {student} = this.props.student
    const {result} = this.props.result
    function sum(input){
      if(toString.call(input)!=="[object Array]")
      return false
      var total = 0
      for (var i = 0; i<input.length;i++){
        if(isNaN(input[i])){
          continue
        }
        total += Number(input[i])
      }
      return total
    }
    const totalresult = sum(result.map(result=>result.total))
    const examtotal = sum(result.map(result=>result.exam))
    const testtotal = sum(result.map(result=>result.test))
    const percentage = totalresult/result.length
    const RESULT = (result.length)?(
      result.map(result=>{
        return(
          <tr key={result._id}>
          <td colspan='2' onClick={this.toggleDelete}>{result.subject}</td>
          <td colspan='1'>{result.test}</td>
          <td colspan='1'>{result.exam}</td>
          <td class="text-right" colspan='1'>{result.total}</td>
          <td class="text-right" colspan='1'>{result.grade}</td>
          <td class="text-right" colspan='2'>{result.remarks}</td>

          </tr>
        )
      })
    ):(
      <tr class="odd"><td valign="top" colspan="13" class="dataTables_empty text-center">No data available in table</td></tr>
    )
    return (
      <div class="main-content">
      <div class='container-fluid'>
      <div class="col-md-10 mx-auto">
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
      <div class=" table-responsive">
      <table class="table table-borderless table-striped table-earning" style={{width:'100%'}}>
      <thead>
      <tr>
    
      <th colspan='2'>Subjects</th>
      <th colspan='1'>40</th>
      <th colspan='1'>60</th>
      <th colspan='1' class="text-right">100</th>
      <th colspan='1' class="text-right">Grade</th>
      <th colspan='2' class="text-right">Remarks</th>
      </tr>
      </thead>
      <tbody>
      {RESULT}

      <tr>
      <td colspan='13'><hr/>
      <hr/></td>
      </tr>
      <tr>
      <td colspan='2'>Total</td>
      <td colspan='1'>{testtotal}</td>
      <td colspan='1'>{examtotal}</td>
      <td class="text-right" colspan='1'>{totalresult}</td>
      <td class="text-right" colspan='3'>Percentage: {percentage}%</td>
      </tr>
      </tbody>
      </table>
      </div>
      <br/>
      </section>
      </aside>
      </div>
      </div>
      </div>
    );
  }
  }
ThirdTerm.propTypes = {
  result: PropTypes.object.isRequired,
  thirdTerm:PropTypes.func.isRequired,
  studentDetail:PropTypes.func.isRequired,
  total:PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    result:state.result,
    student:state.student,
    total:state.total
  }
}
export default connect(mapStateToProps, {thirdTerm,studentDetail})(ThirdTerm);
