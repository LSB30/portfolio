import styled from "styled-components";

export const Scroll = styled.div`
  button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.8rem;
    background: #8485f6;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #fff;
    z-index: 9;

    &:hover {
      background: #1e1e3b;
    }
  }
`;
