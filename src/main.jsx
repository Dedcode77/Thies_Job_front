import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil.jsx';
import Inscription from './pages/auth/inscription.jsx';
import Connexion from './pages/auth/connexion.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
         <Routes>
            <Route path="" element={<Accueil />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connexion" element={<Connexion />} />
          </Routes>
    </Router>
  </StrictMode>,
)
