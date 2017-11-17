import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import {View,StyleSheet,TouchableOpacity,Text,Dimensions} from 'react-native'
import {Container, Header, Content, Button,Form, Item,Label, Input} from 'native-base'
const {width,height} =Dimensions.get("window")
import {Authentication} from '../store/actions/auth'
import { Action } from 'rxjs/scheduler/Action';
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
            <Container style={styles.container}>
            <Content>{console.log(this.state)}
                <Form>
                <Item floatingLabel style={styles.itemInput}>
                        <Input placeholder="Name" style={{color:"#c4320d"}}
                        onChangeText={(name)=>{
                        this.setState({
                            name:name
                        })
                    }}
                    />
                    </Item>
                    <Item floatingLabel style={styles.itemInput}>
                        <Input placeholder="Email" style={{color:"#c4320d"}}
                        onChangeText={(email)=>{
                        this.setState({
                            email:email
                        })
                    }}
                    />
                    </Item>
                    <Item floatingLabel style={styles.itemInput}>
                        <Input placeholder="Password" secureTextEntry={true} style={{color:"#c4320d"}}
                        onChangeText={(password)=>{
                        this.setState({
                            password:password
                        })
                    }}
                    ref="email"
                    />
                    </Item>
                    <Text>{"\n"}</Text>
                    <Button style={styles.button} 
                    onPress={this.handle.bind(this)} 
                    ><Text style={styles.buttonText}>Sign Up</Text></Button>                    
                </Form>
                <TouchableOpacity onPress={Actions.login}>
                    <Text style={{fontSize:17,color:"#c4320d",textAlign:"center"}}>Already have an account</Text>
                    <Text>{"\n"}</Text>
                    <Text style={{fontSize:17,color:"#c4320d",textAlign:"center"}}>
                        Sign In
                    </Text >
                </TouchableOpacity>
            </Content>
        </Container>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register);

const styles=StyleSheet.create({
    buttonText: {
        color: "white"
    },
    button: {
        justifyContent: "center",
        alignContent: "center",
        width: "75%",
        marginHorizontal: 28,
        borderRadius: 7,
        backgroundColor: "#c4320d",
    },
    itemInput:{
        width:"92%"
    },
    container:{
        // flex:1,
        width:width,
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center"
    }
})