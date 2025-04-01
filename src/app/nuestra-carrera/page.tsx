"use client";
import {
  faAddressCard,
  faBriefcase,
  faBuilding,
  faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipCard from "@/components/FlipCard";
import MissionVisionPage from "./mision-vision/page";
import AuthoritiesPage from "./autoridades/page";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Componente para mostrar información sobre la carrera de enfermería.
 * Incluye secciones sobre el perfil profesional, campo de trabajo, misión y visión, y autoridades.
 */
const AboutPage = () => {
  return (
    <>
      <section className="max-w-screen-xl h-full flex flex-col justify-center py-24 mx-auto px-4 md:px-6">
        <Header title="Sobre Nosotros">
          <FontAwesomeIcon icon={faBuilding} className="text-secondary" />
        </Header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <FlipCard
            frontTitle="PERFIL PROFESIONAL"
            frontContent={
              <div className="relative w-full h-full">
                <Image
                  src="/images/estudiantes-2.jpg"
                  alt="Perfil Profesional"
                  className="object-cover rounded-3xl cursor-pointer"
                  fill
                  priority
                />
              </div>
            }
            backTitle="PERFIL PROFESIONAL"
            icon={faAddressCard}
            frontBg="bg-white"
            backBg="bg-primary"
            frontTextColor="text-black"
            backTextColor="text-white"
            backContent={
              <div className="text-sm cursor-pointer font-semibold">
                <p>La profesional de Enfermería, se caracteriza por:</p>
                <ul>
                  <li>
                    Poseer una formación científica – técnica - ética y humana,
                    fortaleciendo constantemente su preparación, logrando la
                    excelencia en su desempeño profesional, trabajando en forma
                    independiente, multidisciplinaria y multisectorial, en las
                    áreas: urbanas, suburbanas y rural.
                  </li>
                  <li>
                    Demostrar vocación y compromiso moral, ético y social de
                    acuerdo a nuestro contexto real, como es la identidad
                    propia, valorizando y conociendo nuestra cultura andina.
                  </li>
                  <li>
                    Asumir la enfermería con capacidad crítica y reflexiva para
                    prestar atención integral al usuario hospitalizado y/o en
                    comunidad, identificando sus necesidades y aplicando los
                    principios científicos, con atención humanizada dentro el
                    marco ético legal.
                  </li>
                  <li>
                    Tener capacidad de intervención y toma de decisiones en la
                    solución de problemas de salud de las personas, las familias
                    y los grupos comunitarios de la ciudad de El Alto, las
                    provincias y el país, asumiendo el rol de educador en salud.
                  </li>
                  <li>
                    Utilizar la investigación para la resolución de problemas de
                    salud y de la propia enfermería, generando cambios en los
                    diferentes niveles de atención del sistema de salud, en las
                    áreas: urbanas, sub. urbanas y rural de la ciudad de El Alto
                    y el país.
                  </li>
                </ul>
              </div>
            }
          />
          <FlipCard
            frontTitle="CAMPO DE TRABAJO PROFESIONAL"
            frontContent={
              <div className="relative w-full h-full">
                <Image
                  src="/images/estudiantes-3.jpg"
                  alt="Campo de Trabajo Profesional"
                  className="object-cover rounded-3xl cursor-pointer"
                  fill
                  priority
                />
              </div>
            }
            backTitle="CAMPO DE TRABAJO PROFESIONAL"
            icon={faBriefcase}
            frontBg="bg-white"
            backBg="bg-secondary"
            frontTextColor="text-black"
            backTextColor="text-white"
            backContent={
              <div className="text-sm cursor-pointer font-semibold">
                <p>
                  A partir de 1974 la profesionalización de la enfermera se
                  desarrolla con la modalidad académica de licenciatura en
                  enfermería. El recurso humano de profesionales en salud de
                  acuerdo a datos del Sistema Nacional de información en salud,
                  corresponde en primer lugar a profesionales médicos, en
                  segundo lugar profesionales enfermeras, y en tercer lugar los
                  profesiones odontólogos y otros, sin embargo cabe señalar en
                  el área de formación de enfermería existen además, el nivel de
                  auxiliares en enfermería o técnicos medios quienes se ubican
                  en primer lugar.
                </p>
                <p>
                  Por tanto, surge la necesidad de formar Licenciadas en
                  enfermería, quienes coadyuvarán al desarrollo de las políticas
                  de salud del Ministerio de Salud y Deportes.
                </p>
                <p>
                  Es muy manifiesto la falta de existencia de políticas de
                  recursos humanos en salud y la falta de participación de las
                  enfermeras docentes y de servicios por medio de sus
                  representaciones científico, gremiales y sindicales ante el
                  Ministerio de salud y Deportes y Ministerio de Hacienda,
                  además de los gobiernos Municipales tomando en cuenta la
                  descentralización en salud, para la definición de políticas de
                  recursos humanos en enfermería, tanto en el sentido
                  cuantitativo, así como también en el aspecto cualitativo de
                  acuerdo a las necesidades de la ciudad de El Alto y del país
                </p>
              </div>
            }
          />
        </div>
      </section>
      <section className="max-w-screen-xl h-full md:h-screen flex flex-col justify-center mx-auto px-4 md:px-6">
        <motion.p
          className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mx-auto py-4"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          Arte, Ciencia y Sabiduría Adelante Enfermería
        </motion.p>
        <MissionVisionPage></MissionVisionPage>

        <div className="max-w-screen-xl mx-auto flex justify-center mt-12 md:mt-24 px-4 md:px-6">
          <a
            href="https://serviciopagina.upea.bo//InstitucionUpea/cf51cb33-2279-40da-8f8a-83915fdf2182.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:from-secondary hover:to-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
          >
            <FontAwesomeIcon
              icon={faCloudArrowDown}
              className="w-6 h-6 mr-2 text-white group-hover:scale-110 transition-transform"
            />
            Descargar Plan de Estudios
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></span>
          </a>
        </div>
      </section>
      <AuthoritiesPage></AuthoritiesPage>
    </>
  );
};

export default AboutPage;
