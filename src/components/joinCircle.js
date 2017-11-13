import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Container,Content,Form,Button,Input,Item} from 'native-base'
import {connect} from 'react-redux'
import {Circle} from '../store/actions/circle'
const mapStateToProps=(state)=>({})
class JoinCircle extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){console.log(this.state.key)
        return(
            <Container>
                <Content>
                <Item>
                    <Input placeholder="Enter key to join Circle"
                    onChangeText={(key)=>{
                        this.setState({
                            key:key
                        })
                    }}
                    />
                </Item>
                <Button full onPress={()=>Circle.joinCircle(this.state.key)}><Text>Enter</Text></Button>
                </Content>
            </Container>
        )
    }
}export default connect(mapStateToProps)(JoinCircle)