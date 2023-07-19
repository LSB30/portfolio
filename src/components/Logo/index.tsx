import { LogoContainer, ImgContainer } from "./styles";
import logoPizza from "../../assets/images/logoPizza-PhotoRoom.png-PhotoRoom.png";
import { Link } from "react-router-dom";
import LogoTitle from "../LogoTitle";
export default function Logo() {
  return (
    <Link to="/">
      <LogoContainer>
        <ImgContainer>
          <img src={logoPizza} alt="" />
        </ImgContainer>
        <LogoTitle />
      </LogoContainer>
    </Link>
  );
}
