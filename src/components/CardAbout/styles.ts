import styled from "styled-components";
import star from "../../assets/images/bg-stars.svg";
export const ContainerAbout = styled.section`
  padding-top: 3.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 19rem;
  position: relative;
  background-image: url(${star});
  @media (min-width: 995px) {
    margin-top: 15rem;
  }
`;

export const ContentAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #1c1c22; */
  border-radius: 1rem;
  padding: 2.4rem;
  margin-top: 8rem;
  margin-bottom: 4rem;
  border: 3px solid #8485f6;

  .aboutImg {
    display: flex;
    justify-self: center;
    align-self: center;
    margin-bottom: 2rem;

    img {
      width: 18rem;
      border-radius: 1rem;
      filter: drop-shadow(1px 1px 10px #8485f6);
      border: 3px solid #8485f6;
    }

    @media (min-width: 995px) {
      img {
        width: 40rem;
      }
    }
  }

  .aboutContent {
    padding: 0 2rem;
    text-align: start;
    max-width: 45rem;

    h2 {
      color: #8485f6;
      font-size: 2.3rem;
    }

    p {
      color: rgb(214, 214, 220);
      font-size: 1.4rem;
    }

    @media (min-width: 994px) {
      h2 {
        font-size: 3rem;
      }
      p {
        font-size: 1.6rem;
      }
    }
  }

  @media (min-width: 994px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);

    .aboutContent {
      width: 70rem;
      margin-bottom: 1rem;
      font-weight: 500;
      align-items: center;
    }
  }

  .aboutDescription {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  .aboutBtns {
    display: flex;
    padding-top: 2.2rem;
    justify-content: start;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 468px) {
      flex-direction: column;
    }
  }
`;

export const Button = styled.div`
  background: rgb(82, 82, 224);
  color: rgb(239, 240, 247);
  cursor: pointer;
  font-size: 1.92rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 1.6rem 1.9rem;
  border: none;
  border-radius: 0.8rem;
  gap: 0.4rem;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    background: rgb(82, 82, 280);
  }
`;

export const ButtonAlternatives = styled.button`
  border: none;
  background: transparent;
  color: #8485f6;
  cursor: pointer;
  font-size: 1.92rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: Arial, Helvetica, sans-serif;

  border-bottom-width: 0;
  background-size: 0 3px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#8485f6, #8485f6);

  &:hover {
    color: #8485f6;
    background-size: 100% 3px;
    background-position: 0 100%;
  }
`;
