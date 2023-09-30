import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componants/Navbar";
import Home from "./pages/Home";
import RecipieList from "./pages/RecipieList";
import RecipieDetails from "./pages/RecipieDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipieList" element={<RecipieList />} />
        <Route path="/recipieDetails" element={<RecipieDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;
