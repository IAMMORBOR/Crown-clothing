import { Routes, Route} from 'react-router-dom';
import Navigation from './component/./category-item/Navigation/Navigation.component';
import Home from './component/category-item/Routes/Homes/Home.component';

import SignInAuth from './component/AuthenticationPage/SignInAuth.component';
const Shop = ()=> {
  return(
    <div>
      <h2> i am the shop</h2>
    </div>

  )
}



const App = () => {
  return (
    <Routes>
        <Route path='/' element ={<Navigation/>}>
        <Route index element ={ <Home/>} />
        <Route path='/Shop' element ={ <Shop/>} />
        <Route path='/Auth' element ={ <SignInAuth/>} />
       
        </Route>
      
       
    </Routes>

  )



}

export default App;
