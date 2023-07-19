import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15rem;
  animation: logoAnimation 1s ease-in-out;




  
  @media (max-width: 995px) {
    padding-left: 0rem;
    position: absolute;
    top: 1rem;
  }

  
`;

export const ImgContainer = styled.div`
  
  img {
    width: 8rem;
  }
  cursor: pointer;

  @media (max-width: 995px) {
    img {
      width: 5rem;
    }
  }


  @keyframes logoAnimation {
      0% {
        transform: translateX(-300px)
      }

      
      100% {
        transform: translateX(0)

      }
  }
`;
