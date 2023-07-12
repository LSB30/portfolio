import styled from "styled-components";

export const MenuContainer = styled.header`
  display: flex;
  height: 10rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 2rem;

  /* background: #111; */
  backdrop-filter: blur(24px);
  box-shadow: rgb(2, 6, 23) 0px 10px 30px 1px;
  /* background: #0d0d0d; */
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2;
`;
