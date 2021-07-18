import firebase from 'firebase';
import {useState,useEffect} from 'react';

firebase.initializeApp({
  apiKey: "AIzaSyAnMrm8naCclhs1W5hiquVthh_P0-khs6Y",
    authDomain: "sign-project-d6fa3.firebaseapp.com",
    projectId: "sign-project-d6fa3",
    storageBucket: "sign-project-d6fa3.appspot.com",
    messagingSenderId: "729985654352",
    appId: "1:729985654352:web:1ec1ba5727fb80ef1fbb55"
})
const auth = firebase.auth();

const App = () => {
  const [user,setUser] = useState(null);
useEffect(()=>{
  auth.onAuthStateChanged(person=> {
    if(person){
      setUser(person)
    }
    else{
      setUser(null)
    }
  })
})
const signInWithGoogle = async () =>{
  try{
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  catch(err){
    console.log(err);
  }
}

  return (
    <div>
        <center>
          {user?
          <div>
           <h1>Welcome to home page </h1>
          <button onClick={()=>auth.signOut()}>Sign Out</button>
          </div>
          :
          <button onClick={signInWithGoogle}>Sign In With Google</button>}
          
        </center>
    </div>
  )
}

export default App;