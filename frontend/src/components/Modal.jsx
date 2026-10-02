function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="relative w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Modal Content */}
        {children}

      </div>

    </div>
  );
}

export default Modal;