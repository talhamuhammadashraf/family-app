import firebase from 'firebase'
import React ,{Component} from 'react'
import {View,Text,DrawerLayoutAndroid,TouchableOpacity,TouchableHighlight,AppRegistry} from 'react-native'
import Routes from './src/components/routes'
import { Container, Header,Content,Button, List, ListItem, Left, Body, Right, Switch } from 'native-base';
import {Authentication} from './src/store/actions/auth'
import Icon from 'react-native-vector-icons/Entypo';
import {Circle} from './src/store/actions/circle'
import {store} from './src/store'
import {Actions} from 'react-native-router-flux'
import Login from './src/components/login'
const SideBarMenu=(props)=>(
  <View>
    <TouchableOpacity 
    onPress={()=>{Actions.login();
    
    }}
    >
    <Icon
    name="login"
    size={40} 
    color="black"/></TouchableOpacity>
    <TouchableOpacity onPress={()=>Actions.register()}>
    <Icon
    name="add-user"
    size={40} 
    color="black"/></TouchableOpacity>
    <TouchableOpacity onPress={()=>Authentication.logout()}>
    <Icon
    name="log-out"
    size={40} 
    color="black"/></TouchableOpacity>
    <TouchableOpacity onPress={()=>{firebase.auth().currentUser?Actions.createcircle():alert("Please Authenticate first")}}>
    <Icon
    name="circle-with-plus"
    size={40} 
    color="black"/></TouchableOpacity>
    <TouchableOpacity onPress={()=>{firebase.auth().currentUser?Actions.home():alert("Please Authenticate first")}}>
    <Icon
    name="location-pin"
    size={40} 
    color="black"/></TouchableOpacity>
    <TouchableOpacity onPress={()=>{firebase.auth().currentUser?Actions.mycircles():alert("Please Authenticate first")}}>
    <Text>my circles</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{firebase.auth().currentUser?Actions.join():alert("Please Authenticate first")}}>
    <Text>Join Circle</Text>
    </TouchableOpacity>    
    </View>
)

class App extends Component {
    constructor() {
        super();
        this.openDrawer = this.openDrawer.bind(this);        
        this.closeDrawer = this.closeDrawer.bind(this);        
        
    }
    closeDrawer(){
        this.drawer.closeDrawer()
    }
    openDrawer() {
        this.drawer.openDrawer();
    }
componentDidMount(){
}
    render() {
        return (
            <DrawerLayoutAndroid style={{backgroundColor:"green"}}
              drawerWidth={100}          
              onTouchEnd={this.closeDrawer}  
              drawerBackgroundColor="blue"
              ref={(_drawer) => this.drawer = _drawer}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => <SideBarMenu
              />}>
                  <Routes/>
            </DrawerLayoutAndroid>
        );
    }
}
export default App;