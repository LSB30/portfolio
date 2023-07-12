import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  > a {
    text-decoration: none;
  }

  @media (max-width: 994px) {
    display: none;
  }
`;

export const Li = styled.li`
  list-style: none;
  color: #9ca3af;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  /* text-transform: uppercase; */
  cursor: pointer;
  position: relative;
  /* margin-bottom: 0.5rem; */
  /* background-color: transparent; */
  /* border-radius: 5px;
  padding: 1rem; */
  /* &:hover {
    background-color: #18181b;
    color: #8485f6;
  } */

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -7px;
    left: 0;
    background: linear-gradient(270deg, #8485f6 0%, #17161d 100%);
    transform-origin: bottom right;
    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover {
    color: #ffffff;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
