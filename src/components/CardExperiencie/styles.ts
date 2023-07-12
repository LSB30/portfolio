import styled from "styled-components";
import star from "../../assets/images/bg-stars.svg"
export const Container = styled.section`
  padding-top: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${star});
  .imgWork {
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
  }

  

  @media (max-width: 995px) {
    .imgWork {
      width: 4.1rem;
      height: 4.1rem;
    }
  }
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
      font-size: 5.2rem;
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
`;

export const WorkContainer = styled.div`
  display: flex;
  background-color: #070d1e ;
  
`;

export const WorkContent = styled.div`
  h1 {
    font-size: 2.28rem;
    font-weight: bold;
    color: #8485f6;
  }

  h2 {
    font-size: 1.92rem;
    font-weight: semi-bold;
    color: #5252e0;
  }

  span {
    font-size: 1.44rem;
    font-weight: 500;
    color: #d6d6dc;
  }

  p {
    margin-top: 2.3rem;
    font-size: 1.6rem;
  }

  ul {
    margin: 3rem 0;

    h3 {
      margin-bottom: 0.5rem;
      font-size: 2.08rem;
      color: #8485f6;

    }

    img {
      width: 4rem;
      margin-left: 0.8rem;
    }
  }
`;
