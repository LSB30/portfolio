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
            <Route path="" element={<Projetos />} />
            <Route path="" element={<About />} />
            <Route path="" element={<Contato />} />
            <Route path="" element={<Certificados />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
