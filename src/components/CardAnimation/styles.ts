import styled from "styled-components";
export const CardContainer = styled.section`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
  top: -2rem;
  
  @keyframes skate-animation {
    0% {
      transform: translate(250%);
    }

    100% {
      transform: translate(-250%);
    }
  }

  
  

  @media (max-width: 995px) {
    @keyframes skate-animation {
      0% {
        transform: translate(100%);
      }

      100% {
        transform: translate(-100%);
      }
    }
  }

  img {
    width: 12rem;
    /* filter: drop-shadow(4px 4px 8px #8485f6); */
    filter: saturate(150%);
  }
`;

export const CardContent = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  animation: skate-animation 5s linear infinite alternate-reverse;

  @media (max-width: 995px) {
    animation: skate-animation 2s linear infinite alternate-reverse;
  }
`;
