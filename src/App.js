import Cart from './files/Cart';
import Login from './files/Login';
import Signin from './files/Sign-in';
import Product from './files/Product';
import Home from './files/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './files/Profile';
import Search from './files/Search';
function App() {


  // Get all cookies as a string
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sign-in' element={<Signin />}></Route> //done
          <Route path='/pro' element={<Product />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  )
}


export default App;
