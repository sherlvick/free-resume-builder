import { Route, Router, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import "./App.css";
import { Profile } from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
