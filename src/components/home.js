import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import MapView from 'react-native-maps'
import { Circle } from '../store/actions/circle';
import { connect } from 'react-redux'
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
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
        Circle.getMembers(this.props.info)
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
            <View style={styles.container}>
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
            </View>)
    }
}
export default connect(mapStateToProps)(Home)