import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Definimos los tipos para los props del modal
interface ModalProps {
  isOpen: boolean; // Controla si el modal está abierto o cerrado
  onClose: () => void; // Función para cerrar el modal
  children: React.ReactNode; // Contenido personalizado del modal
  imageSrc?: string; // URL de la imagen opcional
  attributes?: React.ReactNode; // Atributos adicionales para mostrar en el modal
}

function Modal({
  isOpen,
  onClose,
  children,
  imageSrc,
  attributes,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fondo oscuro del modal */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose} // Cerrar al hacer clic fuera del modal
          />

          {/* Contenido del modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full max-w-4xl h-3/4 flex items-center justify-center">
              <div className="absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-100"></div>
              <div className="bg-white rounded-lg p-2 w-full h-full relative flex z-20">
                {/* Botón para cerrar el modal */}
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={onClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Contenido dividido */}
                {imageSrc && (
                  <div className="w-1/2 h-full rounded-lg">
                    <img
                      src={imageSrc}
                      alt="Modal Content"
                      className="w-auto h-full object-contain rounded-2xl mx-auto"
                    />
                  </div>
                )}
                <div className="w-auto h-auto p-4 rounded-lg flex items-center">
                  {attributes}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Modal;
