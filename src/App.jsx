import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Gallery";
import Detail from "./pages/ArtworkDetail";
import Nav from "./components/navigation/Header";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;