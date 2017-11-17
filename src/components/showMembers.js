import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Button,Header,Title,Left,Body,List,ListItem,SwipeRow,Container,FooterTab,Right,Content,Spinner,Footer} from 'native-base'
import {Circle} from '../store/actions/circle';
import Icon from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux'
import { Action } from 'rxjs/scheduler/Action';
import { Actions } from 'react-native-router-flux';
const mapStateToProps=(state)=>({
    members:state.circle.members,
    admin:state.circle.admin,
    circle:state.circle,
    InviteKey:state.circle.InviteKey
})
class ShowMembers extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){console.log(this.props.info)
        Circle.getMembers(this.props.info)
        
    }
    render(){console.log(this.props.members)
        return(
    <Container>
        <Header style={{backgroundColor:"#c4320d"}}>
            <Left>
                <Button onPress={Actions.pop} style={{marginLeft:-8.5}} transparent><Icon name="chevron-thin-left" size={30} color="white"/></Button>
            </Left>
            <Body><Title>{this.props.circle?this.props.circle.CircleName:<Spinner/>}</Title></Body>
        </Header>
        <Content>
        {!this.props.members?<Spinner/>:
        this.props.members.map((data,index)=>{
            return(
                <SwipeRow key={index}
                leftOpenValue={0}
                rightOpenValue={0}
                body={
                <View>
                    <Body>
                    <Text style={{color:"#c4320d",fontWeight:"bold"}}>
                    {data.name}
                    </Text>
                    </Body>
                {this.props.admin===data.UID?
                <Right><Text style={{color:"#c4320d"}}>Admin</Text></Right>:
                <Text style={{color:"#c4320d"}}>Member</Text>
            }
            </View>
            }
                />
            )
            })
        }
      </Content>
      <Footer style={{
          backgroundColor:"#c4320d"
      }}>
      <TouchableOpacity onPress={()=>{Circle.inviteMember(this.props.info);this.props.InviteKey?alert(this.props.InviteKey):alert("fetching")}}
      ><Text style={{fontSize:25,color:"white"}}>Invite</Text>
      </TouchableOpacity></Footer>
      </Container>
        )
    }
}export default connect(mapStateToProps)(ShowMembers)