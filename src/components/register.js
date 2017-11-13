import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import {View,Text,Dimensions} from 'react-native'
import {Container, Header, Content, Button,Form, Item,Label, Input} from 'native-base'
const {width,height} =Dimensions.get("window")
import {Authentication} from '../store/actions/auth'
const mapStateToProps =(state)=>({
statelocal:state.Auth
})
const mapDispatchToProps=(dispatch)=>({
register:(user)=>Authentication.registerUser(user)
})
class Register extends Component{
    constructor(){
        super();
        this.state={}

    }
handle=()=>{
let user ={
    email:this.state.email,
    password:this.state.password,
    name:this.state.name
}
this.props.register(user)
console.log(user)
}
    render(){console.log(this.props.statelocal)
        return(
            <Container>
            <Content>{console.log(this.state)}
                <Form>
                <Item rounded >
                        <Input placeholder="Name"
                        onChangeText={(name)=>{
                        this.setState({
                            name:name
                        })
                    }}
                    />
                    </Item>
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
                    ref="email"
                    />
                    </Item>
                    <Button
                    onPress={this.handle.bind(this)} 
                    ><Text>Register</Text></Button>
                    
                </Form>
            </Content>
        </Container>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register);