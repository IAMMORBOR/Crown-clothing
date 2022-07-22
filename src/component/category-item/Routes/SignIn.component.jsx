import Button from '../../Button-component/Button.component';
import {signInWithGooglePopup,createUserDocumentFromAuth} from  '../../../Util/Firebase.util';
import SignUp from '../../../Sign-Up-Form/Sign-Up-Form.component'

const SignIn = ()=>{
    const logGoogleUser = async ()=>{
        const {User} = await signInWithGooglePopup();
        console.log (User)
        const userDocRef = createUserDocumentFromAuth(User);
    }
    return(
 <div> 
    <h3>Sign in page </h3>
    <Button buttonType='google' onClick={logGoogleUser}>
        sign in with Google
    </Button>
    <SignUp/>

 </div>

    )
}
export default SignIn;