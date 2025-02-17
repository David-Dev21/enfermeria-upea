import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
};

const Card = ({ children }: CardProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg w-full h-full bg-opacity-90 transition-transform transform hover:scale-105 flex flex-col">
            {children}
        </div>
    );
};

const CardTitle = ({ children }: CardProps) => {
    return <h2 className="bg-gradient-to-r from-blue-800 to-red-600 bg-clip-text text-transparent text-center text-md font-semibold p-4 text-xl sm:text-4xl w-full">{children}</h2>;
};

const CardContent = ({ children }: CardProps) => {
    return <div className="p-4 text-black text-sm sm:text-md flex-grow w-full">{children}</div>;
};

export { Card, CardTitle, CardContent };
