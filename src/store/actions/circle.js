import {store} from '../';
import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'
export class Circle {
    static createcircle=(data)=>{
        var emptyString = "";
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        
        while (emptyString.length < 3) {
          emptyString += alphabet[Math.floor(Math.random() * 10)];
        } 
        var emptyno = "";
        var nos = "1234567890";
        
        while (emptyno.length < 3) {
          emptyno += nos[Math.floor(Math.random() * 10)];
        } 
        var alphaNum=emptyString+emptyno
        console.log(alphaNum);
        
    store.dispatch(Circle.create());console.log(data)
    firebase.database().ref().child("Circle").push(
        {CircleName:data,
        admin:firebase.auth().currentUser.uid,
        members:[firebase.auth().currentUser.uid],
        inviteKey:alphaNum
        }
    ).then(()=>store.dispatch(Circle.createSuccess(data)))
    }

static create=()=>({type:"Create Circle"})
static createSuccess=(payload)=>({type:"Create Circle Success",payload:payload})
//------------------------------------------------------------------------
    static mycircles=()=>{var myCircleNames=[]
        store.dispatch(Circle.my());
        firebase.database().ref("/" + "Circle")
            .on("value", (snap) => {
                var dataSnapshot = snap.val();
                var keysss=Object.keys(dataSnapshot)
                var vals = [];
                for (var i in dataSnapshot) {
                    vals.push(dataSnapshot[i])
                } console.log(vals)
                vals.map((circles,index) => {
                    let members = circles.members;
                    members.map((data) => {
                        if(data===firebase.auth().currentUser.uid){
                            myCircleNames.push
                            ({  name:vals[index].CircleName,
                                CircleID:keysss[index]
                            })
                            console.log(data)
                        }
                    });
                });console.log(myCircleNames);
                store.dispatch(Circle.mySuccess(myCircleNames))
            })
        }
static my=()=>({type:"My Circle"})
static mySuccess=(payload)=>({type:"My Circle Success",payload:payload})
//-----------------------------------------------------------------
static getMembers=(CircleKey)=>{
    var MemberArray=[]
    var userKeys=[]
    let admin=""
store.dispatch(Circle.members());
firebase.database().ref("/"+"Circle").child(CircleKey)
.once("value",(snap)=>{
    var dsnap=snap.val();
    admin=dsnap.admin;
    console.log(admin)
})
firebase.database().ref("/"+"Circle").child(CircleKey).child("members").once(
    "value",(snap)=>{var dataSnapshot=snap.val()
        console.log(dataSnapshot);
        userKeys=dataSnapshot
        userKeys.map((data)=>{
            firebase.database().ref("user").child(data)
            .on("value",(snap)=>{var dataSnap=snap.val();
                // console.log(dataSnap)
                MemberArray.push(dataSnap)
            })
        })
    }
)
console.log(admin)
setTimeout(()=>{store.dispatch(Circle.membersSuccess(admin,MemberArray))},2000)

}    

static members=()=>({type:"Get Members"})
static membersSuccess=(admin,members)=>({type:"Get Members Success",admin:admin,members:members})
//------------------------------------------------------------------------
static inviteMember=(uid)=>{
    var emptyString = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    while (emptyString.length < 3) {
      emptyString += alphabet[Math.floor(Math.random() * 10)];
    } 
    var emptyno = "";
    var nos = "1234567890";
    
    while (emptyno.length < 3) {
      emptyno += nos[Math.floor(Math.random() * 10)];
    } 
    var alphaNum=emptyString+emptyno
    console.log(alphaNum);

store.dispatch(Circle.invite());
firebase.database().ref("Circle").child(uid).child("inviteKey").set(alphaNum)
store.dispatch(Circle.inviteSuccess(alphaNum))
}
static invite=()=>({type:"Invite"})
static inviteSuccess=(payload)=>({type:"Invite Success",payload:payload})
//---------------------------------------------------------------------------
static joinCircle=(key)=>{
store.dispatch(Circle.join());
var memArr=[];
var CircleID;
firebase.database().ref("Circle")
.orderByChild("inviteKey").equalTo(key).once("value",(snap)=>{
    
    var dataSnapshot=snap.val()
    dataSnapshot=Object.keys(dataSnapshot)
    CircleID=dataSnapshot[0];
    console.log(CircleID)
    console.log(CircleID)
    firebase.database().ref("Circle").child(CircleID).child("members")
    .once("value",(snp)=>{var dsnp=snp.val();
        dsnp.push(firebase.auth().currentUser.uid);
        console.log(dsnp);
        
        firebase.database().ref("Circle").child(CircleID).child("members").set(dsnp)
        .then(()=>{
            Actions.mycircles();
            store.dispatch(Circle.joinSuccess())
        })
    })
                    
        }) 
            
}
static join=()=>({type:"Join"})
static joinSuccess=()=>({type:"Join Success"})
}