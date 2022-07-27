import './Sign-In-Form.style.scss'
import { useState, useContext } from "react";
import Button from '../Button-component/Button.component'
 //import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithGooglePopup, createUserDocumentFromAuth, signAuthWithEmailAndPassword} from '../../Util/Firebase.util';
import FormInput from '../Form-Input/FormInput.component'
import {Usercontext} from '../../Context/User.Context'

const DefaultFormField = {
    email : '',
    password: '',

} 


const SignInForm = ()=>{
    const [FormField, SetFormField]= useState(DefaultFormField)
    const { email, password} = FormField;
    const { setCurrentUser }=useContext(Usercontext);

    const Handlechange = (event) =>{
        
        const {name, value} = event.target;

        SetFormField({...FormField, [name]:value});
    };
    const resetFormFields = ()=>{
        SetFormField (DefaultFormField);
    }
    const signInWithGoogle = async ()=>{
        const {User} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(User);
    }

    const HandleSubmit = async(e)=>{
        e.preventDefault();
       
        try {
            const {user} = await signAuthWithEmailAndPassword(email, password);
        //    console.log(response)
            setCurrentUser(user);
           resetFormFields()

        }catch(error){
            if(error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password'){
                alert ('username or password in correct. please try again');
            }else console.log(error)

        }
    }
    
// console.log (FormField);
    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In with Email and Password </span>
             <div> 
                <FormInput 
                label='email'
                type="email"required
                 onChange={Handlechange} 
                 name='email'
                  value= {email}/>

               
                <FormInput 
                label='password'
                type="password" 
                 required
                  onChange={Handlechange} 
                  name='password' 
                  value= {password}/>
                  
                  <div className='Btn-container'>
                  <Button type='submit' onClick= {HandleSubmit}> Sign in</Button>
                  <Button  type='button' buttonType='google' onClick={signInWithGoogle}> Google sign in</Button>
                  </div>

             
            </div>

        </div>

        
    ) 
    
}

export default SignInForm;