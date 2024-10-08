import { BrowserRouter as Router, Routers, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/navbar/Navbar';
import PageContainer from './containers/PageContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <div>
      <PageContainer>
  <Router>
    <Navbar/>
  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/products/:id"  element={<Detail />}/>
  </Routes>
  </Router>
  </PageContainer>
    </div>
  );
}

export default App;
