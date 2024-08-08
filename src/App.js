import './App.css';
import HomeScreen from './components/HomeScreen';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Kemeja from './pages/Kemeja';
import KemejaScreen from './components/DetailKemeja';
import DetailKemeja from './components/DetailKemeja';
import CelanaPages from './pages/CelanaPages';
import DetailCelana from './components/DetailCelana';
import SepatuPages from './pages/SepatuPages';
import AlertTroli from './components/AlertTroli';
import DetailSepatu from './components/DetailSepatu';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Home' element={<HomeScreen />}></Route>
          <Route path='/KemejaPages' element={<Kemeja />}></Route> {/* INI KEMEJA PAGES */}
          <Route path='/CelanaPages' element={<CelanaPages />}></Route> {/* INI CELANA PAGES */}
          <Route path='/DetailKemeja/:id' element={<DetailKemeja />}></Route> {/* DETAIL KEMEJA AMBIL ID NYA */}
          <Route path='/DetailCelana/:id' element={<DetailCelana />}></Route> {/* INI DETAIL CELANA dan ambil id nya */}
          <Route path='/SepatuPages' element={<SepatuPages />}></Route> {/* INI SEPATU PAGES */}
          <Route path='/DetailSepatu/:id' element={<DetailSepatu />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
