"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import {
  faFacebook,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faClock,
  faEnvelope,
  faIdCardClip,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent } from "@/components/Card";

const ContactsPage = () => {
  return (
    <section className="max-w-screen-xl h-full pt-24 flex flex-col justify-center mx-auto px-4 md:px-10">
      <Header title="Contactate con Nosotros">
        <FontAwesomeIcon icon={faIdCardClip} className="text-red-600" />
      </Header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Card className="w-2/3 mx-auto">
            <CardContent>
              <h2 className="text-center text-2xl font-semibold text-primary mb-2 hover:text-secondary">
                <FontAwesomeIcon icon={faClock} /> Horarios de Atención
              </h2>
              <div className="text-center text-lg text-gray-600 ">
                <p>Lunes a Viernes</p>
                <p>08:30 am - 12:30 pm</p>
                <p>14:00 pm - 17:30 pm</p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-2/3 mx-auto mt-4">
            <CardContent>
              <h2 className="text-center text-2xl text-primary font-semibold mb-2 hover:text-secondary">
                <FontAwesomeIcon icon={faAddressBook} /> Contactos
              </h2>
              <div className="text-center text-lg text-gray-600 ">
                <p>
                  <FontAwesomeIcon icon={faPhone} /> 77775964 -{" "}
                  <FontAwesomeIcon icon={faPhone} /> 70592234
                </p>
                <p></p>
                <p>
                  <a
                    href="mailto:enfermeria-upea@gmail.com"
                    className="text-gray-600 hover:text-secondary"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    enfermeria-upea@gmail.com{" "}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
          <motion.div
            className="w-2/3 mx-auto flex justify-around mt-4 text-3xl"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <a
              href="https://www.facebook.com/p/Carrera-de-Enfermer%C3%ADa-UPEA-100086547786790/?locale=es_LA"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-blue-600 text-2xl p-3 rounded-full transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-125"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=59177775964"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-green-600 text-2xl p-3 rounded-full transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-125"
              />
            </a>
            <a
              href="https://www.tiktok.com/@enfermeria.sede.caranavi"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                className="text-gray-600 text-2xl p-3 rounded-full transition-all duration-300 hover:bg-gray-600 hover:text-white hover:scale-125"
              />
            </a>
          </motion.div>
        </motion.div>
        <div className="max-w-xl w-full text-sm">
          <iframe
            title="Google Maps"
            className="w-full h-96 rounded-3xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.007696637693!2d-68.1940874!3d-16.490793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf2ef2781625%3A0x50e28825b5c88bcc!2sCarrera%20de%20Enfermer%C3%ADa%20-%20UPEA!5e0!3m2!1ses!2sbo!4v1631835124844!5m2!1ses!2sbo"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
