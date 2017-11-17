import firebase from 'firebase'
import React ,{Component} from 'react'
import {View,Text,DrawerLayoutAndroid,TouchableHighlight,AppRegistry} from 'react-native'
import Routes from './src/components/routes'
import { Container, Header,Content,Button, List, ListItem, Left, Body, Right, Switch } from 'native-base';
import {Authentication} from './src/store/actions/auth'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Entypo';
import {Circle} from './src/store/actions/circle'
import {store} from './src/store';
//import {List,ListItem,Container} from 'native-base'
import {Actions} from 'react-native-router-flux'
import Login from './src/components/login'
const SideBarMenu=(props)=>(
  <Container><List style={{width:"100%",height:"100%",marginLeft:-10,marginTop:5}}>
    
    <ListItem  style={{alignItems:"center"}} 
    onPress={()=>{Actions.login();}}>
    <Icons 
    name="login"
    size={35} 
    color="#c4320d"/>
    </ListItem>

    <ListItem  onPress={()=>Actions.register()} style={{alignItems:"center"}}>
    <Icon
    name="person-add"
    size={35} 
    color="#c4320d"/></ListItem>

    <ListItem  onPress={()=>Authentication.logout()} style={{alignItems:"center"}}>
    <Icons
    name="log-out"
    size={35} 
    color="#c4320d"/></ListItem>

    <ListItem  style={{alignItems:"center"}} onPress={()=>{firebase.auth().currentUser?Actions.createcircle():alert("Please Authenticate first")}}>
    <Icon   
    name="add-circle"
    size={35} 
    color="#c4320d"/></ListItem>

    <ListItem  style={{alignItems:"center"}} onPress={()=>{firebase.auth().currentUser?Actions.home():alert("Please Authenticate first")}}>
    <Icons
    name="location-pin"
    size={35} 
    color="#c4320d"/></ListItem>

    <ListItem  style={{alignItems:"center"}} onPress={()=>{firebase.auth().currentUser?Actions.mycircles():alert("Please Authenticate first")}}>
    <Icon
    name="check-circle"
    size={35} 
    color="#c4320d"/>
    </ListItem>

    <ListItem  style={{alignItems:"center"}} onPress={()=>{firebase.auth().currentUser?Actions.join():alert("Please Authenticate first")}}>
    <Icon
    name="group-add"
    size={35} 
    color="#c4320d"/>
    </ListItem>
    </List>    
    </Container>
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
            <DrawerLayoutAndroid 
              drawerWidth={80}          
              onTouchEnd={this.closeDrawer}  
              drawerBackgroundColor="white"
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