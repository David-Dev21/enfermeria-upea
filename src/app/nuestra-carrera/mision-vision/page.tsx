import { faFlag, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const MissionVisionPage = () => {
    useEffect(() => {
        const loadScripts = async () => {
            const jQueryScript = document.createElement("script");
            jQueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
            jQueryScript.onload = () => {
                const flipScript = document.createElement("script");
                flipScript.src = "/js/jquery.flip.min.js";
                flipScript.onload = () => {
                    $("#missionCard").flip({ trigger: 'click' });
                    $("#visionCard").flip({ trigger: 'click' });
                };
                document.body.appendChild(flipScript);
            };
            document.body.appendChild(jQueryScript);
        };

        loadScripts();
    }, []);

    return (
        <section className="max-w-screen-xl mx-auto  mt-12 md:mt-20 px-4 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                <div className="max-w-xl w-full text-sm mb-auto h-full" id="missionCard">
                    <div className="h-full cursor-pointer">
                        <div className="front p-4 rounded-3xl shadow-md h-full flex justify-center items-center">
                            <h2 className="font-bold text-6xl bg-gradient-to-r from-blue-800 to-red-600 bg-clip-text text-transparent">
                                <FontAwesomeIcon icon={faFlag} className="text-red-600" /> Misión
                            </h2>
                        </div>
                        <div className="back p-4 bg-gradient-to-tr from-red-600 to-blue-900 rounded-3xl shadow-md h-full">
                            <h2 className="font-bold text-xl text-center mb-4 text-white">
                                Misión
                            </h2>
                            <p>Formar profesionales competentes y competitivos en el desempeño de sus funciones en las áreas clínicas, comunitarias, administrativas, docencia e investigación con un enfoque holístico</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-xl w-full text-sm mb-auto h-full" id="visionCard">
                    <div className="h-full cursor-pointer">
                        <div className="front p-4 rounded-3xl shadow-md h-full flex justify-center items-center">
                            <h2 className="font-bold text-6xl bg-gradient-to-r from-blue-800 to-red-600 bg-clip-text text-transparent">
                                <FontAwesomeIcon icon={faRocket} className="text-blue-800" /> Visión
                            </h2>
                        </div>
                        <div className="back p-4 bg-gradient-to-tr from-red-600 to-blue-900 rounded-3xl shadow-md h-full">
                            <h2 className="font-bold text-xl text-center mb-4 text-white">
                                Visión
                            </h2>
                            <p>Contar con profesionales en Enfermería competentes y competitivos que respondan a las exigencias de la población de la ciudad de El Alto y del país, potenciando la toma de decisiones en la solución de los problemas de salud y mantener la más alta calidad educativa, desarrollando innovaciones creativas en el proceso enseñanza aprendizaje a través de una gestión administrativa, científica y pedagógica eficaz y eficiente</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionPage;