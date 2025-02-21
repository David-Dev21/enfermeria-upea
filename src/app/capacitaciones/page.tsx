'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from '@/components/Header';
import { Courses } from '@/interfaces/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';

const LearningPage = () => {
    const [courses, setCourses] = useState<Courses[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Courses[]>('https://serviciopagina.upea.bo/api/cursosAll/9');
                if (!Array.isArray(response.data)) {
                    throw new Error('Los datos recibidos no son un array.');
                }
                setCourses(response.data);
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

    const course = courses.filter(item => item.det_titulo.includes('CURSO'));
    const seminar = courses.filter(item => item.det_titulo.includes('SEMINARIO'));

    return (
        <>
            {/* Sección de Cursos */}
            <section className="max-w-screen-lg mx-auto mt-12 md:mt-24 px-4 md:px-6">
                <Header title='CURSOS'>
                    <FontAwesomeIcon icon={faChalkboardTeacher} className="text-red-600" />
                </Header>
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={12}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="w-full relative"
                >
                    {course.map((item) => (
                        <SwiperSlide key={item.iddetalle_cursos_academicos}>
                            <div className="rounded-lg shadow-sm max-w-[280px] mx-auto">
                                <div className="aspect-w-4 aspect-h-3">
                                    <img
                                        src={`https://serviciopagina.upea.bo//Cursos/${item.det_img_portada}`}
                                        className="object-cover w-full h-full cursor-pointer"
                                        alt={item.det_titulo}
                                        onClick={() => setSelectedImage(`https://serviciopagina.upea.bo//Cursos/${item.det_img_portada}`)}
                                    />
                                </div>
                                <div className="p-2 bg-white">
                                    <h3 className="text-black text-sm font-semibold line-clamp-2">{item.det_titulo}</h3>
                                    <p className="text-gray-600 text-xs">Carga Horaria: {item.det_carga_horaria}</p>
                                    <p className="text-gray-600 text-xs">Modalidad: {item.det_modalidad}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Sección de Seminarios */}
            <section className="max-w-screen-lg mx-auto mt-12 md:mt-20 px-4 md:px-6">
                <Header title='SEMINARIOS'>
                    <FontAwesomeIcon icon={faPersonChalkboard} className='text-red-600' />
                </Header>
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={12}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="w-full relative"
                >
                    {seminar.map((item) => (
                        <SwiperSlide key={item.iddetalle_cursos_academicos}>
                            <div className="rounded-lg shadow-sm max-w-[280px] mx-auto">
                                <div className="aspect-w-4 aspect-h-3">
                                    <img
                                        src={`https://serviciopagina.upea.bo//Cursos/${item.det_img_portada}`}
                                        className="object-cover w-full h-full cursor-pointer"
                                        alt={item.det_titulo}
                                        onClick={() => setSelectedImage(`https://serviciopagina.upea.bo//Cursos/${item.det_img_portada}`)}
                                    />
                                </div>
                                <div className="p-2 bg-white">
                                    <h3 className="text-black text-sm font-semibold line-clamp-2">{item.det_titulo}</h3>
                                    <p className="text-gray-600 text-xs">Carga Horaria: {item.det_carga_horaria}</p>
                                    <p className="text-gray-600 text-xs">Modalidad: {item.det_modalidad}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Modal de Imagen Ampliada */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} className="max-w-full max-h-full" alt="Selected" />
                </div>
            )}
        </>
    );
};

export default LearningPage;