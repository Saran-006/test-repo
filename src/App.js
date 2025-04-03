import './index.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home.js'
import Srchtop from './pages/srch-top.js'
function App() {
  return (

      <Router>
      <nav>
        <Link to='/'></Link>
        <Link to='/search'></Link>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/search' element={<Srchtop/>} />
        </Routes>
      </Router>
);
}

export default App;
