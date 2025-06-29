import React, { useEffect, ReactNode } from 'react';
import { Heart } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
  icon?: ReactNode;
}

const Toast: React.FC<ToastProps> = ({ message, onClose, icon }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto close after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-md shadow-lg px-4 py-2 flex items-center space-x-2 z-50">
      {icon ? icon : <Heart className="text-red-500" size={20} />}
      <span className="text-gray-800 font-medium">{message}</span>
    </div>
  );
};

export default Toast;
