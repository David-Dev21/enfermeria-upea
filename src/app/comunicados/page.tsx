'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Header from '@/components/Header';
import { Announcement } from '@/interfaces/interfaces';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBullhorn, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = true;

const AnnouncementsPage = () => {
    const [announcement, setAnnouncement] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Announcement[]>('https://serviciopagina.upea.bo/api/convocatoriasAll/9');

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

    const calls = announcement.filter(item => item.con_titulo === 'CONVOCATORIA');
    const notices = announcement.filter(item => item.con_titulo === 'AVISO');
    const communications = announcement.filter(item => item.con_titulo === 'COMUNICADO');

    return (
        <>
            <section className="max-w-screen-lg mx-auto  mt-12 md:mt-20 px-4 md:px-6">
                <Header title='CONVOCATORIAS'>
                    <FontAwesomeIcon icon={faCalendarDays} className='text-red-600' />
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
                    {calls.map((item) => (
                        <SwiperSlide key={item.idconvocatorias}>
                            <div className="w-full mx-auto px-10 md:w-3/4 md:px-0">
                                <img
                                    src={`https://serviciopagina.upea.bo//Convocatorias/${item.con_foto_portada}`}
                                    className="object-cover shadow-md cursor-pointer rounded-t-2xl h-80 w-full"
                                    alt={item.con_titulo}
                                    onClick={() => setSelectedImage(`https://serviciopagina.upea.bo//Convocatorias/${item.con_foto_portada}`)}
                                />
                                <div className="p-4">
                                    <p className="text-center text-gray-500 mt-2">Fecha Inicio: {new Date(item.con_fecha_inicio).toLocaleDateString()}</p>
                                    <p className="text-center text-gray-500">Fecha Fin: {new Date(item.con_fecha_fin).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="max-w-screen-lg mx-auto mt-12 md:mt-20 px-4 md:px-6">
                <Header title='AVISOS'>
                    <FontAwesomeIcon icon={faBell} className="text-red-600" />
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
                    {notices.map((item) => (
                        <SwiperSlide key={item.idconvocatorias}>
                            <div className="w-full mx-auto px-10 md:w-3/4 md:px-0">
                                <img
                                    src={`https://serviciopagina.upea.bo//Convocatorias/${item.con_foto_portada}`}
                                    className="object-cover shadow-md cursor-pointer rounded-t-2xl h-80 w-full"
                                    alt={item.con_titulo}
                                    onClick={() => setSelectedImage(`https://serviciopagina.upea.bo//Convocatorias/${item.con_foto_portada}`)}
                                />
                                <div className="p-4">
                                    <div className="text-center text-gray-500 mt-2" dangerouslySetInnerHTML={{ __html: item.con_descripcion }} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="max-w-screen-lg mx-auto mt-12 md:mt-20 px-4 md:px-6">
                <Header title='COMUNICADOS'>
                    <FontAwesomeIcon icon={faBullhorn} className='text-red-600' />
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
                    {communications.map((item) => (
                        <SwiperSlide key={item.idconvocatorias}>
                            <div className="w-full md:w-3/4 mx-auto">
                                <img
                                    src={`https://serviciopagina.upea.bo//Convocatorias/${item.con_foto_portada}`}
                                    className="object-cover shadow-md cursor-pointer rounded-t-2xl h-80 w-full"
                                    alt={item.con_titulo}
                                    onClick={() => setSelectedImage(`https://serviciopagina.upea.bo//Convocatorias/${item.con_foto_portada}`)}
                                />
                                <div className="p-4">
                                    <div className="text-center text-gray-500 mt-2" dangerouslySetInnerHTML={{ __html: item.con_descripcion }} />
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

export default AnnouncementsPage;