import React, { Component } from 'react';
import kR from '../unnamed.jpg'
import {Link} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
class Topbar extends Component{
  logOut=(e)=>{
  e.preventDefault()
  localStorage.removeItem('token')
  window.location='/'
  }
  render(){
    const decode = jwt_decode(localStorage.token)
    return(
      <header class="header-desktop">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="header-wrap">

                            <div class="header-button">
                                <div class="noti-wrap">
                                    <div class="noti__item js-item-menu">

                                    </div>
                                    <div class="noti__item js-item-menu">

                                    </div>
                                    <div class="noti__item js-item-menu">

                                    </div>
                                </div>
                                <div class="account-wrap">
                                    <div class="account-item clearfix js-item-menu">
                                        <div class="image">
                                            <img src={kR} alt="John Doe"/>
                                        </div>
                                        <div class="content">
                                            <Link class="js-acc-btn" to="#">{decode.surname+' '+decode.name}</Link>
                                        </div>
                                        <div class="account-dropdown js-dropdown">
                                            <div class="info clearfix">
                                                <div class="image">
                                                    <Link to="#">
                                                        <img src={kR} alt="John Doe"/>
                                                    </Link>
                                                </div>
                                                <div class="content">
                                                    <h5 class="name">
                                                        <Link to="#">{decode.surname+' '+decode.name}</Link>
                                                    </h5>
                                                    <span class="email">{decode.email}</span>
                                                    <span className='email'>
                                                    <br/>
                                                    {decode.teacher_id}
                                                    </span>
                                                    <span class="email">
                                                    <Link onClick={this.logOut}><i className='fa fa-sign-out-alt'/> Log Out</Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
  }
}
export default Topbar
