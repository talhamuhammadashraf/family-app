// import { AppRegistry } from 'react-native';
import App from './App';

import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { DrawerNavigator} from 'react-navigation';
import {View,Text} from 'react-native'




// import Login from './src/components/login'
// import Home from './src/components/home'
// import Register from './src/components/register'
// import {Provider} from 'react-redux'
// import {store} from './src/store'
// const drawernav = DrawerNavigator({
//     Map: {
//         screen: Home,
        
//     },
//     Login:{
//         screen:App,
        
//     },

//     SignUP:{
//         screen:Register,
        
//     }
// });


AppRegistry.registerComponent('todo', () => App);


// import React ,{Component} from 'react'
// import {View,Text,DrawerLayoutAndroid,TouchableHighlight,AppRegistry} from 'react-native'

// const ComponentDemo=()=>(<View><Text>demo</Text></View>)
// const SideBarMenu=()=>(<View><Text>sidebar</Text></View>)

// class LoginPage extends Component {
//     constructor() {
//         super();
//         this.openDrawer = this.openDrawer.bind(this);
//     }

//     openDrawer() {
//         this.drawer.openDrawer();
//     }

//     render() {
//         return (
//             <DrawerLayoutAndroid
//               drawerWidth={250}           
//               ref={(_drawer) => this.drawer = _drawer}
//               drawerPosition={DrawerLayoutAndroid.positions.Left}
//               renderNavigationView={() => <SideBarMenu />}>               
//               <View style={{flex: 1, alignItems: 'center'}}>                
//                 <TouchableHighlight onPress={this.openDrawer}>
//                   <Text>{'Open Drawer'}</Text>
//                 </TouchableHighlight>
//               </View>
//               <ComponentDemo />
//             </DrawerLayoutAndroid>
//         );
//     }
// }
//  AppRegistry.registerComponent('todo', () => LoginPage);
