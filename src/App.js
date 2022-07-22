import { Routes, Route} from 'react-router-dom';
import Navigation from './component/./category-item/Navigation/Navigation.component';
import Home from './component/category-item/Routes/Homes/Home.component';
import SignIn from './component/category-item/Routes/SignIn.component';

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
        <Route path='/Sign-in' element ={ <SignIn/>} />
       
        </Route>
      
       
    </Routes>

  )



}

export default App;
