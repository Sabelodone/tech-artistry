import React from 'react';

const Modal = ({ show, onClose, content }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          X
        </button>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
