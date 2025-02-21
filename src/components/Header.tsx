import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode;
    title: string;
}

const Header = ({ title, children }: HeaderProps) => {
    return (
        <div className="max-w-xl p-4 sm:mx-auto">
            <motion.h3
                className="bg-gradient-to-r from-blue-800 to-red-600 bg-clip-text text-transparent text-3xl text-center font-bold sm:text-4xl"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}>
                {children} {title}
            </motion.h3>
            <motion.p
                className="text-gray-900 text-center font-semibold"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Carrera de Enfermería
            </motion.p>
        </div>
    );
};

export default Header;