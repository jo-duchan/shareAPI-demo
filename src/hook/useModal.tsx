import { useState } from "react";
import ReactDOM from "react-dom";
import Modal, { type ModalProps } from "@components/Modal";

type UseModal = [
  React.ReactNode | undefined,
  React.Dispatch<React.SetStateAction<boolean>>
];

function useModal({ ...props }: ModalProps): UseModal {
  const portalElement = document.getElementById("overlays") as HTMLElement;
  const [show, setShow] = useState<boolean>(false);
  const element =
    show && ReactDOM.createPortal(<Modal {...props} />, portalElement);

  return [element, setShow];
}

export default useModal;
