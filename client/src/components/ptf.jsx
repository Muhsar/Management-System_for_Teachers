import React, { Component } from 'react'
import kR from '../unnamed.jpg'
import jwt_decode from 'jwt-decode'
import {connect} from 'react-redux'
import {getChat, addChat} from '../actions/candidateAction'
import PropTypes from 'prop-types'
class PTF extends Component {
  state={
    message:''
  }
  handleChange=e=>{
    this.setState({message:e.target.value})
  }
handleSubmit=e=>{
  e.preventDefault()
  const decode = jwt_decode(localStorage.token)
  const chat ={
    sender_id:decode.teacher_id,
    message:this.state.message,
    name:decode.name
  }
  this.props.addChat(chat)
  this.setState({message:''})
}

componentDidMount() {
    this.props.getChat()
}
  render(){
    const {chats} = this.props.chats
    var decode = jwt_decode(localStorage.token)
    const Chats = (this.props.chats.loading===false)?((chats.length) ? (
            chats.map(chat => {
              return(
                <React.Fragment>
                <div class="send-mess-wrap">
                        <div class="send-mess__inner" >
                            <div class="send-mess-list">
                                <div class="send-mess">{chat.message}</div>
                                <span class="mess-time">
                                {(chat.sender_id===decode.teacher_id)?('me'):(chat.name)}
                                </span>
                            </div>
                        </div>
                </div>


</React.Fragment>


              )
            })
          ):(<div></div>)
        ):(<div className="spinner-border spinner-border-lg"></div>)
    return(
            <div class="main-content">
      <div class='container-fluid'>
      <div class="col-md-8 mx-auto">
        <div class="au-card au-card--no-shadow au-card--no-pad m-b-40 au-card--border">
            <div class="au-card-title" style={{backgroundImage:'url('+kR+')'}}>
                <div class="bg-overlay bg-overlay--blue"></div>
                <h3>
                    <i class="zmdi zmdi-comment-text"></i>PTF</h3>

            </div>
            <div class="au-chat-textfield">
                <form class="au-form-icon" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.message} name='message' class="au-input au-input--full au-input--h65" type="text" placeholder="Type a message"/>
                    <button class="au-input-icon" type='submit'>
                        <i class="fa fa-location-arrow"></i>
                    </button>
                </form>
            </div>
            <div class="au-inbox-wrap">
                <div class="au-chat au-chat--border">
<div class="au-chat__content au-chat__content2 js-scrollbar5">
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
PTF.propTypes = {
  chat: PropTypes.object.isRequired,
  getChat: PropTypes.func.isRequired
}
const mapStateToProps= state => {
return{
  chats: state.chats
}
}
export default connect(mapStateToProps,{getChat, addChat})(PTF)
