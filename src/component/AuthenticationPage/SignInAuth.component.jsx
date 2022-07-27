
import {signInWithGooglePopup,createUserDocumentFromAuth} from  '../../Util/Firebase.util';
import SignUp from '../../Sign-Up-Form/Sign-Up-Form.component'
import SignInForm from '../Sign-In-Form/Sign-In-Form.component';
import './SignInAuth.style.scss';

const SignInAuth = ()=>{
    const logGoogleUser = async ()=>{
        const {User} = await signInWithGooglePopup();
        console.log (User)
        const userDocRef = createUserDocumentFromAuth(User);
    }
    return(
 <div className='authentication-container'> 
    <SignInForm/>
    <SignUp/>
    

 </div>

    )
}
export default SignInAuth ;