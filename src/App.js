import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componants/Navbar";
import Home from "./pages/Home";
import RecipieList from "./pages/RecipieList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipieList" element={<RecipieList />} />
      </Routes>
    </Router>
  );
}

export default App;
