import { Outlet, Link} from "react-router-dom";
import { Fragment} from "react";
import {ReactComponent as Crwnlogo} from '../../../Asset/crown.svg';
import './Navigation.style.scss';

const Navigation = ()=>{
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
            <Link className="nav-link" to= '/Sign-in'>
                SIGN IN
            </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
    ); 
  }


  export default Navigation;