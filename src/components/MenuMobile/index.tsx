import { useState } from "react";
import { List, X } from "phosphor-react";
import {
  PiHouseLineLight,
  PiRocketLight,
  PiUserCircleLight,
  PiAddressBookLight,
} from "react-icons/pi";

import { MobileContent, MobileIcon, NavMenu } from "./styles";
export default function MenuMobile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <MobileContent>
        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={25} weight="bold" />
          ) : (
            <List size={25} weight="bold" />
          )}
        </MobileIcon>
      </MobileContent>

      <NavMenu onClick={handleOpen} open={open}>
        <div className="menu-mobile">
          <a href="/">
            <PiHouseLineLight /> <span>Home</span>
          </a>
          <a href="#projects">
            <PiRocketLight /> <span>Projetos</span>
          </a>
          <a href="#sobre">
            <PiUserCircleLight /> <span>Sobre</span>
          </a>
          <a href="#contato">
            <PiAddressBookLight/> <span>Contato</span>
          </a>
        </div>
      </NavMenu>
    </>
  );
}
