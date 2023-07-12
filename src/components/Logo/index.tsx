import LogoTitle from "../LogoTitle";
import { LogoContainer, ImgContainer } from "./styles";
import logoPizza from "/logoPizza-PhotoRoom.png-PhotoRoom.png"
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link to="/">
    <LogoContainer>
      <ImgContainer><img src={logoPizza} alt="Logo Pizza" /></ImgContainer>
      <LogoTitle />
    </LogoContainer>
    </Link>
  );
}
