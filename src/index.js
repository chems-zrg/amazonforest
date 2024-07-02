import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import FirstPage from './firstpage';
import reportWebVitals from './reportWebVitals';
import Navbar from './NavBar';
import Secondepage from './secondepage';
import Thirdpage from './thirdpageaboutus';
import Protecnature from './protectnature';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/firstpage" element={<FirstPage />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Secondepage" element={<Secondepage />} />
        <Route path='/Thirdpage' element={<Thirdpage/>}/>
        <Route path='/Protecnature' element={<Protecnature/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
