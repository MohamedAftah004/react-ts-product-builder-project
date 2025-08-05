import {ReactNode} from "react";
import {motion} from "framer-motion";

interface ConfirmModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  message?: ReactNode;
}

const ConfirmModal = ({
  isOpen,
  onCancel,
  onConfirm,
  message,
}: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <motion.div
        initial={{opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md transition-all"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Confirm Deletion
        </h2>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {message ||
            "Are you sure you want to remove this product? This action cannot be undone."}
        </p>

        <div className="flex justify-start space-x-3">
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium"
            onClick={onConfirm}
          >
            Yes, delete
          </button>
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-sm font-medium"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmModal;
