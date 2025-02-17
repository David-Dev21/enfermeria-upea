'use client'

import Header from "@/components/Header";
import { Card, CardContent, CardTitle } from "@/components/ModernCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Courses } from "@/interfaces/interfaces";

const LearningPage = () => {
    const [announcement, setAnnouncement] = useState<Courses[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Courses[]>('https://serviciopagina.upea.bo/api/cursosAll/9');

                if (!Array.isArray(response.data)) {
                    throw new Error('Los datos recibidos no son un array.');
                }

                setAnnouncement(response.data);
            } catch (error) {
                setError(`Error: ${error instanceof Error ? error.message : 'Ocurrió un error desconocido.'}`);
                console.error('Error al obtener los datos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Cargando publicaciones...</p>;
    }

    if (error) {
        return <p className="text-center mt-10 text-red-500">{error}</p>;
    }

    const course = announcement.filter(item => item.det_titulo.includes('CURSO'));
    const seminar = announcement.filter(item => item.det_titulo.includes('SEMINARIO'));

    return (
        <>
            <Header title="CURSOS" />
            <section className="max-w-screen-xl mx-auto px-4 md:px-10 my-12">
                <ul className="grid gap-8 mx-5 sm:grid-cols-2 md:grid-cols-3">
                    {course.map((item) => (
                        <li key={item.iddetalle_cursos_academicos} className="flex flex-col items-center">
                            <Card>
                                <img
                                    src={`https://serviciopagina.upea.bo//Cursos/${item.det_img_portada}`}
                                    className="w-full h-60 sm:h-52 md:h-56 object-contain shadow-md"
                                    alt={item.det_titulo}
                                />
                                <CardContent>
                                    <div dangerouslySetInnerHTML={{ __html: item.det_descripcion }} />
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </section>

            <Header title="SEMINARIOS" />
            <section className="max-w-screen-xl mx-auto px-4 md:px-10 my-12">
                <ul className="grid gap-8 mx-5 sm:grid-cols-2 md:grid-cols-3">
                    {seminar.map((item) => (
                        <li key={item.iddetalle_cursos_academicos} className="flex flex-col items-center">
                            <Card>
                                <img
                                    src={`https://serviciopagina.upea.bo//Cursos/${item.det_img_portada}`}
                                    className="w-full h-60 sm:h-52 md:h-56 object-contain shadow-md"
                                    alt={item.det_titulo}
                                />
                                <CardContent>
                                    <div dangerouslySetInnerHTML={{ __html: item.det_descripcion }} />
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default LearningPage;