import './App.css';
import Cartera from './pages/Cartera/Cartera';
import VistaPlano from './pages/Cartera/Cartera3';
import Tabla from './Components/Tablas/Tabla';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Cartera */}
        <Route path="/Cartera" element={<Cartera />} />
        {/* VistaPlano */}
        <Route path="/Vista" element={<VistaPlano />} />
        {/* Tabla */}
        <Route path="/Tabla" element={<Tabla />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
