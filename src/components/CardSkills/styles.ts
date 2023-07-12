import styled from "styled-components";
import star from "../../assets/images/bg-stars.svg"

export const Container = styled.section`
  padding-top: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${star});
`;

export const Title = styled.h2`
  position: relative;
  z-index: 1;
  padding-top: 2rem;
  font-size: 5.6rem;
  font-weight: 800;
  opacity: 1;
  margin: 2.2rem 0rem;
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

export const SkillsContainer = styled.div`
  display: grid;
  gap: 4rem;
  @media (min-width: 468px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 994px) {
    grid-template-columns: repeat(4, 1fr);
  }

`

export const SkillsContent = styled.div`
  width: 19.2rem;
  height: 16rem;
  background-color: rgba(24,24,27,.6);

  border-radius: 2.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.6rem;
  overflow: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h4 {
    z-index: 1;
    font-size: 1.6rem;
    color: #d6d6dc;
  }

  img {
    z-index: 1;
  }

  .border {
    &::before{
      content: '';
      position: absolute;
      width: 8rem;
      height: 27.2rem;
      left: 4.5rem;
      top: -40%;
      background: ${(props) => props.color};
      animation: barra 6s linear 0s infinite normal none running;
      border-radius: 1rem;
  
    @keyframes barra {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
    }

    ::after {
      content: '';
      position: absolute;
      inset: 0.5rem;
      background-color: hsl(224,50%,8%);
      border-radius: 2rem;
    }
  }

`