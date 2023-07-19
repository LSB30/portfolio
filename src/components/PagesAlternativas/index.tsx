import { Outlet } from "react-router-dom";
import MenuSecondary from "../MenuSecondary";

export default function PagesAlternativas() {
  return (
    <>
      <MenuSecondary />

      <Outlet />
    </>
  );
}
