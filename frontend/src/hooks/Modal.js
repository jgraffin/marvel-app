import React, { createContext, useCallback, useState, useContext } from "react";
import Modal from "../components/Modal";

const ModalContext = createContext(null);
const ModalStateContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [modalStatus, setModalStatus] = useState({ isOpen: false });
  const [modalContent, setModalContent] = useState();
  const [hasCustomClose, setHasCustomClose] = useState(false);
  const [modalCloseButtonFunction, setModalCloseButtonFunction] =
    useState(null);

  const close = useCallback(async () => {
    setModalStatus({ isOpen: false });
    setHasCustomClose(false);
    setModalContent({});
  }, []);

  const open = useCallback(async ({ content, handleClose }) => {
    if (handleClose) {
      setModalCloseButtonFunction(() => handleClose);
      setHasCustomClose(true);
    }
    setModalStatus({ isOpen: true });
    setModalContent({ content });
  }, []);

  return (
    <ModalContext.Provider value={{ open, close }}>
      <ModalStateContext.Provider value={modalStatus}>
        {modalStatus.isOpen && (
          <Modal
            handleClose={hasCustomClose ? modalCloseButtonFunction : close}
          >
            {modalContent?.content}
          </Modal>
        )}
        {children}
      </ModalStateContext.Provider>
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within an ModalProvider");
  }
  return context;
};

const useModalState = () => {
  const context = useContext(ModalStateContext);
  if (!context) {
    throw new Error("useModalState must be used within an ModalProvider");
  }
  return context;
};

export { ModalProvider, useModal, useModalState };
