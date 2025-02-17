import { PublicationsProps, AuthoritiesProps } from "@/interfaces/interfaces";

// Definir la URL base del servidor de imágenes
const BASE_URL = 'https://serviciopagina.upea.bo/';
const authority = 'InstitucionUpea/Autoridad/';
const publicacion = 'Publicaciones/';


export const PublicationCard = ({ publications }: PublicationsProps) => {
    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Noticias Destacadas
                </h1>
            </div>
            <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {publications.map((item) => (
                    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={item.publicaciones_id}>
                        <img src={`${BASE_URL}${publicacion}${item.publicaciones_imagen}`} loading="lazy" alt={item.publicaciones_titulo} className="w-full h-48 rounded-t-md" />
                        <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                            <div className="ml-3">
                                {/* Additional content */}
                            </div>
                        </div>
                        <div className="pt-3 ml-4 mr-2 mb-3">
                            <h3 className="text-xl text-gray-900">
                                {item.publicaciones_titulo}
                            </h3>
                            <div dangerouslySetInnerHTML={{ __html: item.publicaciones_descripcion }} />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export const AuthorityCard = ({ authorities }: AuthoritiesProps) => {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Autoridades
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Conoce a las autoridades de la carrera
                    </p>
                </div>
                <div className="mt-5">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {authorities.map((item) => (
                            <li key={item.id_autoridad}>
                                <div className="w-full h-60 sm:h-52 md:h-56">
                                    <img
                                        src={`${BASE_URL}${authority}${item.foto_autoridad}`}
                                        className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                        alt=""
                                    />
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg text-gray-700 font-semibold">{item.nombre_autoridad}</h4>
                                    <p className="text-blue-600">{item.cargo_autoridad}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

