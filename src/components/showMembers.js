import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Button,List,ListItem,SwipeRow,Container,FooterTab,Content,Spinner,Footer} from 'native-base'
import {Circle} from '../store/actions/circle'
import {connect} from 'react-redux'
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
    <Container><Content>
        {!this.props.members?<Spinner/>:
        this.props.members.map((data,index)=>{
            return(
                <SwipeRow key={index}
                leftOpenValue={75}
                rightOpenValue={-75}
                body={<View><Text>{data.name}</Text>
                {this.props.admin===data.UID?<Text>Admin</Text>:<Text>Member</Text>}</View>}
                />
            )
            })
        }
      </Content>
      <Footer><TouchableOpacity onPress={()=>{Circle.inviteMember(this.props.info);alert(this.props.InviteKey)}}
      ><Text>Invite</Text>
      </TouchableOpacity></Footer>
      </Container>
        )
    }
}export default connect(mapStateToProps)(ShowMembers)