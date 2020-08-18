import React, { Component } from 'react'
import PropTypes from 'prop-types'
import kR from '../unnamed.jpg'
import {connect} from 'react-redux'
import {getNews} from '../actions/candidateAction'
import jwt_decode from 'jwt-decode'
import {Link} from 'react-router-dom'
import './style.css'
class News extends Component {

  componentDidMount() {
      this.props.getNews()
  }
  state={
    title:'',
    content:'',
    image:'no image'
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit=e=>{
    e.preventDefault()
    var d = new Date();
    var day = d.getDate()
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var month = months[d.getMonth()];
    const decode = jwt_decode(localStorage.token)
    const info = {
      title:this.state.title,
      content:this.state.content,
      image:this.state.image,
      school_id:decode.school_id,
      day,
      month
    }
    this.props.addNews(info)
    this.setState({
      title:' ',
      content:' ',
      msg:'News Upload Successful'
    })
  }
  render(){
  const {news} =this.props.news
    const News = (news.length)?(
      news.map(news=>{
        return(
            (news.image!==('no image'||null||undefined))?(
              <article class="blog_item">
                  <div class="blog_item_img">
                      <img class="card-img rounded-0" src={kR||news.image} alt=""/>
                      <Link to={'/news/'+news._id} class="blog_item_date">
                          <h3>{news.day}</h3>
                          <p>{news.month}</p>
                      </Link>
                  </div>

                  <div class="blog_details">
                      <Link class="d-inline-block" to={'/news/'+news._id}>
                      <h2>{news.title}</h2>
                  </Link>
                  <p>{news.content}</p>

                  </div>
              </article>
            ):(
              <article class="blog_item">
                  <div class="blog_item_img">
                  <Link to={'/news/'+news._id} class="blog_item_date">
                  <h3>{news.day}</h3>
                  <p>{news.month}</p>
                  </Link>
                  </div>

                  <div class="blog_details">
                      <Link class="d-inline-block" to={'/news/'+news._id}>
                          <h2>{news.title}</h2>
                      </Link>
                      <p>{news.content}</p>

                  </div>
              </article>
            )
        )
      })
    ):(<div></div>)
    return(
            <div class="main-content">
            <section class="blog_area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mb-5 mb-lg-0 mx-auto">
                        <div class="blog_left_sidebar">

                            {News}

                        </div>
                    </div>

                </div>
            </div>
        </section>
        </div>
    )
  }
}
News.propTypes = {
  getNews: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired
}
const mapStateToProps= state =>{
    return{
      news:state.news
    }
}
export default connect(mapStateToProps,{getNews})(News)
