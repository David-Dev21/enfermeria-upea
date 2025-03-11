"use client"; // Asegúrate de incluir este comentario para usar hooks de React
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Publication } from "@/interfaces/interfaces";
import {
  faCalendar,
  faComment,
  faNewspaper,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "@/components/Header";
import SwiperComponent from "@/components/SwiperComponent";
import Loading from "@/components/Loading";
import Modal from "@/components/Modal";

const BASE_IMAGE_URL = "https://serviciopagina.upea.bo/Publicaciones/";

const PublicationsPage = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [selectedAttributes, setSelectedAttributes] =
    useState<Publication | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Publication[]>(
          "https://serviciopagina.upea.bo/api/publicacionesAll/32"
        );
        if (!Array.isArray(response.data)) {
          throw new Error("Los datos recibidos no son un array.");
        }
        setPublications(response.data);
      } catch (error) {
        setError(
          `Error: ${
            error instanceof Error
              ? error.message
              : "Ocurrió un error desconocido."
          }`
        );
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-center mt-20 text-red-500">{error}</p>;
  }

  return (
    <section className="max-w-screen-xl h-full mx-auto flex flex-col justify-center items-center px-4 md:px-6">
      <Header title="Publicaciones">
        <FontAwesomeIcon icon={faNewspaper} className="text-secondary" />
      </Header>
      <SwiperComponent
        items={publications}
        onImageClick={(item) => {
          setSelectedImage(`${BASE_IMAGE_URL}${item.publicaciones_imagen}`);
          setSelectedAttributes(item);
        }}
        renderItem={(item) => (
          <div>
            <div className="w-full mx-auto relative z-20 scale-75">
              <img
                src={`${BASE_IMAGE_URL}${item.publicaciones_imagen}`}
                className="object-cover shadow-md cursor-pointer rounded-xl h-100 w-full"
                alt={item.publicaciones_titulo || "Sin título"}
                onError={(e) => (e.currentTarget.src = "/placeholder.png")}
              />
              <div className="absolute top-5 left-5 bg-primary text-white font-bold text-sm p-2 rounded-2xl">
                {item.publicaciones_titulo || "Sin título"}
              </div>
              <div className="absolute bottom-5 right-5 bg-secondary text-white font-bold text-sm p-2 rounded-full">
                {item.publicaciones_fecha
                  ? new Date(item.publicaciones_fecha).toLocaleDateString(
                      "es-ES",
                      { day: "numeric", month: "long" }
                    )
                  : "Sin fecha"}
              </div>
            </div>
            <div className="absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75"></div>
          </div>
        )}
      />
      <Modal
        isOpen={!!selectedImage}
        onClose={() => {
          setSelectedImage(undefined);
          setSelectedAttributes(null);
        }}
        imageSrc={selectedImage}
        attributes={
          selectedAttributes && (
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
              {/* Título */}
              <h2 className="text-sm sm:text-2xl font-bold text-center text-white bg-primary p-2 rounded-lg mb-4">
                {selectedAttributes.publicaciones_titulo}{" "}
                <FontAwesomeIcon icon={faComment} />
              </h2>

              {/* Descripción */}
              <div
                className="text-tertiary text-xs sm:text-base leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: selectedAttributes.publicaciones_descripcion,
                }}
              />

              {/* Detalles adicionales con badges e íconos */}
              <div className="flex flex-wrap gap-2">
                {/* Fecha */}
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faCalendar} />
                  {selectedAttributes.publicaciones_fecha
                    ? new Date(
                        selectedAttributes.publicaciones_fecha
                      ).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "Sin fecha"}
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Fecha de publicación
                  </span>
                </div>

                {/* Tipo */}
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faTag} />
                  {selectedAttributes.publicaciones_tipo}
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Tipo de publicación
                  </span>
                </div>

                {/* Autor */}
                <div className="group inline-flex items-center gap-1 px-3 py-1 bg-tertiary text-white text-sm font-medium rounded-full relative">
                  <FontAwesomeIcon icon={faUser} />
                  {selectedAttributes.publicaciones_autor}
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Autor de la publicación
                  </span>
                </div>
              </div>
            </div>
          )
        }
      >
        <></>
      </Modal>
    </section>
  );
};

export default PublicationsPage;
