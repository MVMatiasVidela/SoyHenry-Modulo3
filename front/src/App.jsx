import "./App.css";
import ImgPrincipal from "./components/secundary/ImgPrincipal/imgPrincipal";
import { Home, Appointments, Contact, About, NotFound } from "./views";
import { Navbar, Footer, Login, Register } from "./components/primary/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ImgPrincipal />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;