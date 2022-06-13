import './App.css';
import Cartera from './pages/Cartera/Cartera';
import VistaPlano from './pages/Cartera/Cartera3';
import Tabla from './Components/Tablas/Tabla';
import Modal from './Components/modals/modal';
import Modal2 from './Components/modals/modal2';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Cartera */}
        <Route path="/Cartera" element={<Cartera />} />
        <Route path="/Registro_Cartera" element={<Modal />} />
        <Route path="/Registro_Relacional" element={<Modal2 />} />
        {/* VistaPlano */}
        <Route path="/Vista" element={<VistaPlano />} />
        {/* Tabla */}
        <Route path="/Tabla" element={<Tabla />} />
        {/* Login*/}
        <Route path="/Login" element={<Login/>} />
        {/* Dashboard*/}
        <Route path="/Dashboard" element={<Dashboard/>} />        
      </Routes>
    </Router>
  );
}

export default App;
