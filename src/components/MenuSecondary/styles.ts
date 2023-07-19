import styled from "styled-components";
export const ContainerMenu = styled.div`
  position: absolute;
  left: 0;
  width: 32rem;
  height: 100vh;
  padding: 2.4rem;
  backdrop-filter: blur(24px);
  box-shadow: rgb(2, 6, 23) 0px 10px 30px 1px;

  display: flex;
  flex-direction: column;

  @media (max-width: 995px) {
    position: fixed;
    top: 0;
  }
`;

export const ContainerPerfil = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background: linear-gradient(rgb(68, 235, 216) 0%, rgb(255, 0, 192) 100%);
    position: absolute;
    bottom: -1.8rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .container-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    > h2 {
      color: #e2e8f0;
      font-size: 1.6rem;
      font-weight: 400;
      letter-spacing: 0.08em;
      width: 100%;
    }
  }

  .bg {
    width: 8rem;
    height: 8rem;
    padding: 0.2rem;
    background: linear-gradient(rgb(68, 235, 216) 0%, rgb(255, 0, 192) 100%);
    border-radius: 50%;
  }
`;

export const DivImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://github.com/LSB30.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 4px solid rgb(11, 9, 9);
`;

export const MenuNav = styled.nav`
  margin-top: 2rem;
  position: relative;

  .navList {
    padding: 0px;
    list-style: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const Li = styled.li`
  width: 100%;
  padding: 1.6rem;
  position: relative;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    font-size: 2.8rem;
    gap: 1.5rem;
    color: #e2e8f0;
    font-size: 2.8rem;
    transition: all 0.4s ease 0s;

    > svg {
      font-size: 2rem;
    }
    &:hover {
      color: #8485f6;
    }
    > span {
      font-size: 1.6rem;
    }
  }

  
`;
