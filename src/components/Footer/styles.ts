import styled from "styled-components";
import star from "../../assets/images/bg-stars.svg";

export const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 8rem;
  padding: 2.4rem 0rem;
  background-image: url(${star});
  border-top: 1px solid rgb(177, 188, 220);

  > h4 {
    font-size: 2rem;
    color: #f9f9f9;
  }

  .linksSociais {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.8rem;

    > a {
      > img {
        max-width: 3rem;
        opacity: 0.54;

        &:hover {
          opacity: 1;
          filter: drop-shadow(1px 1px 10px #8485f6);
        }
      }
    }

    @media (max-width: 995px) {
      a {
        img {
          opacity: 1;
          filter: drop-shadow(1px 1px 10px #8485f6);

        }
      }
    }
  }

  @media (max-width: 995px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
