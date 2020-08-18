import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import kR from '../unnamed.jpg'
import {getResult,addResult,studentDetail,deleteResult} from '../actions/candidateAction'
import jwt_decode from 'jwt-decode'
class Result extends Component {
  state={
    term:'',
    subject:'',
    test:'',
    exam:'',
    total:'',
    grade:'',
    remarks:''
  }
  componentDidMount() {
    this.props.studentDetail(this.props.match.params.student_id)
    this.props.getResult(this.props.match.params.student_id)

  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleTest=e=> {
    this.setState({test:e.target.value,total:(Number(e.target.value)+Number(this.state.exam))})
  }
  handleExam=e=> {
    this.setState({exam:e.target.value,total:(Number(e.target.value)+Number(this.state.test))})
  }

  handleSubmit=e=> {
    e.preventDefault()
    const result = {
      term:this.state.term,
      subject:this.state.subject,
      test:Number(this.state.test),
      exam:Number(this.state.exam),
      total:this.state.total,
      grade:this.state.grade,
      remarks:this.state.remarks,
      student_id:this.props.match.params.student_id
    }
    this.props.addResult(result)
    this.setState({
      subject:'',
      test:'',
      exam:'',
      total:'',
      grade:'Grade',
      remarks:'Remarks',
      toggle:false
    })
  }
  deleteResult=(id)=>{
    this.props.deleteResult(id)
  }
  toggleDelete=()=> {
    this.state.toggle===false?this.setState({toggle:true}):this.setState({toggle:false})
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
          {
            this.state.toggle!==false?'':<td width='10px'><i className='fa fa-times' onClick={()=>{this.deleteResult(result._id)}}/></td>
          }

          <td colspan='2' onClick={this.toggleDelete}>{result.subject}</td>
          <td colspan='1'>{result.test}</td>
          <td colspan='1'>{result.exam}</td>
          <td class="text-right" colspan='1'>{result.total}</td>
          <td class="text-right" colspan='1'>{result.grade}</td>
          <td class="text-right" colspan='2'>{result.remarks}</td>
          <td class="text-right" colspan='1'>{result.term}</td>
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
      <h2 class="text-light display-6">{student.surname+' '+student.name} </h2>
      <p class="text-light">{student.clas}</p>
      </div>
      </div>
      </div>
      <div class=" table-responsive">
      <table class="table table-borderless table-striped table-earning" style={{width:'100%'}}>
      <thead>
      <tr>
      {
        this.state.toggle!==false?'':<td width='10px'></td>
      }
      <th colspan='2'>Subjects</th>
      <th colspan='1'>40</th>
      <th colspan='1'>60</th>
      <th colspan='1' class="text-right">100</th>
      <th colspan='1' class="text-right">Grade</th>
      <th colspan='2' class="text-right">Remarks</th>
      <th colspan='1' class="text-right">Term</th>
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
      <form className='container' onSubmit={this.handleSubmit}>
      <h4 className="text-center">Add Result <i class='fa fa-tag'/></h4>
      <div>
      <select class='form-control' name='term' onChange={this.handleChange}>
      <option>Choose Term</option>
      <option>1st Term</option>
      <option>2nd Term</option>
      <option>3rd Term</option>
      </select>
      </div>
      <br/>
      <div className='row'>
      <div className='col-md-4'>

      <input value={this.state.subject} onChange={this.handleChange} placeholder='Subject' className='form-control' type="text" name="subject" />
      </div>
      <div className='col-md-2'>
      <input value={this.state.test} onChange={this.handleTest} placeholder='Test' className='form-control' type="number" name="test" />
      </div>
      <div className='col-md-2'>
      <input value={this.state.exam} onChange={this.handleExam} placeholder='Exam' className='form-control' type="number" name="exam" />
      </div>
      <div className='col-md-2'>
      <input disabled value={this.state.total} placeholder='Total' className='form-control' type="number" name="total" />
      </div>
      </div>
      <br/>
      <div className='row'>
      <div className='col'>
      <select class='form-control' name='grade' value={this.state.grade} onChange={this.handleChange}>
      <option>Grade</option>
      <option>A1</option>
      <option>B2</option>
      <option>B3</option>
      <option>C4</option>
      <option>C5</option>
      <option>C6</option>
      <option>D7</option>
      <option>E8</option>
      <option>F9</option>
      </select>
      </div>
      <div className='col'>
      <select class='form-control' value={this.state.remarks} name='remarks' onChange={this.handleChange}>
      <option>Remarks</option>
      <option>Excellent</option>
      <option>V.good</option>
      <option>Good</option>
      <option>Fair</option>
      <option>Poor</option>
      <option>V.poor</option>
      </select>
      </div>
      </div>
      <br/>
      <input type="submit" value="Upload" className='btn btn-outline-primary btn-block' />
      </form>
      {
        (this.props.result.msg==='')?(
          <div></div>
        ):(
          <div className='alert alert-danger'>{this.props.result.msg}</div>
        )
      }

      </section>
      </aside>
      </div>
      </div>
      </div>
    );
  }
}
Result.propTypes = {
  result: PropTypes.object.isRequired,
  getResult:PropTypes.func.isRequired,
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
export default connect(mapStateToProps, {getResult,addResult,studentDetail,deleteResult})(Result);
