import './index.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home.js'
import Srchtop from './pages/srch-top.js'
import Login  from './pages/login.js'
import Signin from './pages/signin.js'
import { Account } from './pages/account-pg.js'
import { Explore } from './pages/explore-pg.js'
function App() {
  return (
      <Router>
      <nav>
        <Link to='/'></Link>
        <Link to='/search'></Link>
        <Link to='/login'></Link>
        <Link to='/signin'></Link>
        <Link to='/account'></Link>
        <Link to='/explore'></Link>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/search' element={<Srchtop/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/account' element={<Account />} />
          <Route path='/explore' element={<Explore />} />
        </Routes>
      </Router>
);
}

export default App;
