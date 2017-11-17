import React ,{Component} from 'react'
import {View,Text,Dimensions,StyleSheet} from 'react-native';
import {Left,Title,Container, Header, Content,Body, Button,Form, Item,Label, Input} from 'native-base'
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {Circle} from "../store/actions/circle"
import Icon from 'react-native-vector-icons/Entypo';
const mapStateToProps =(state)=>({localState:state.circle})
const mapDispatchToProps=(dispatch)=>({create:(data)=>Circle.createcircle(data)})
const {width,height} = Dimensions.get("window")
class CreateCircle extends Component{
    constructor(){
        super();
        this.state={}
    }
    handle=()=>{this.props.create(this.state.circleName)}
componentDidMount(){
    Circle.mycircles()
}
    render(){
        return(
            <Container >
            <Content >
            <Container style={styles.container}>
        <Form >{console.log(this.state)}
            <Item floatingLabel style={styles.itemInput}>
                <Input placeholder="Enter Circle Name"  style={{color:"#c4320d"}}
                onChangeText={(cName)=>{this.setState({circleName:cName})}}/>
            </Item>
            <Text>{"\n"}</Text>
            <Button onPress={this.handle.bind(this)}
            style={styles.button}
            >
            <Text style={styles.buttonText}>
                Submit
            </Text>
            </Button>
        </Form>
        </Container>
    </Content>
</Container>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateCircle)

const styles=StyleSheet.create({
    itemInput:{
        width:"90%",
        alignSelf:"center"
    },
    container:{
        // width:width,
        justifyContent:"center",
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