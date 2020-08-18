import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {teacherDetail} from '../actions/candidateAction'
class signUp extends Component {
  state={
    clas:'',
    teacher_id:'',
    password:'',
    reg:false,
    msg:''
  }

  handleChange=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
     handleClass=e=>{
       this.props.teacherDetail(e.target.value)
       this.setState({clas:e.target.value,reg:true})
     }
     handleSubmit=(e)=>{
         e.preventDefault()
         const {teacher} = this.props.teacher
         if(teacher.teacher_id===this.state.teacher_id){
         const user={
            password:this.state.password
         }
         axios.post(('/signup/'+teacher.teacher_id),user)
          .then(res=>{this.setState({status:res.data})})
          this.props.history.push('/')
        }else{
          this.setState({msg:"teacher doesn't exist check ur id and try again"})
        }
     }
  render(){
    return(
      <div class="row mt-5">
  <div class="col-md-6 m-auto">
    <div class="card card-body">
      <h1 class="text-center mb-3"><i class="fas fa-user-plus"></i> Register</h1>
    </div>
    <form noValidate onSubmit={this.handleSubmit}>
    <div class="row form-group">
        <div class="col col-md-3">
            <label for="selectSm" class=" form-control-label">Class</label>
        </div>
        <div class="col-12 col-md-9">
            <select name="clas" onChange={this.handleClass} id="SelectLm" class=" form-control">
                <option>Please select</option>
                <option>Creche</option>
                <option>KG1</option>
                <option>KG2</option>
                <option>NUR1</option>
                <option>NUR2</option>
                <option>Basic1</option>
                <option>Basic2</option>
                <option>Basic3</option>
                <option>Basic4</option>
                <option>Basic5</option>
                <option>Jss1</option>
                <option>Jss2</option>
                <option>Jss3</option>
                <option>Sss1</option>
                <option>Sss2</option>
                <option>Sss3</option>
            </select>
        </div>
    </div>
    {
      (this.state.reg:true)?(
        <div>
        {
          (this.state.msg==='')?(<div></div>):(
            <div className='alert alert-danger'>{this.state.msg}</div>
          )
        }
        <div class="form-group">
        <label for="email">Your ID</label>
        <input class="form-control"
        id="email"
        type="email"
        name="teacher_id"
        placeholder="Enter Teacher's ID"
        onChange={this.handleChange}/>
        </div>
        <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control"
        id="password"
        type="password"
        name="password"
        placeholder="Create Password"
        onChange={this.handleChange}/>
        </div>
        <button class="btn btn-primary btn-block" type="submit" value="Register">Register →</button>
        </div>
      ):(
        <div></div>
      )
    }
    </form>
    <p class="lead mt-4">Have An Account? <Link to="/">Login</Link></p>
  </div>
</div>
    )
  }
}
const mapStateToProps= state => {
  return{
    teacher:state.teacher
  }
}
export default connect(mapStateToProps,{teacherDetail})(signUp)
