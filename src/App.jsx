import './css/App.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import GustTheQxfordVacab from "./game/guessTheQxfordVocabulary.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guess" element={<GustTheQxfordVacab />} />
      </Routes>
    </>
  );
}

export default App;
