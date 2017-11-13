import React ,{Component} from 'react';
import {View,Text} from 'react-native'
import {Authentication} from '../store/actions/auth'
import {Container, Header, Content, Button,Form, Item,Label, Input} from 'native-base'
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux'
import {Circle} from '../store/actions/circle'
import firebase from 'firebase'
const mapStateToProps=(state)=>({
    localState:state.Auth
})
const mapDispatchToProps=(dispatch)=>({
login:(user)=>Authentication.loginUser(user)    
})

class Login extends Component{
    constructor(){
        super();
        this.state={}
    }
    handle=()=>{
        let user={  email:this.state.email,
                    password:this.state.password
        }
        console.log("handleuser",user)
        this.props.login(user)
    }

    render(){
        return(
            <Container>
            <Content>
                <Form>
                    <Item rounded >
                        <Input placeholder="Email"
                        onChangeText={(email)=>{
                        this.setState({
                            email:email
                        })
                    }}
                    />
                    </Item>
                    <Item rounded >
                        <Input placeholder="Password"
                        onChangeText={(password)=>{
                        this.setState({
                            password:password
                        })
                    }}
                    />
                    </Item>
                    <Button
                    onPress={this.handle.bind(this)} 
                    ><Text>Login</Text></Button>
                    
                </Form>
            </Content>
        </Container>

        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)