import { Outlet } from "react-router-dom";
import MenuSecondary from "../MenuSecondary";
import Global from "../../styles/global";

export default function PagesAlternativas() {
  return (
    <>
      <Global />
      <MenuSecondary />
      <Outlet />
    </>
  );
}
