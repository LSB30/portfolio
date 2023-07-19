import styled from "styled-components";
import star from "../../assets/images/bg-stars.svg";
export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 12rem;
  background-image: url(${star});
`;

export const ContentContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .contact-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 48rem;

    > h1 {
      font-size: 4.2rem;
      color: #8485f6;
    }

    > p {
      font-size: 1.6rem;
      color: rgb(177, 188, 220);
    }

    @media (max-width: 995px) {
      padding: 2rem;

      h1 {
        font-size: 2.2rem;
      }
    }
  }

  > img {
    max-width: 40rem;
    transition: all 0.3ms linear;
    animation: animationLoad 3s, ImgAnimation 3s infinite linear;
    filter: drop-shadow(1px 1px 10px #8485f6);
  }
  @media (max-width: 995px) {
    flex-direction: column;
    > img {
      max-width: 20rem;
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
`;

export const ButtonContact = styled.button`
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
  margin-top: 2rem;
  &:hover {
    color: black;
    background-color: rgb(82, 82, 224);
    box-shadow: 0 0 1em 0.25em rgb(82, 82, 224), 0 0 4em 2em rgb(82, 82, 224),
      inset 0 0 0.75em 0.25em rgb(239, 240, 247);
  }

  > a {
    text-decoration: none;
    color: rgb(239, 240, 247);
  }
`;
