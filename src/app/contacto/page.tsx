import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ModernCard";

const ContactPage = () => {
    return (
        <>
            <Header title='Contactate con Nosotros'></Header>
            <section className="max-w-screen-xl mx-auto px-4 md:px-10 py-8">
                <div className="flex flex-col lg:flex-row items-center gap-x-12 gap-y-8 sm:px-4 md:px-0">
                    <div className="flex-1 max-w-xl px-4 text-center">
                        <Card>
                            <CardContent>
                                <h2 className="text-2xl font-semibold mb-4">Horarios de Atención</h2>
                                <p className="text-lg text-gray-500">Lunes a Viernes</p>
                                <p className="text-lg text-gray-500">8:30 AM - 12:30 PM</p>
                                <p className="text-lg text-gray-500">14:00 PM - 5:30 PM</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex-1 max-w-xl px-4 text-center">
                        <Card>
                            <CardContent>
                                <h2 className="text-2xl font-semibold mb-4">Contactos</h2>
                                <p className="text-lg text-gray-500">Teléfono-1: 77775964</p>
                                <p className="text-lg text-gray-500">Teléfono-2: 70592234</p>
                                <p className="text-lg text-gray-500">Email: enfermeria-upea@gmail.com</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="mt-8">
                    <iframe
                        title="Google Maps"
                        className="w-full h-96"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.007696637693!2d-68.1940874!3d-16.490793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf2ef2781625%3A0x50e28825b5c88bcc!2sCarrera%20de%20Enfermer%C3%ADa%20-%20UPEA!5e0!3m2!1ses!2sbo!4v1631835124844!5m2!1ses!2sbo"
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </>
    );
};

export default ContactPage;