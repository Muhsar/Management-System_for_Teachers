import React,{Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/navbar'
import Dashboard from './components/dashboard'
import SignUp from './components/signUp'
import Login from './components/login'
import Debtors from './components/debtors'
import Paid from './components/paid';
import Footer from './components/footer'
import Topbar from './components/topbar'
import PTF from './components/ptf'
import ChatRoom from './components/chatroom'
import Students from './components/students'
import Muslims from './components/muslims'
import Christians from './components/christians'
import News from './components/news'
import ChatPage from './components/chatpage'
import Student from './components/student'
import Result from './components/result'
import FirstTerm from './components/firstterm'
import SecondTerm from './components/secondterm'
import ThirdTerm from './components/thirdterm'
class App extends Component {
  UNSAFE_componentWillMount() {
    axios.interceptors.request.use(function (config) {
      const token = localStorage.token;
      config.headers.Authorization =  token;

      return config;
    });
    axios.defaults.headers.common['Authorization'] = localStorage.token
  }

  render() {
    const loginRoutes = (

      <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/signUp' component={SignUp}/>
      </Switch>
    )
    const userRoutes = (
      <React.Fragment>
      <Navbar />
      <div class='page-container'>
      <Topbar/>
      <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/chatroom' component={ChatRoom}/>
      <Route exact path='/chat/:student_id' component={ChatPage}/>
      <Route path='/students' component={Students}/>
      <Route exact path='/student/:student_id' component={Student}/>
      <Route path='/muslims' component={Muslims}/>
      <Route path='/christians' component={Christians}/>
      <Route exact path='/debtors' component={Debtors}/>
      <Route exact path='/paid' component={Paid}/>
      <Route path='/ptf' component={PTF}/>
      <Route path='/news' component={News}/>
      <Route exact path='/result/:student_id' component={Result}/>
      <Route exact path='/1stterm/:student_id' component={FirstTerm}/>
      <Route exact path='/2ndterm/:student_id' component={SecondTerm}/>
      <Route exact path='/3rdterm/:student_id' component={ThirdTerm}/>
      </Switch>
      <Footer/>
      </div>
      </React.Fragment>
    )
    return (
      <Router>
      <div >

      <Switch>
      {localStorage.token ? userRoutes : loginRoutes}
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
