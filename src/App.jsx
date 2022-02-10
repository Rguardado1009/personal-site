import "./App.css";
import {
  About,
  Contact,
  Header,
  Footer,
  Navbar,
  ProjectsCard,
} from "./components/index";
import { Routes, Route } from "react-router-dom";
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
          <Route path="Projects" element={<ProjectsCard />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        {/* <Technologies /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
