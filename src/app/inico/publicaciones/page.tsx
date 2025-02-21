// src/app/page.js
'use client'; // Asegúrate de incluir este comentario para usar hooks de React

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Header from '@/components/Header';
import { Publication } from '@/interfaces/interfaces';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

const PublicationsPage = () => {
    const [publications, setPublications] = useState<Publication[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Publication[]>('https://serviciopagina.upea.bo/api/publicacionesAll/32');

                if (!Array.isArray(response.data)) {
                    throw new Error('Los datos recibidos no son un array.');
                }

                setPublications(response.data);
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

    return (
        <>
            <section className="max-w-screen-lg mx-auto mt-12 md:mt-28 px-4 md:px-6">
                <Header title='Publicaciones'>
                    <FontAwesomeIcon icon={faNewspaper} className="text-red-600" />
                </Header>
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={12}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
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
                    {publications.map((item) => (
                        <SwiperSlide key={item.publicaciones_id}>
                            <div className="w-full md:w-3/4 mx-auto">
                                <img
                                    src={`https://serviciopagina.upea.bo/Publicaciones/${item.publicaciones_imagen}`}
                                    className="object-cover shadow-md cursor-pointer rounded-t-2xl h-96 w-full"
                                    alt={item.publicaciones_titulo}
                                    onClick={() => setSelectedImage(`https://serviciopagina.upea.bo/Publicaciones/${item.publicaciones_imagen}`)}
                                />
                                <div className="p-4">
                                    <h2 className='text-xl text-gray-800 font-bold'>
                                        {item.publicaciones_titulo}
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} className="max-w-full max-h-full" alt="Selected" />
                </div>
            )}
        </>
    );
};

export default PublicationsPage;
