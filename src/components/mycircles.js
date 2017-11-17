import Icon from 'react-native-vector-icons/Entypo';
import React,{Component} from 'react'
import {TouchableOpacity,View ,StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {SwipeRow,Title,Left,Body,Spinner,ListItem,List,Text,Container,Content,Header,Button} from 'native-base'
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
      <Container>
        <Header style={{backgroundColor:"#c4320d"}}>
        <Left>
            <Button onPress={Actions.pop} style={{marginLeft:-8.5}} transparent><Icon name="chevron-thin-left" size={30} color="white"/></Button>
        </Left>
        <Body><Title>My Circles</Title></Body>
    </Header>
    <Content>
        {this.props.MyCirclesArray?
        this.props.MyCirclesArray.map((circles,index)=>{
          return(<View key={index}>
          <SwipeRow 
        leftOpenValue={60}
        rightOpenValue={-60} 
        left={
        <View style={{backgroundColor:"#c4320d",height:"100%"}}>
          <TouchableOpacity style={{alignSelf:"center",alignItems:"center"}}
          onPress={()=>Actions.home({info:circles.CircleID})}
          >
          <Icon color="white" size={30} name="location"/>
          </TouchableOpacity>
        </View>
          }
        right={
        <View style={{backgroundColor:"#c4320d",height:"100%"}}>
          <TouchableOpacity 
          onPress={()=>{Actions.showmembers({info:circles.CircleID})}}
          style={{alignSelf:"center",alignItems:"center"}}
          >
          <Icon color="white" size={30} name="users"/>
          </TouchableOpacity>
        </View>
          }
        body={<View style={styles.list}>
        <TouchableOpacity onPress={()=>{console.log(circles.CircleID)}}>
        <Text style={{color:"#c4320d"}}>{circles.name}</Text>
        </TouchableOpacity>
        </View>}
        />
        </View>
        )})
        :<Spinner/>}
      </Content></Container>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyCircles)
const styles=StyleSheet.create({
  list:{
    alignSelf:"center"
  }
})