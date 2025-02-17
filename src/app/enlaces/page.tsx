'use client';
import Header from "@/components/Header";
import { Card, CardContent, CardTitle } from "@/components/ModernCard";

const LinksPage = () => {
    return (
        <>
            <Header title='Enlaces'></Header>
            <section className="max-w-screen-xl mx-auto px-4 md:px-10 py-8">
                <div className="flex flex-col lg:flex-row items-center gap-x-12 gap-y-8 sm:px-4 md:px-0">
                    <div className="flex-1 max-w-xl px-4">
                        <Card>
                            <CardTitle>Mae</CardTitle>
                            <CardContent>
                                <p className="text-lg">M@e es el sistema de matriculación académica de la UPEA.</p>
                            </CardContent>
                            <a href="https://matriculacion.upea.bo/" className="bg-tertiary text-white py-2 px-4 rounded hover:bg-tertiary w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Ir a M@e</a>
                        </Card>
                    </div>
                    <div className="flex-1 max-w-xl px-4">
                        <Card>
                            <CardTitle>Campus Virtual</CardTitle>
                            <CardContent>
                                <p className="text-lg">El Campus Virtual es la plataforma de aprendizaje en línea de la UPEA.</p>
                            </CardContent>
                            <a href="https://virtualadministracion.upea.bo/" className="bg-tertiary text-white py-2 px-4 rounded hover:bg-tertiary w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Ir al Campus Virtual</a>
                        </Card>
                    </div>
                    <div className="flex-1 max-w-xl px-4">
                        <Card>
                            <CardTitle>Inscripciones</CardTitle>
                            <CardContent>
                                <p className="text-lg">Sistema de inscripciones para estudiantes antiguos ENFERMERIA</p>
                            </CardContent>
                            <a href="https://inscripciones.upea.bo/" className="bg-tertiary text-white py-2 px-4 rounded hover:bg-tertiary w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Ir al Inscripciones</a>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LinksPage;