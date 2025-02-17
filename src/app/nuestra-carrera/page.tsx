"use client";
import { Card, CardContent } from "@/components/ModernCard";
import Header from "@/components/Header";
import AuthoritiesPage from "./autoridades/page";
import MissionVisionPage from "./mision-vision/page";

const AboutPage = () => {
    return (
        <>
            <Header title='Sobre Nosotros' />
            <section className="max-w-screen-xl mx-auto px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl w-full">
                        <Card>
                            <CardContent>
                                <h2 className="font-bold text-xl mb-4">PERFIL PROFESIONAL</h2>
                                <p>La profesional de Enfermería, se caracteriza por:</p>
                                <ul className="list-disc list-inside space-y-2 mt-2">
                                    <li>Poseer una formación científica – técnica - ética y humana, fortaleciendo constantemente su preparación, logrando la excelencia en su desempeño profesional, trabajando en forma independiente, multidisciplinaria y multisectorial, en las áreas: urbanas, suburbanas y rural.</li>
                                    <li>Demostrar vocación y compromiso moral, ético y social de acuerdo a nuestro contexto real, como es la identidad propia, valorizando y conociendo nuestra cultura andina.</li>
                                    <li>Asumir la enfermería con capacidad crítica y reflexiva para prestar atención integral al usuario hospitalizado y/o en comunidad, identificando sus necesidades y aplicando los principios científicos, con atención humanizada dentro el marco ético legal.</li>
                                    <li>Tener capacidad de intervención y toma de decisiones en la solución de problemas de salud de las personas, las familias y los grupos comunitarios de la ciudad de El Alto, las provincias y el país, asumiendo el rol de educador en salud.</li>
                                    <li>Utilizar la investigación para la resolución de problemas de salud y de la propia enfermería, generando cambios en los diferentes niveles de atención del sistema de salud, en las áreas: urbanas, sub. urbanas y rural de la ciudad de El Alto y el país.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="w-full max-w-md mx-auto">
                        <Card>
                            <CardContent>
                                <img src="/images/estudiantes-2.jpg" alt="principal" className="rounded-3xl mb-2" />
                                <img src="/images/acto-1.jpg" alt="principal" className="rounded-3xl" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
                    <div className="w-full max-w-md mx-auto">
                        <Card>
                            <CardContent>
                                <img src="/images/estudiantes-3.jpg" alt="principal" className="rounded-3xl" />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="max-w-xl w-full">
                        <Card>
                            <CardContent>
                                <h2 className="font-bold text-xl mb-4">CAMPO DE TRABAJO PROFESIONAL</h2>
                                <p>A partir de 1974 la profesionalización de la enfermera se desarrolla con la modalidad académica de licenciatura en enfermería. El recurso humano de profesionales en salud de acuerdo a datos del Sistema Nacional de información en salud, corresponde en primer lugar a profesionales médicos, en segundo lugar profesionales enfermeras, y en tercer lugar los profesiones odontólogos y otros, sin embargo cabe señalar en el área de formación de enfermería existen además, el nivel de auxiliares en enfermería o técnicos medios quienes se ubican en primer lugar.</p>
                                <p>Por tanto, surge la necesidad de formar Licenciadas en enfermería, quienes coadyuvarán al desarrollo de las políticas de salud del Ministerio de Salud y Deportes.</p>
                                <p>Es muy manifiesto la falta de existencia de políticas de recursos humanos en salud y la falta de participación de las enfermeras docentes y de servicios por medio de sus representaciones científico, gremiales y sindicales ante el Ministerio de salud y Deportes y Ministerio de Hacienda, además de los gobiernos Municipales tomando en cuenta la descentralización en salud, para la definición de políticas de recursos humanos en enfermería, tanto en el sentido cuantitativo, así como también en el aspecto cualitativo de acuerdo a las necesidades de la ciudad de El Alto y del país</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <MissionVisionPage />
            <AuthoritiesPage />
        </>
    );
}

export default AboutPage;