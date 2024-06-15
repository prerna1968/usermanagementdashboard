import React from 'react';

interface ModalProps {
  title: string;
  onClose: () => void;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({ title, onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h2>{title}</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="modal-body">
        {children}
      </div>
    </div>
  );
};

export default Modal;
