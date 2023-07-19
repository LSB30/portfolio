import styled from "styled-components";

export const Title = styled.h2`
  position: relative;
  position: absolute;
  z-index: 1;
  padding-top: 2rem;
  font-size: 5.6rem;
  font-weight: 800;
  opacity: 1;
  color: #8485f6;
  > span {
    z-index: -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: -2.2rem;
    left: 50%;
    right: 50%;
    opacity: 0.2;
    color: #5252e0;
    font-weight: 800;
    font-size: 7.2rem;

    @media (max-width: 995px) {
      font-size: 6.2rem;
    }
  }

  > img {
    position: absolute;
    width: 2rem;
    bottom: 10rem;
    z-index: -10;
    animation: 1s ease 0s infinite normal none running bounce;
    width: 8rem;

    @media (max-width: 995px) {
      right: -4rem;
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: translateY(0px);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;
