"use client";
import Header from "@/components/Header";
import AuthoritiesPage from "./autoridades/page";
import MissionVisionPage from "./mision-vision/page";
import { faAddressCard, faBriefcase, faBuilding, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ButtonLink from "@/components/ButtonLink";

const AboutPage = () => {
    useEffect(() => {
        const loadScripts = async () => {
            const jQueryScript = document.createElement("script");
            jQueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
            jQueryScript.onload = () => {
                const flipScript = document.createElement("script");
                flipScript.src = "/js/jquery.flip.min.js";
                flipScript.onload = () => {
                    $("#card1").flip({ trigger: 'click' });
                    $("#card2").flip({ trigger: 'click' });
                };
                document.body.appendChild(flipScript);
            };
            document.body.appendChild(jQueryScript);
        };

        loadScripts();
    }, []);

    return (
        <>
            <section className="max-w-screen-lg mx-auto mt-12 md:mt-20 px-4 md:px-6">
                <Header title='Sobre Nosotros'>
                    <FontAwesomeIcon icon={faBuilding} className="text-red-600" />
                </Header>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    <div className="max-w-xl w-full text-sm mb-auto h-full" id="card1">
                        <div className="h-full">
                            <div className="front p-4 rounded-lg h-full">
                                <h2 className="font-bold text-xl text-center text-black">
                                    <FontAwesomeIcon icon={faAddressCard} className="text-red-600" /> PERFIL PROFESIONAL
                                </h2>
                                <img src="/images/estudiantes-2.jpg" alt="principal" className="rounded-3xl mb-2 w-full h-full object-cover cursor-pointer" />
                            </div>
                            <div className="back p-4 text-white bg-blue-900 rounded-3xl shadow-md h-full">
                                <h2 className="font-bold text-xl text-center mb-4">
                                    <FontAwesomeIcon icon={faAddressCard} /> PERFIL PROFESIONAL
                                </h2>
                                <p>La profesional de Enfermería, se caracteriza por:</p>
                                <ul className="list-disc list-inside space-y-2 mt-2">
                                    <li>Poseer una formación científica – técnica - ética y humana, fortaleciendo constantemente su preparación, logrando la excelencia en su desempeño profesional, trabajando en forma independiente, multidisciplinaria y multisectorial, en las áreas: urbanas, suburbanas y rural.</li>
                                    <li>Demostrar vocación y compromiso moral, ético y social de acuerdo a nuestro contexto real, como es la identidad propia, valorizando y conociendo nuestra cultura andina.</li>
                                    <li>Asumir la enfermería con capacidad crítica y reflexiva para prestar atención integral al usuario hospitalizado y/o en comunidad, identificando sus necesidades y aplicando los principios científicos, con atención humanizada dentro el marco ético legal.</li>
                                    <li>Tener capacidad de intervención y toma de decisiones en la solución de problemas de salud de las personas, las familias y los grupos comunitarios de la ciudad de El Alto, las provincias y el país, asumiendo el rol de educador en salud.</li>
                                    <li>Utilizar la investigación para la resolución de problemas de salud y de la propia enfermería, generando cambios en los diferentes niveles de atención del sistema de salud, en las áreas: urbanas, sub. urbanas y rural de la ciudad de El Alto y el país.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-xl w-full text-sm mb-auto h-full" id="card2">
                        <div className="h-full">
                            <div className="front p-4 rounded-lg h-full">
                                <h2 className="font-bold text-xl text-center text-black">
                                    <FontAwesomeIcon icon={faBriefcase} className="text-red-600" /> CAMPO DE TRABAJO PROFESIONAL
                                </h2>
                                <img src="/images/acto-1.jpg" alt="principal" className="rounded-3xl w-full h-full object-cover cursor-pointer" />
                            </div>
                            <div className="back p-4 text-white bg-red-700  rounded-3xl shadow-md h-full">
                                <h2 className="font-bold text-xl text-center mb-4"><FontAwesomeIcon icon={faBriefcase} className="text-white" /> CAMPO DE TRABAJO PROFESIONAL</h2>
                                <p className="py-2">A partir de 1974 la profesionalización de la enfermera se desarrolla con la modalidad académica de licenciatura en enfermería. El recurso humano de profesionales en salud de acuerdo a datos del Sistema Nacional de información en salud, corresponde en primer lugar a profesionales médicos, en segundo lugar profesionales enfermeras, y en tercer lugar los profesiones odontólogos y otros, sin embargo cabe señalar en el área de formación de enfermería existen además, el nivel de auxiliares en enfermería o técnicos medios quienes se ubican en primer lugar.</p>
                                <p className="py-2">Por tanto, surge la necesidad de formar Licenciadas en enfermería, quienes coadyuvarán al desarrollo de las políticas de salud del Ministerio de Salud y Deportes.</p>
                                <p className="py-2">Es muy manifiesto la falta de existencia de políticas de recursos humanos en salud y la falta de participación de las enfermeras docentes y de servicios por medio de sus representaciones científico, gremiales y sindicales ante el Ministerio de salud y Deportes y Ministerio de Hacienda, además de los gobiernos Municipales tomando en cuenta la descentralización en salud, para la definición de políticas de recursos humanos en enfermería, tanto en el sentido cuantitativo, así como también en el aspecto cualitativo de acuerdo a las necesidades de la ciudad de El Alto y del país</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="max-w-screen-xl mx-auto mt-12 md:mt-20 px-4 md:px-6">
                <motion.p
                    className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 mx-auto p-2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                >
                    Arte, Ciencia y Sabiduría Adelante Enfermería
                </motion.p>
            </div>
            <MissionVisionPage />
            <div className="max-w-screen-xl mx-auto flex justify-center mt-12 md:mt-20 px-4 md:px-6">
                <a
                    href="https://serviciopagina.upea.bo//InstitucionUpea/cf51cb33-2279-40da-8f8a-83915fdf2182.jpg"
                    target="_blank"
                    className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-900 to-red-700 rounded-full shadow-lg hover:from-red-700 hover:to-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
                >
                    {/* Ícono */}
                    <FontAwesomeIcon icon={faCloudArrowDown} className="w-6 h-6 mr-2 text-white group-hover:scale-110 transition-transform" />

                    {/* Texto */}
                    Descargar Plan de Estudios

                    {/* Efecto de brillo adicional */}
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></span>
                </a>
            </div>
            <AuthoritiesPage />
        </>
    );
}

export default AboutPage;