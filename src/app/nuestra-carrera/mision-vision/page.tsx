import Header from "@/components/Header";
import { Card, CardContent, CardTitle } from "@/components/ModernCard";

const MissionVisionPage = () => {
    return (
        <section className="max-w-screen-xl mx-auto my-12 px-4 md:px-10">
            <div className="flex items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                <div className="flex-1 max-w-xl px-4 mt-6 rounded-xl bg-opacity-80 mx-4 sm:px-0 md:mt-0 lg:max-w-2xl">
                    <Card>
                        <CardTitle>Misión
                        </CardTitle>
                        <CardContent>
                            <p>Formar profesionales competentes y competitivos en el desempeño de sus funciones en las áreas clínicas, comunitarias, administrativas, docencia e investigación con un enfoque holístico</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-1 max-w-xl px-4 mt- rounded-xl bg-opacity-80 mx-4 sm:px-0 md:mt-0 lg:max-w-2xl">
                    <Card>
                        <CardTitle>Vision</CardTitle>
                        <CardContent>
                            <p>Contar con profesionales en Enfermería competentes y competitivos que respondan a las exigencias de la población de la ciudad de El Alto y del país, potenciando la toma de decisiones en la solución de los problemas de salud y mantener la más alta calidad educativa, desarrollando innovaciones creativas en el proceso enseñanza aprendizaje a través de una gestión administrativa, científica y pedagógica eficaz y eficiente</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionPage;