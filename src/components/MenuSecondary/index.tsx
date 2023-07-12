import { Link } from "react-router-dom";
import { ContainerMenu, ContainerPerfil, DivImg, Li, MenuNav } from "./styles";
import {PiHouseLineLight, PiCode, PiUserCircleLight, PiGraduationCapLight} from "react-icons/pi"
export default function MenuSecondary() {
  return (
    <ContainerMenu>
      <ContainerPerfil>
        <a href="" className="container-img">
          <div className="bg">
            <DivImg />
          </div>
          <h2>Lucas Santana</h2>
        </a>

        <a href=""></a>
      </ContainerPerfil>

      <MenuNav>
        <ul className="navList">
          <Li>
            <Link to={"/"}>
             <PiHouseLineLight/> <span>Home</span>
            </Link>
          </Li>
          <Li>
            <Link to={"/projetos"}>
             <PiCode/> <span>Projetos</span>
            </Link>
          </Li>
          <Li>
            <Link to={"/"}>
             <PiGraduationCapLight/> <span>Certificados</span>
            </Link>
          </Li>
          <Li>
            <Link to={"/"}>
             <PiUserCircleLight/> <span>Sobre</span>
            </Link>
          </Li>
         
        </ul>
      </MenuNav>
    </ContainerMenu>
  );
}
