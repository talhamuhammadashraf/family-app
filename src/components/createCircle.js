import React ,{Component} from 'react'
import {View,Text} from 'react-native';
import {Container, Header, Content, Button,Form, Item,Label, Input} from 'native-base'
import {connect} from 'react-redux'
import {Circle} from "../store/actions/circle"
const mapStateToProps =(state)=>({localState:state.circle})
const mapDispatchToProps=(dispatch)=>({create:(data)=>Circle.createcircle(data)})
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
<Container>
    <Content>
        <Form>{console.log(this.state)}
            <Item rounded>
                <Input placeholder="Enter Circle Name" 
                onChangeText={(cName)=>{this.setState({circleName:cName})}}/>
            </Item>
            <Button onPress={this.handle.bind(this)
                }><Text>Submit</Text></Button>
        </Form>
    </Content>
</Container>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateCircle)

