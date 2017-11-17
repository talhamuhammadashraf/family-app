import React,{Component} from 'react';
import {StyleSheet,Dimensions,View,Text} from 'react-native';
import {Container,Content,Form,Button,Input,Item} from 'native-base'
import {connect} from 'react-redux'
import {Circle} from '../store/actions/circle'
const {width,height} = Dimensions.get("window")
const mapStateToProps=(state)=>({})
class JoinCircle extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){console.log(this.state.key)
        return(
            <Container style={styles.container}>
                <Content>
                <Item floatingLabel style={styles.itemInput}>
                    <Input placeholder="Enter key to join Circle"
                    secureTextEntry={true}
                    onChangeText={(key)=>{
                        this.setState({
                            key:key
                        })
                    }}
                    />
                </Item>
                <Text>{"\n"}</Text>
                <Button full 
                style={styles.button} 
                onPress={()=>Circle.joinCircle(this.state.key)}
                >
                <Text style={styles.buttonText}>
                    Enter
                </Text>
                </Button>
                </Content>
            </Container>
        )
    }
}export default connect(mapStateToProps)(JoinCircle);
const styles=StyleSheet.create({
    itemInput:{
        width:"80%",
        alignSelf:"center"
    },
    container:{
        width:width,
        // justifyContent:"center",
        flexDirection:"row",
        alignItems:"center"
    },
    button:{
        justifyContent:"center",
        alignContent:"center",
        width:"75%",
        marginHorizontal:28,
        borderRadius:12,
        backgroundColor:"#c4320d",
    },
    buttonText:{
        color:"white"        
    }
})