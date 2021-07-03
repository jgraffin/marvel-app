import { ModalProvider } from "./Modal";

export const AppProvider = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};
