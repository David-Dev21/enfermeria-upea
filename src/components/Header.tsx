interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => (
    <header className="max-w-xl bg-white bg-opacity-90 rounded-lg m-4 sm:mx-auto">
        <h3 className="bg-gradient-to-r from-blue-800 to-red-600 bg-clip-text text-transparent text-3xl text-center font-bold sm:text-4xl">
            {title}
        </h3>
        <p className="text-gray-900 text-center font-semibold">
            Carrera de Enfermería
        </p>
    </header>
);

export default Header;