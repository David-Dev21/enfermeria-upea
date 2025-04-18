import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperComponentProps } from "@/types/type";

const SLIDE_CLASSES = {
  container: "relative m-4 group",
  image: "object-cover shadow-md cursor-pointer rounded-t-2xl w-full",
  overlay:
    "absolute -inset-2 rounded-2xl blur-sm bg-gradient-to-br from-primary to-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  content: "p-4 bg-white rounded-b-2xl",
  title: "text-lg text-gray-800 font-bold",
};

/**
 * Componente que renderiza un carrusel de elementos utilizando Swiper.
 * @param {SwiperComponentProps<T>} props - Propiedades del componente.
 * @returns {JSX.Element} Elemento JSX que contiene el carrusel.
 */
const SwiperComponent = <T,>({
  items,
  renderItem,
  onImageClick,
}: SwiperComponentProps<T>) => {
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="text-center mt-10">No hay elementos disponibles.</div>
    );
  }

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={12}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="w-full h-full relative"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className={SLIDE_CLASSES.container}>
            {onImageClick ? (
              <div onClick={() => onImageClick(item)}>{renderItem(item)}</div>
            ) : (
              renderItem(item)
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
