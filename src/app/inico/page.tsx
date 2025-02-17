'use client';

import { useEffect, useState } from 'react';
import PublicationsPage from "./publicaciones/page";

const images = [
    "/images/enfermeria-1.jpg",
    "/images/enfermeria-2.jpg",
    "/images/enfermeria-3.jpg"
];

const Welcome = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="max-w-screen-xl mx-auto my-12 px-4 md:px-10">
                <div className="flex items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 max-w-xl px-4 mt-6 bg-white rounded-xl bg-opacity-90 mx-4 sm:px-0 md:mt-0 lg:max-w-2xl shadow-lg">
                        <h3 className="bg-gradient-to-r from-blue-800 to-red-600 bg-clip-text text-transparent text-center text-4xl font-semibold p-4 sm:text-6xl">
                            Bienvenido a la <br /> Carrera de Enfermería
                        </h3>
                        <p className="text-gray-600 font-bold text-xl p-4 sm:text-2xl">
                            Carrera Acreditada
                        </p>
                    </div>
                    <div className="flex-1 hidden md:block lg:w-1/2 p-2">
                        <img className="bg-white rounded-lg p-2 w-full h-96 object-cover shadow-md" src={images[currentImage]} alt="Enfermería" />
                    </div>
                </div>
            </section>
            <PublicationsPage />
        </>
    );
};

export default Welcome;
