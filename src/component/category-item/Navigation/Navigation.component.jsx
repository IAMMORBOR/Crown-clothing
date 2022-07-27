import { Outlet, Link} from "react-router-dom";
import { Fragment, useContext} from "react";
import {ReactComponent as Crwnlogo} from '../../../Asset/crown.svg';
import './Navigation.style.scss';
import { Usercontext } from "../../../Context/User.Context";
import { SignOutUser } from "../../../Util/Firebase.util";


const Navigation = ()=>{
    const {currentUser, setCurrentUser}= useContext(Usercontext)

    const SignOutHandler = async()=>{
        await SignOutUser();
        setCurrentUser(null);
    }
    return(
      <Fragment>
      <div className="navigation">
        <Link className="logo-container" to= '/'>
            <Crwnlogo>logo</Crwnlogo>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to= '/shop'>
                SHOP
            </Link>
            <Link className="nav-link" to= '/contact'>
                CONTACT
            </Link>
          {currentUser ?
                <span className="nav-link" onClick={SignOutHandler}>   
               SIGN OUT
                </span> :
            <Link className="nav-link" to= '/Auth'>
                SIGN IN
            </Link>}
        </div>
      </div>
      <Outlet/>
    </Fragment>
    ); 
  }


  export default Navigation;