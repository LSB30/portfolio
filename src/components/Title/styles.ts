import styled from "styled-components";

export const ContainerTitle = styled.div`
  position: absolute;
  top: 25rem;
  left: 10rem;
  /* overflow: hidden; */
  

  @media (max-width: 995px) {
    position: static;
    margin: 5rem 5rem 2rem 5rem;
  }

  @keyframes titleAnimation {
  }

  .button {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 1rem;
    }

    @media (min-width: 1200px) {
      gap: 1.5rem;
    }
  }
`;

export const ContainerMobile = styled.section`
  @media (max-width: 995px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
  }
`;

export const IntroTextP = styled.p`
  color: rgb(178, 187, 207);
  font-size: 2rem;

  @media (max-width: 995px) {
    font-size: 1.6rem;
  }
`;

export const IntroTextH1 = styled.h1`
  color: #8485f6;
  font-size: 5.5rem;
  font-weight: 800;
  text-transform: uppercase;
  background: linear-gradient(90deg, #9442fe, #3378ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  

  @media (max-width: 995px) {
    font-size: 3.52rem;
    text-transform: none;
  }
`;

export const IntroTextH2 = styled.h2`
  color: #d9d9d9;
  font-size: 3rem;
  position: relative;

  @media (max-width: 995px) {
    font-size: 1.9rem;
  }
`;

export const ButtonPrimary = styled.button`
  background-color: transparent;
  font-size: 1.76rem;
  font-weight: 600;
  color: rgb(214, 214, 220);
  padding: 1.92rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  cursor: pointer;
  margin-top: 2rem;
  border: 2px solid;
  border-radius: 5px;
  border-image: linear-gradient(225deg, #00d9ff 0%, #c001fa 100%) 1;
  display: block;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(225deg, #00d9ffe1 0%, #d502face 100%);
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scale(0);
  }

  &:hover {
    color: rgb(214, 214, 220);
    &:before {
      transform: scale(1);
      background: linear-gradient(225deg, #00d9ffe1 0%, #d502face 100%);
    }
  }

  .btn {
    &::before {
      transform: scaleX(0);
    }

    &:hover {
      color: rgb(214, 214, 220);
      &:before {
        transform: scaleX(1);
        background: linear-gradient(225deg, #00d9ffe1 0%, #d502face 100%);
      }
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  > b {
    color: rgb(214, 214, 220);
  }

  > svg {
    color: rgb(214, 214, 220);
  }
`;
