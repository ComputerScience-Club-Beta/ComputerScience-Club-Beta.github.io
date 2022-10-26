import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Management from "./components/Management";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />}></Route>
          <Route path="management" element={<Management />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
