import styled from "styled-components";

export const MobileContent = styled.div``;

interface Click {
  readonly open: boolean;
}

export const NavMenu = styled.nav<Click>`
  display: none;
  @media (max-width: 994px) {
    display: block;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(24px);
    box-shadow: rgb(2, 6, 23) 0px 10px 30px 1px;
    z-index: 10;
    opacity: 0.95;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.5s ease-in-out;

    .menu-mobile {
      display: flex;
      height: 80%;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;

      > a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.4rem;
        font-size: 2.8rem;
        gap: 1.5rem;
        color: #e2e8f0;
        font-size: 2.8rem;
        transition: all 0.4s ease 0s;
        width: 100%;
        margin-left: 30rem;
        > svg {
          font-size: 3rem;
        }
        &:hover {
          color: #8485f6;
        }
        > span {
          font-size: 1.6rem;
        }
      }
    }
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

export const MobileIcon = styled.div`
  display: none;
  transition: all 1s linear;
  @media (max-width: 994px) {
    display: block;
    position: absolute;
    position: fixed;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    z-index: 20;

    > svg {
      color: rgb(226, 232, 240);
    }
  }
`;
