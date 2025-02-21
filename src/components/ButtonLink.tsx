import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href: string;
}

const ButtonLink = ({ children, href }: ButtonProps) => {
    return (
        <a className="bg-gradient-to-r from-blue-900 to-red-700 shadow-lg hover:from-red-700 hover:to-blue-700 text-white text-center mx-auto font-bold py-3 px-4 rounded-2xl
        transform hover:scale-105 transition-transform duration-500" href={href} target="_blank">
            {children}
        </a>
    );
};

export default ButtonLink;