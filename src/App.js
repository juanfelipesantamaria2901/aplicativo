import './App.css';
import Actualizar from './pages/Cartera/Actualizar';
import VistaPlano from './pages/Cartera/Cartera3';
import VistaPlano2 from './pages/Cartera/Cartera6';
import Cartera4 from './pages/Cartera/Cartera4';
import Cartera5 from './pages/Cartera/Cartera5';
import Tabla from './Components/Tablas/Tabla';
import Tabla2 from './Components/Tablas/Tabla2';
import Modal from './Components/modals/modal';
import Modal2 from './Components/modals/modal2';
import Modal3 from './Components/modals/modal3';
import Modal4 from './Components/modals/modal4';
import Login from './pages/Login/Login';
// import Login2 from './pages/Login/Login2';
// import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Cartera */}
        <Route path="/Cartera" element={<Cartera5 />} />
        <Route path="/DatosCartera" element={<Cartera4 />} />
        <Route path="/Registro_Cartera" element={<Modal />} />
        <Route path="/Registro_Relacional" element={<Modal2 />} />
        <Route path="/Eliminar_Relacional" element={<Modal4 />} />
        <Route path="/Relacionar" element={<Modal3 />} />
        <Route path="/Actualizar" element={<Actualizar />} />
        {/* VistaPlano */}
        <Route path="/Vista" element={<VistaPlano />} />
        <Route path="/Plano" element={<VistaPlano2 />} />
        {/* Tabla */}
        <Route path="/Tabla" element={<Tabla />} />
        <Route path="/TablaRelacional" element={<Tabla2 />} />
        {/* Login*/}
        <Route path="/" element={<Cartera5/>} />
        <Route path="/index.html" element={<Login/>} />
        {/* Dashboard*/}
        {/* <Route path="/Dashboard" element={<Dashboard/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
