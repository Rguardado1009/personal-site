import "./App.css";
import {
  About,
  Contact,
  Header,
  Footer,
  Navbar,
  Projects,
} from "./components/index";
import { Routes, Route } from "react-router-dom";
import Technologies from "./components/Technologies";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="gradient__bg">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="About" element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <Technologies />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
