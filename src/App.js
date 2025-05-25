import Cart from './files/Cart' ;  
import Login from './files/Login'; 
import Signin from './files/Sign-in';
import Product from './files/Product'; 
import Home from './files/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' ;   

function App() {
  
  return (
    <div>     
      <Router> 
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/' element={<Home />}></Route>  
          <Route path='/sign-in' element={<Signin />}></Route>
          <Route path='/pro' element={<Product />}></Route>
        </Routes> 
      </Router>
    </div> 
  )}
 

export default App ;
 