import { useState } from "react";
import { List, X } from "phosphor-react";

import { MobileContent, MobileIcon, NavMenu } from "./styles";
import { Link } from "react-router-dom";
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
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Projetos</Link>
          <Link to={"/"}>Sobre</Link>
          <Link to={"/"}>Contato</Link>
        </div>
      </NavMenu>
    </>
  );
}
