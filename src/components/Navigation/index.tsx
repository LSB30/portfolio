import { Li, Nav } from "./styles";
export default function Navigation() {
  return (
    <>
      <Nav>
        <a href="/">
          <Li style={{animation: "0.5s ease 0.3s 1 normal forwards running navLinkFade"}}>Home</Li>
        </a>

        <a href='#projects'>
          <Li style={{animation: "0.5s ease 0.442857s 1 normal forwards running navLinkFade"}}>Projetos</Li>
        </a>
        <a href="#sobre">
          <Li style={{animation: "0.5s ease 0.585714s 1 normal forwards running navLinkFade"}}>Sobre</Li>
        </a>
        <a href="#contato">
          <Li style={{animation: "0.5s ease 0.728571s 1 normal forwards running navLinkFade"}}>Contato</Li>
        </a>
      </Nav>
    </>
  );
}
