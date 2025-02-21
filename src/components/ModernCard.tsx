import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
};

export const Card = ({ children, className }: CardProps) => {
    return (
        <div className={`bg-white rounded-2xl w-full shadow-lg bg-opacity-90 transition-transform transform hover:scale-105 flex flex-col ${className}`}>
            {children}
        </div>
    );
};

export const CardTitle = ({ children, className }: CardProps) => {
    return <h2 className={`bg-gradient-to-r from-blue-800 to-red-600 bg-clip-text text-transparent text-center text-md font-semibold p-4 text-xl sm:text-4xl w-full ${className}`}>{children}</h2>;
};

export const CardContent = ({ children, className }: CardProps) => {
    return <div className={`p-4 text-black text-sm sm:text-md flex-grow w-full ${className}`}>{children}</div>;
};

