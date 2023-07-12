import styled from "styled-components";
import star from "../../assets/images/bg-stars.svg";
export const Container = styled.section`
  padding-top: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${star});
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-bottom: 5rem;

  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100rem;
  }
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  /* width: 45rem; */
  align-items: center;
  transition: transform 0.3s;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 1;
    object-fit: cover;

    &:hover {
      opacity: 0.5;
    }
  }

  .title {
    position: absolute;
    padding: 0 1rem 2.2rem 1rem;
    bottom: 23px;
    height: 85%;
    width: 78%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background: linear-gradient(rgb(0, 0, 0, 0) -60%, rgb(8, 2, 5, 15));
    opacity: 0;
    transition: 0.4s ease-in-out;

    &:hover {
      opacity: 1;
      height: 100%;
    }

    h2 {
      font-weight: 900;
      font-size: 3rem;
      text-align: center;
      color: #8485f6;
      filter: drop-shadow(10px 10px 10px black);
    }

    span {
      font-size: 1.6rem;
      font-weight: 700;
      
      color: #fff;
      margin-bottom: 1rem;
    }

    .tags {
      display: flex;
      flex-direction: row;
      gap: 0.9rem;
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  .telemovel {
    width: 8rem;
    padding-top: 5rem;
    position: absolute;
    right: 2rem;
    top: 0.5rem;
  }

  @media (min-width: 1300px) {
    max-width: 45rem;
  }
`;

export const ContentProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  > img {
    max-width: 45.4rem;
    position: relative;
    height: 25rem;
    width: 100%;
  }
`;

export const TabletContainer = styled.div`
  display: none;
  height: 100%;
  transition: all 0.4s ease-in-out 0s;
  > img {
    position: relative;
    left: 28.5rem;
    top: 2rem;
    width: 15rem;
  }

  @media (max-width: 995px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  > img {
    position: absolute;
    left: 25rem;
    top: 4rem;
    width: 8rem;
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

export const ButtonProject = styled.button`
  margin-top: 2rem;
  border: none;
  background: transparent;
  color:  #fff;

  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
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
