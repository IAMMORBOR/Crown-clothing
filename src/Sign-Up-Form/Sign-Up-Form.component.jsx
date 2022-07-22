import './Sign-Up-Form.style.scss'
import { useState } from "react";
import Button from '../component/Button-component/Button.component';
 //import { createUserWithEmailAndPassword } from "firebase/auth";
import { createAuthWithEmailAndPassword, createUserDocumentFromAuth} from "../Util/Firebase.util";
import FormInput from "../component/Form-Input/FormInput.component";
const DefaultFormField = {
    displayName: '',
    email : '',
    password: '',
    confirmPassword: '',
} 


const SignUp = ()=>{
    const [FormField, SetFormField]= useState(DefaultFormField)
    const {displayName, email, password, confirmPassword} = FormField;
    const Handlechange = (event) =>{
        
        const {name, value} = event.target;

        SetFormField({...FormField, [name]:value});
    };
    const resetFormFields = ()=>{
        SetFormField (DefaultFormField);
    }

    const HandleSubmit = async(e)=>{
        e.preventDefault();
        //SetFormField = DefaultFormField;
        if (password !== confirmPassword){
           
            alert ('password do not match');
            return;
        }
        
        try {
            const {user} = await createAuthWithEmailAndPassword(
                email, 
                password);

                 await createUserDocumentFromAuth(user, {displayName});
                 resetFormFields();
        }catch(error){
            console.log("user creation encounter an error", error);

        }
    }
    
// console.log (FormField);
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with Email and Password </span>
             <div> 
                <FormInput 
                label='display Name'
                type="text"
                 required 
                 onChange={Handlechange} 
                name='displayName' 
                value={displayName}/>

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

               
                <FormInput
                label ='confirm password'
                 type="password" 
                 required
                  onChange={Handlechange} 
                  name='confirmPassword' 
                  value= {confirmPassword}/>

             <Button onClick={HandleSubmit}> Sign Up</Button>
            </div>

        </div>

        
    ) 
    
}

export default SignUp;