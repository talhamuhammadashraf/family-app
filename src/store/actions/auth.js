import {Circle} from './circle'
import {Constants,store} from '../'
import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'
export class Authentication{
    static registerUser=(user)=>{
        store.dispatch(Authentication.sign_up());
        console.log(user,"in action")
        firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
        .then(
            (res)=>{
                firebase.auth().currentUser.updateProfile({
                    displayName: user.name,
                })
                firebase.database().ref("user").child(firebase.auth().currentUser.uid).set(
                    user
                )
                store.dispatch(Authentication.sign_up_success(user));
                Actions.home();
                console.log("registered")
            }
        )
        .catch((err)=>{console.log(err);
        store.dispatch(Authentication.sign_up_failed(err))
        })
    }
    static loginUser=(user)=>{
        console.log("in action",user)
        store.dispatch(Authentication.sign_in(user));
        firebase.auth().signInWithEmailAndPassword(user.email,user.password)
        .then(
            (res)=>{
                navigator.geolocation.getCurrentPosition(
                    (position)=>{const LatLong={
                        latitude:position.coords.latitude,
                        Longitude:position.coords.longitude
                    }
                let uid=firebase.auth().currentUser.uid
                firebase.database().ref("user").child(uid).child("Location").set(LatLong)
                firebase.database().ref("user").child(uid).child("UID").set(uid)                
                store.dispatch(Authentication.sign_in_success(user));
                Circle.mycircles();
                Actions.mycircles();
                console.log("login success");
                console.log(store.getState())}
            )
        }
        )
        .catch((err)=>{console.log(err);
        store.dispatch(Authentication.sign_in_failed(err))
        })
    }
    static logout=(user)=>{

        store.dispatch(Authentication.log_out());
        firebase.auth().signOut().then(
            ()=>{store.dispatch(Authentication.log_out_success(user));Actions.login()}
        ).catch(
            (err)=>{store.dispatch(Authentication.log_out_failed(err))}
        )
    }
    static sign_up=(user)=>({
        type:Constants.SIGN_UP,
        
    })
    static sign_up_success=(payload)=>({
        type:Constants.SIGN_UP_SUCCESS,
        payload:payload
    })
    static sign_up_failed=(payload)=>({
        type:Constants.SIGN_UP_FAILED,
        payload:payload
    })
    


    static sign_in=(user)=>({
        type:Constants.SIGN_IN,
        
    })
    static sign_in_success=(payload)=>({
        type:Constants.SIGN_IN_SUCCESS,
        payload:payload
    })
    static sign_in_failed=(payload)=>({
        type:Constants.SIGN_IN_FAILED,
        payload:payload
    })


    static log_out=()=>({
        type:Constants.LOG_OUT
    })
    static log_out_success=()=>({
        type:Constants.LOG_OUT_SUCCESS
    })
    static log_out_failed=(payload)=>({
        type:Constants.LOG_OUT_FAILED,
        payload:payload
    })
}