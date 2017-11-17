import Icon from 'react-native-vector-icons/Entypo';
import {Button,Header,Title,Left,Body,Container,Right,Content,Spinner} from 'native-base'
import React, { Component } from 'react';
// import Icon from 'react-native-vector-icons/Entypo';
// import  {Button,Container,Header,Left,Body} from 'native-base'
import { View, StyleSheet, Text ,Dimensions} from 'react-native'
import MapView from 'react-native-maps'
import { Circle } from '../store/actions/circle';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux'
const {width,height} = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: height,
        flex:1,
        width: width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})
const mapStateToProps = (state) => ({
    members: state.circle.members
})
class Home extends Component {
    constructor() {
        super();
        this.state = {
            region: {
                latitude: 24.8615,
                longitude: 67.0099,
                latitudeDelta: 0.00922 * 1.5,//0.006875,
                longitudeDelta: 0.00421 * 1.5,//0.04521,              
            }
        }
    }
    componentWillMount() {
        this.props.info?
        Circle.getMembers(this.props.info):
        console.log("no circle ID")
    }
    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            let region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.00922 * 1.5,
                longitudeDelta: 0.00421 * 1.5
            };
            setTimeout(() => { console.log(region.latitude, region.longitude) }, 2000)
            this.setState({ region: region })
        })
    }
    render() {
        console.log(this.props.members)
        const { region } = this.props;
        console.log(region);
        return (
            <Container style={styles.container}>
            <Left>
                <Button style={{
                    zIndex:3,
                    backgroundColor:"#c4320d",
                    alignContent:"flex-start",
                    marginLeft:-width*0.5,
                    // borderRadius:30
                }} onPress={Actions.pop}>
                <Icon color="white" name="chevron-thin-left" size={30}/>
                </Button>
            </Left>
                <MapView
                    //        onRegionChange={(region) => this.onRegionChange(region)}
                    showsMyLocationButton={true}
                    showsCompass={false}
                    showsUserLocation={true}
                    style={styles.map}
                    region={this.state.region}
                >
                    {this.props.members ? this.props.members.map((data, index) => (
                        <MapView.Marker key={index}
                            coordinate={{
                                latitude: data.Location.latitude,
                                longitude: data.Location.Longitude
                            }}
                            title={data.name}
                        />
                    )) :
                    []
                    }
       
                </MapView>
            </Container>)
    }
}
export default connect(mapStateToProps)(Home)