import styled from "styled-components";

export const Container = styled.section`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ContainerGit = styled.div`
  border-radius: 15px;
  border: 1px solid #8485f6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 26.9rem;
  padding-bottom: 5rem;
  max-width: 70rem;

  h4 {
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-weight: 900;
    font-size: 2.8rem;
    text-align: center;
    color: #8485f6;
  }
`;

export const ContentGit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (min-width: 768px) {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    padding-left: 4rem;
  }
`;

export const Cubo = styled.div`
  position: relative;
  padding-bottom: 5rem;

  .stage-cube-cont {
    position: absolute;

    @media (min-width: 768px) {
      left: 3rem;
    }
  }

  .cubespinner {
    animation: spincube 13s ease-in-out infinite;
    transform-style: preserve-3d;
    transform-origin: 50px 50px 0;
    margin-left: calc(50% - 50px);

    &:hover {
      animation-play-state: paused;
    }

    img {
      width: 4rem;
    }

    div {
      position: absolute;
      width: 10rem;
      height: 10rem;
      border: 2px solid #1e1e25;
      background: rgba(1, 1, 1, 0.4);
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .face1 {
      transform: translateZ(50px);
    }
    .face2 {
      transform: rotateY(90deg) translateZ(50px);
    }
    .face3 {
      transform: rotateY(90deg) rotateX(90deg) translateZ(50px);
    }
    .face4 {
      transform: rotateY(180deg) rotateZ(90deg) translateZ(50px);
    }
    .face5 {
      transform: rotateY(-90deg) rotateZ(90deg) translateZ(50px);
    }
    .face6 {
      transform: rotateX(-90deg) translateZ(50px);
    }
  }

  @keyframes spincube {
    from,
    to {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    16% {
      transform: rotateY(-90deg) rotateZ(90deg);
    }
    33% {
      transform: rotateY(-90deg) rotateX(90deg);
    }
    50% {
      transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
      transform: rotateY(-270deg) rotateX(90deg);
    }
    83% {
      transform: rotateX(90deg);
    }
  }
`;

export const ButtonGit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.7rem;
  cursor: pointer;
  border: 0.25em solid rgb(82, 82, 224);
  padding: 1.6rem 3.2rem;
   color: rgb(239, 240, 247);
  font-size: 1.6rem;
  font-weight: 700;
  background-color: transparent;
  border-radius: 1em;
  outline: none;
  position: relative;
  transition: all 0.3s;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    color: black;
    background-color: rgb(239, 240, 247);
    box-shadow: 0 0 1em 0.25em rgb(82, 82, 224),
      0 0 4em 2em rgb(82, 82, 224),
      inset 0 0 0.75em 0.25em rgb(239, 240, 247);
  }
`;
