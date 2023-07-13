import { Routes, Route, BrowserRouter } from "react-router-dom";

import Contato from "../Pages/Contato";
import About from "../Pages/About";
import Projetos from "../Pages/Projects";
import Home from "../Pages/Home";
import Certificados from "../Pages/Certificados";
import PagesAlternativas from "../components/PagesAlternativas";

export function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PagesAlternativas />}>
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/certificados" element={<Certificados />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
