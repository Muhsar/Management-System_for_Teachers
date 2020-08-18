import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {billDetail, deleteBill, updateBill} from '../actions/candidateAction'
import axios from 'axios'
class ClassBill extends Component {

  state={
    clas:'',
    fees:'',
    uniform:'',
    exerciseBooks:'',
    pricePerBook:'',
    textBooks:'',
    totalTextBookPrice:''
  }


  UNSAFE_componentWillMount() {
    this.props.billDetail(this.props.match.params.bill_id)
    axios.get('/bill/'+this.props.match.params.bill_id)
      .then(res=>{
        this.setState({
          clas:res.data.clas,
          fees:res.data.fees,
          uniform:res.data.uniform,
          exerciseBooks:res.data.exerciseBooks,
          pricePerBook:res.data.pricePerBook,
          textBooks:res.data.textBooks,
          totalTextBookPrice:res.data.totalTextBookPrice
        })
      })
  }
  handleChange=e=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleSubmit=e=>{
    e.preventDefault()
    const bill = {
      clas:this.state.clas,
      fees:this.state.fees,
      uniform:this.state.uniform,
      exerciseBooks:this.state.exerciseBooks,
      pricePerBook:this.state.pricePerBook,
      textBooks:this.state.textBooks,
      totalTextBookPrice:this.state.totalTextBookPrice
    }
    this.props.updateBill(this.props.match.params.bill_id, bill)
    this.props.history.push('/bill')
}
handleDelete=e=>{
  this.props.deleteBill(this.props.match.params.bill_id)
  this.setState({msg:'Delete Successful'})
}
  render(){
    const {classBill} = this.props.classBill

    return(
            <div class="main-content">
            <section class="blog_area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mb-5 mb-lg-0">
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
                        <div class="blog_right_sidebar">
                            <aside class="single_sidebar_widget search_widget">
                                <form onSubmit={this.handleSubmit}>
                                <h4>Update Bill</h4>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="selectSm" class=" form-control-label">Class</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input disabled value={this.state.clas} type="text" id="text-input" name="clas" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">School Fees</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={this.handleChange} value={this.state.fees} type="number" id="text-input" name="fees" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">Uniform Fee</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={this.handleChange} value={this.state.uniform} type="number" id="text-input" name="uniform" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">No. Of Exercise Books</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={this.handleChange} value={this.state.exerciseBooks} type="number" id="text-input" name="exerciseBooks" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">Price Per Exercise Book</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={this.handleChange} value={this.state.pricePerBook} type="number" id="text-input" name="pricePerBook" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">No. Of Text Books</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={this.handleChange} value={this.state.textBooks} type="number" id="text-input" name="textBooks" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">Total Text Book Price</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={this.handleChange} value={this.state.totalTextBookPrice} type="number" id="text-input" name="totalTextBookPrice" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                    <div className='row'>
                                      <div className='col'>
                                      <input class="btn btn-outline-primary btn-block" type="submit" value='Update'/>
                                      </div>
                                      <div className='col'>
                                      <input onClick={this.handleDelete} class="btn btn-outline-danger btn-block" type="button" value='Delete'/>
                                      </div>
                                    </div>
                                </form>
                                {
                                  (this.state.msg)?(
                                    <div class="alert alert-success alert-dismissible fade show">
                                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                                      {this.state.msg}
                                    </div>
                                  ):(
                                    <div></div>
                                  )
                              }
                            </aside>


                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
    )
  }
}
ClassBill.propTypes = {
  billDetail:PropTypes.func.isRequired,
  classBill:PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    classBill:state.classBill
  }
}
export default connect(mapStateToProps,{billDetail,deleteBill,updateBill})(ClassBill)
