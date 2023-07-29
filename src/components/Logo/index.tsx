import { LogoContainer } from "./styles";
import { Link } from "react-router-dom";
import LogoTitle from "../LogoTitle";
export default function Logo() {
  return (
    <Link to="/">
      <LogoContainer>
        
        <LogoTitle />
      </LogoContainer>
    </Link>
  );
}
