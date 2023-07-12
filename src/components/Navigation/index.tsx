import { Li, Nav } from "./styles";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <Nav>
        <Link to="/">
          <Li style={{animation: "0.5s ease 0.3s 1 normal forwards running navLinkFade"}}>Home</Li>
        </Link>

        <Link to="/projetos">
          <Li style={{animation: "0.5s ease 0.442857s 1 normal forwards running navLinkFade"}}>Projetos</Li>
        </Link>
        <Link to="/sobre">
          <Li style={{animation: "0.5s ease 0.585714s 1 normal forwards running navLinkFade"}}>Sobre</Li>
        </Link>
        <Link to="/contato">
          <Li style={{animation: "0.5s ease 0.728571s 1 normal forwards running navLinkFade"}}>Contato</Li>
        </Link>
      </Nav>
    </>
  );
}
