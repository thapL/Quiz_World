import "./css/App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import PartOfSpeech from "./pages/PartOfSpeech.jsx";
import NounPage from "./pages/Noun.jsx";
import GustTheQxfordVacab from "./game/guessTheQxfordVocabulary.jsx";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="quizvoca.com/" element={<Home />} />
        <Route path="/part" element={<PartOfSpeech />} />
        <Route path="/noun" element={<NounPage />} />
        <Route path="quizvoca.com/guess" element={<GustTheQxfordVacab />} />
      </Routes>
    </>
  );
}

export default App;
