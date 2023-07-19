import styled from "styled-components";
import star from "../../assets/images/bg-stars.svg"

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoSkater = styled.div`
  position: absolute;
  top: 15rem;
  right: 15rem;
  transition: all 0.3ms linear;
  animation: animationLoad 3s, ImgAnimation 3s infinite linear;

  > img {
    width: 45rem;
    
    @media (max-width: 995px) {
      width: 37rem;
    }
  }

  @keyframes animationLoad {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes ImgAnimation {
    0% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(-20px);
    }
  }

  @media (max-width: 995px) {
    position: static;
    text-align: center;
  }
`;

export const BannerContainer = styled.section`
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${star});
  @media (max-width: 995px) {
    display: block;
  }
`;

export const SloganContainer = styled.div `
    max-width: 60rem;
    
    margin-top: 7rem;
    margin-right: 2rem;
    text-align:justify;
    /* background-color:#1f1f1f; */
    border-radius: 1rem;
    padding: 2rem;
    border: 2px solid  #1f1f1f;
  > h1  {
    color: #ffffff;
    font-size: 3rem;


    > span { 
      color:#9243fe;
    }
  }

  @media (max-width: 995px) {
    h1 {
      
      text-align: center;
      font-size: 2.1rem;;
    }

    margin-right: 0rem;
  }
`

