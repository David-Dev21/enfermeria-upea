'use client';
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ModernCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Announcement } from "@/interfaces/interfaces";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
            <Header title='CONVOCATORIAS'></Header>
            <section className="max-w-screen-xl mx-auto px-4 md:px-10">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
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
                >
                    {calls.map((item) => (
                        <SwiperSlide key={item.idconvocatorias}>
                            <div className="mx-10 pb-10">
                                <Card>
                                    <img
                                        src={`https://serviciopagina.upea.bo//Convocatorias/${item.con_foto_portada}`}
                                        className="w-full h-60 sm:h-52 md:h-56 object-contain shadow-md cursor-pointer"
                                        alt={item.con_titulo}
                                        onClick={() => setSelectedImage(`https://serviciopagina.upea.bo//Convocatorias/${item.con_foto_portada}`)}
                                    />
                                    <CardContent>
                                        <div dangerouslySetInnerHTML={{ __html: item.con_descripcion }} />
                                        <p className="text-center text-gray-500 mt-2">Fecha Inicio: {new Date(item.con_fecha_inicio).toLocaleDateString()}</p>
                                        <p className="text-center text-gray-500">Fecha Fin: {new Date(item.con_fecha_fin).toLocaleDateString()}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <Header title='AVISOS'></Header>
            <section className="max-w-screen-xl mx-auto px-4 md:px-10">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
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
                >
                    {notices.map((item) => (
                        <SwiperSlide key={item.idconvocatorias}>
                            <div className="mx-10 pb-10">
                                <Card>
                                    <img
                                        src={`https://serviciopagina.upea.bo//Convocatorias/${item.con_foto_portada}`}
                                        className="w-full h-60 sm:h-52 md:h-56 object-contain shadow-md cursor-pointer"
                                        alt={item.con_titulo}
                                        onClick={() => setSelectedImage(`https://serviciopagina.upea.bo//Convocatorias/${item.con_foto_portada}`)}
                                    />
                                    <CardContent>
                                        <div dangerouslySetInnerHTML={{ __html: item.con_descripcion }} />
                                        <p className="text-center text-gray-500 mt-2">Fecha Inicio: {new Date(item.con_fecha_inicio).toLocaleDateString()}</p>
                                        <p className="text-center text-gray-500">Fecha Fin: {new Date(item.con_fecha_fin).toLocaleDateString()}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <Header title='COMUNICADOS'></Header>
            <section className="max-w-screen-xl mx-auto px-4 md:px-10">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
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
                >
                    {communications.map((item) => (
                        <SwiperSlide key={item.idconvocatorias}>
                            <div className="mx-10 pb-10">
                                <Card>
                                    <img
                                        src={`https://serviciopagina.upea.bo//Convocatorias/${item.con_foto_portada}`}
                                        className="w-full h-60 sm:h-52 md:h-56 object-contain shadow-md cursor-pointer"
                                        alt={item.con_titulo}
                                        onClick={() => setSelectedImage(`https://serviciopagina.upea.bo//Convocatorias/${item.con_foto_portada}`)}
                                    />
                                    <CardContent>
                                        <div dangerouslySetInnerHTML={{ __html: item.con_descripcion }} />
                                        <p className="text-center text-gray-500 mt-2">Fecha Inicio: {new Date(item.con_fecha_inicio).toLocaleDateString()}</p>
                                        <p className="text-center text-gray-500">Fecha Fin: {new Date(item.con_fecha_fin).toLocaleDateString()}</p>
                                    </CardContent>
                                </Card>
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