import React,{Component} from 'react'
import {TouchableOpacity,View,} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {SwipeRow,Spinner,ListItem,List,Text,Container,Content,Button} from 'native-base'
import ShowMembers from './showMembers'
import {connect} from 'react-redux'
import {Circle} from '../store/actions/circle'
  const mapStateToProps=(state)=>(
  { MyCirclesArray:state.circle.myCircles,
  })
  const mapDispatchToProps=(dispatch)=>(
    { GetMembers:(key)=>{Circle.getMembers(key)},
    })
  class MyCircles extends Component{
constructor(){
  super();
}
componentDidMount(){
Circle.mycircles()
}
  render(){
    return(
      <Container><Content>
        {this.props.MyCirclesArray?
        this.props.MyCirclesArray.map((circles,index)=>{
          return(
          <SwipeRow key={index}
        leftOpenValue={75}
        rightOpenValue={-75} 
        left={<View style={{backgroundColor:"green",height:"100%"}}>
          <TouchableOpacity 
          onPress={()=>Actions.home({info:circles.CircleID})}
          ><Text>Sucks</Text>
          </TouchableOpacity></View>
          }
        right={<View style={{backgroundColor:"green",height:"100%"}}>
          <TouchableOpacity onPress={()=>{Actions.showmembers({info:circles.CircleID})}}><Text>Members</Text>
          </TouchableOpacity></View>
          }
        body={<View><TouchableOpacity onPress={()=>{console.log(circles.CircleID)}}><Text>{circles.name}</Text></TouchableOpacity></View>}
        />
        )})
        :<Spinner/>}
      </Content></Container>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyCircles)