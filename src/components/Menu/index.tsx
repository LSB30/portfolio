import { MenuContainer } from "./styles";
import Logo from "../Logo";
import Navigation from "../Navigation";
import MenuMobile from "../MenuMobile";

export default function Menu() {
  return (
    <>
      <MenuMobile />
      <MenuContainer>
        <Logo />
        <Navigation />
      </MenuContainer>
    </>
  );
}
