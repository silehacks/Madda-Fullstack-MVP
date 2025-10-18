import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        {children}
        <button
          onClick={onClose}
          className="px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;