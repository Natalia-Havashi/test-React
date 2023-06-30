const Modal = ({ children, closeModal }) => {
  return (
    <div style={{ display: 'block', backdropFilter: 'blur(5px)' }}>
      <div>
        <div>
          <div>
            <h5>Modal</h5>
            <button type="button" aria-label="Close" onClick={closeModal}>
              X
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
