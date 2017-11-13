import {createStore,applyMiddleware,combineReducers} from "redux"
import {createEpicMiddleware,combineEpics} from 'redux-observable'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {reducer} from './reducers'
import firebase from 'firebase'
export class Constants {
    
        static HAS_SIGNED_IN = 'HAS_SIGNED_IN';
    
        static SIGN_UP = 'SIGN_UP';
        static SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
        static SIGN_UP_FAILED = 'SIGN_UP_FAILED';
    
        static SIGN_IN = 'SIGN_IN';
        static SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
        static SIGN_IN_FAILED = 'SIGN_IN_FAILED'
    
        static LOG_OUT = 'LOG_OUT';
        static LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
        static LOG_OUT_FAILED = 'LOG_OUT_FAILED';
        
    }


    var config = {
        apiKey: "AIzaSyBzUTQ3Q9NtwAuJT1yq08QA6PCZTxs3CWA",
        authDomain: "iftar-app.firebaseapp.com",
        databaseURL: "https://iftar-app.firebaseio.com",
        projectId: "iftar-app",
        storageBucket: "iftar-app.appspot.com",
        messagingSenderId: "85326666410"
      };
      firebase.initializeApp(config);
export const store = createStore(reducer,applyMiddleware(logger,thunk));
store.subscribe(()=>{console.log(store.getState())})

