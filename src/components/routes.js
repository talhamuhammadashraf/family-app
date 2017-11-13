import React ,{Component} from 'react'
import {View,Text} from 'react-native'
import {Router,Scene} from 'react-native-router-flux'
import Login from './login'
import Home from './home'
import MyCircles from './mycircles'
import {store} from '../store'
import Register from './register'
import {Provider} from 'react-redux'
import CreateCircle from './createCircle'
import JoinCircle from './joinCircle'
import ShowMembers from './showMembers'
class Routes extends Component{
    render(){
        return(<Provider store={store}>
            <Router>
            <Scene key="root">
              <Scene key="mycircles"   component={MyCircles} title="My Circles" hideNavBar={true}/>                          
              <Scene   key="home" component={Home} title="Location Map" hideNavBar={true}/>
              <Scene  key="login" initial={true} component={Login} title="Login" hideNavBar={true}/>
              <Scene key="register"  component={Register} title="Register" hideNavBar={true}/>
              <Scene key="createcircle"  component={CreateCircle} title="Create Circle" hideNavBar={true}/>            
              <Scene key="showmembers"  component={ShowMembers} title="Members" hideNavBar={true}/>                          
              <Scene key="join"  component={JoinCircle} title="Join Circle" hideNavBar={true}/>                          
            </Scene>
          </Router></Provider>
        )
    }
}

export default Routes