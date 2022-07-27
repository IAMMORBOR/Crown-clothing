import { initializeApp} from 'firebase/app';
import {getAuth, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
 
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDocs,
  setDoc,
  

}from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDpZsA8dTLRhtFYN7PqoS6N8V-DIs4wTbE",
    authDomain: "crown-clothing-db-78cdf.firebaseapp.com",
    projectId: "crown-clothing-db-78cdf",
    storageBucket: "crown-clothing-db-78cdf.appspot.com",
    messagingSenderId: "200256935932",
    appId: "1:200256935932:web:e9d8e063438c99302c0479"
  };
  
  // Initialize Firebase
  const FirebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters (
    {
        prompt:'Select_account'
    }
);
export const db = getFirestore();
export const createUserDocumentFromAuth = async(userAuth, 
  additionalInformation={})=> {
  if (!userAuth)return;
  const userDocRef= doc(db,'user', userAuth.uid);
  console.log (userDocRef);

  const userSnapshot = await getDocs(userDocRef);
if(!userSnapshot.exists()){
  const{displayname, email} = userAuth;
  const createAt = new Date();

  try{
    await setDoc(
      {
       displayname,
       email, 
       createAt,
       ...additionalInformation
      });
   }catch(error){
     console.log(error);
   
   }
};
}

export const createAuthWithEmailAndPassword = async(email, password) =>{
  if (!email || !password) return;
return await createUserWithEmailAndPassword (auth, email,password); 
}
export const signAuthWithEmailAndPassword = async(email, password)=>{
  if (!email || !password) return;
  return await signInWithEmailAndPassword (auth,email,password);
}

export const auth= getAuth()
export const signInWithGooglePopup= ()=> signInWithPopup(auth, provider);
export const SignOutUser = async()=>await signOut(auth);

