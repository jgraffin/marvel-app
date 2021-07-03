const Modal = ({
  handleClose = () => null,
  children,
  className,
  borderRadius,
  ...rest
}) => {
  return (
    <div className={`modal modal-overlay ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Modal;
