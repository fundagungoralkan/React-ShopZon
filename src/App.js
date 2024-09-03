import { BrowserRouter as Router, Routers, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div >
  <Router>
    <Navbar/>
  <Routes>
    <Route path="/"  element={<Home/>}/>
  </Routes>

  </Router>
    </div>
  );
}

export default App;
