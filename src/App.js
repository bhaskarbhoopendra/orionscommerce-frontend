import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/authComponent/Regitser";

function App() {
  return (
    <div className="App">
      <li>
        <Link to={"/register"} className="nav-link">
          Sign Up
        </Link>
      </li>

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
