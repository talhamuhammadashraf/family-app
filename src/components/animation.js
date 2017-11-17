// import React ,{Component} from 'react';
// import {View,StyleSheet,Text,Animated,LayoutAnimation,Easing,Dimensions} from 'react-native';


// class AnimatComp extends Component{
//   componentWillMount(){
//     this.AnimatedValue=new Animated.Value(1)
//   }
//   componentDidMount(){
//     Animated.timing(this.AnimatedValue,{
//       toValue:0.6,
//       duration:1000,
//       easing:Easing.bounce
//     }).start()
//   }
//   render(){
//     const animatedStyle={opacity:this.AnimatedValue}
//     return(
//       <View style={styles.container}>
//         <Animated.View style={[styles.box,animatedStyle]}/>
//       </View>
//     )
//   }
// }
// export default AnimatComp
// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:"center",
//     justifyContent:"center"
//   },
//   box:{
//     backgroundColor:"#333",
//     width:100,
//     height:100
//   }
// })
