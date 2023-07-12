import { Routes, Route } from "react-router-dom";

import Contato from "../Pages/Contato";
import About from "../Pages/About";
import Projetos from "../Pages/Projects";
import Home from "../Pages/Home";
import MenuSecondary from "../components/MenuSecondary";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <MenuSecondary />
      <Routes>
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
}
