import "./App.css";
import About from "./About.js";
import Header from "./Header.js";
import Contact from "./Contact.js";
import Landing from "./Landing.js";
import { Routes, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
