import styled, { css } from "styled-components";
interface ContainerProps {
  isvisible: boolean;
}
export const Container = styled.div<ContainerProps>`
  position: absolute;
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;

  background: rgb(2, 0, 36);
  background: linear-gradient(
    83deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(43, 121, 9, 0.5970763305322129) 36%,
    rgba(59, 0, 255, 1) 100%
  );

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transform: rotate(45deg);
    transition: 0.7s;
    z-index: 999;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 2rem;
    background: transparent;
    border: none 0px;
    transform: scale(0.7);
    transform: translateY(50px);
    transition: 0.7s;

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 0;
      margin: 0;
    }

    .Mulher {
      width: 25vw;
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: none;
      gap: 2rem;
      a {
        &:hover {
          color: #00ff7e;
          background-color: transparent;
        }
      }
    }
    .redesocial {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px;
      gap: 2rem;
      i {
        color: #00ff7e;
      }
    }
  }

  ${({ isvisible }) =>
    isvisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
      > svg {
        transform: rotate(0deg);
      }
      nav {
        transform: scale(1);
      }
    `}
`;
