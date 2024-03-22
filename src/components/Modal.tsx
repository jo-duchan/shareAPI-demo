import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import Colors from "@styles/color-system";
import Fonts from "@styles/typography-system";
import media from "@styles/media";
import Close from "@assets/close-icon.svg";

export interface ModalProps {
  icon: string;
  title: string;
  text: string | ReactNode;
  onClose: () => void;
}

function Modal(props: ModalProps) {
  return (
    <Container>
      <Content>
        <img src={props.icon} alt="icon" className="icon" />
        <div className="text-box">
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>
        <button className="close" onClick={props.onClose}></button>
      </Content>
      <Dim onClick={props.onClose} />
    </Container>
  );
}

export default Modal;

const FadeUp = keyframes`
  from {
    transform: translate3d(0, 50%, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 900;
  width: 100dvw;
  height: 100dvh;
  pointer-events: auto;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 400px;
  height: 120px;
  background-color: ${Colors.Basic[100]};
  z-index: 500;
  border-radius: 12px;
  padding: 30px 20px;
  box-sizing: border-box;
  animation: ${FadeUp} 320ms ease-in-out;

  & .icon {
    width: 60px;
    min-width: 60px;
    height: 60px;
    border-radius: 8px;
  }

  & .text-box {
    h5 {
      ${Fonts.Body.Bold.M};
      color: ${Colors.Basic[600]};
      margin-bottom: 4px;
    }

    p {
      ${Fonts.Body.Reqular.S};
      color: ${Colors.Basic[400]};
    }

    a {
      color: ${Colors.Secondary[300]};
    }
  }

  & .close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-image: url(${Close});
    background-repeat: no-repeat;
    background-position: 50%;
    background-color: ${Colors.Basic[200]};
    border: initial;
    cursor: pointer;
    transition: opacity 200ms ease-in-out;

    :hover {
      opacity: 0.65;
    }
  }

  ${media.small`
    width: calc(100% - 48px);
  `};
`;
