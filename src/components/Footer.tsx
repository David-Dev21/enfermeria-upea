import { FooterNav } from "@/types/type";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * Componente que renderiza el pie de página del sitio web.
 * @returns {JSX.Element} Elemento JSX que contiene el pie de página.
 */
const Footer = () => {
  const footerNavs: FooterNav[] = [
    {
      label: "Enlaces Rápidos",
      items: [
        {
          href: "/nuestra-carrera",
          name: "Nuestra Carrera",
        },
        {
          href: "/comunicados",
          name: "Comunicados",
        },
        {
          href: "/capacitaciones",
          name: "Capacitaciones",
        },
        {
          href: "/contactos",
          name: "Contactos",
        },
        {
          href: "/enlaces",
          name: "Enlaces",
        },
      ],
    },
  ];

  return (
    <footer className="bg-tertiary mt-10 ">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 pt-4 md:grid-cols-3 gap-8">
          <div className="flex flex-col my-4 text-center justify-center">
            <a href="#" className="flex justify-center">
              <Image
                src="/images/logo-enfermeria.png"
                alt="enfermeria"
                width={80}
                height={80}
              />
            </a>
            <div className="mt-6 text-sm">
              <a
                href="https://www.google.com/maps/place/Carrera+de+Enfermer%C3%ADa+-+UPEA/@-16.4893164,-68.1931985,17z/data=!3m1!4b1!4m6!3m5!1s0x915edf2ef2781625:0x50e28825b5c88bcc!8m2!3d-16.4893164!4d-68.1931985!16s%2Fg%2F11gmzvxy2x?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="text-white hover:text-cyan-500"
              >
                <FontAwesomeIcon icon={faLocationDot} /> Villa Esperanza Av.
                Sucre B - Al lado del Teleferico
              </a>
              <br />
              <a
                href="mailto:enfermeria-upea@gmail.com"
                className="text-white hover:text-cyan-500"
              >
                <FontAwesomeIcon icon={faEnvelope} /> enfermeria-upea@gmail.com{" "}
              </a>
            </div>
          </div>
          {footerNavs.map((item, idx) => (
            <div key={idx} className="text-center">
              <h4 className="text-gray-200 font-semibold mb-4">{item.label}</h4>
              <ul className="space-y-4 text-gray-300">
                {item.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="duration-150 hover:text-cyan-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col my-4 text-center justify-center">
            <a
              href="https://utic.upea.bo/"
              className="flex justify-center"
              target="_blank"
            >
              <Image
                src="/images/utic-logo.jpg"
                alt="enfermeria"
                width={80}
                height={80}
                className="rounded-full"
              />
            </a>
            <div className="text-sm mt-6">
              <a
                href="https://www.google.com/maps/place/Edificio+Tecnol%C3%B3gico+Torre+A+(Carrera+de+Ingenier%C3%ADa+de+Sistemas)/@-16.493577,-68.1944837,17.57z/data=!4m14!1m7!3m6!1s0x915edf2ef2781625:0x50e28825b5c88bcc!2sCarrera+de+Enfermer%C3%ADa+-+UPEA!8m2!3d-16.4893164!4d-68.1931985!16s%2Fg%2F11gmzvxy2x!3m5!1s0x915edf53a9c8ea57:0x1a3fe3118e4703f8!8m2!3d-16.4933015!4d-68.1937855!16s%2Fg%2F11l22gx212?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="text-white hover:text-cyan-500"
              >
                <FontAwesomeIcon icon={faLocationDot} /> Villa Esperanza Av.
                Sucre A - Edificio Torre A Segundo Piso
              </a>
              <br />
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=utic@upea.edu.bo&tf=cm"
                className="text-white hover:text-cyan-500"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} /> utic@upea.edu.bo
              </a>
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-center mt-2">
          ©U-TIC 2025 | Desarrollado por
          <a
            href="https://www.linkedin.com/in/david-mamani-a3b745352/"
            target="_blank"
            className="text-gray-400 hover:text-cyan-500"
          >
            {" "}
            RubenDavidMA
          </a>
          <a
            href="https://github.com/David-Dev21"
            target="_blank"
            className="ms-2 text-gray-400 hover:text-cyan-500"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://wa.me/59179550230"
            target="_blank"
            className="ms-2 text-gray-400 hover:text-cyan-500"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <span className="hidden">G ❤</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
