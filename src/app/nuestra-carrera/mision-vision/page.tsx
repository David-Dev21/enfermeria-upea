import { faFlag, faRocket } from "@fortawesome/free-solid-svg-icons";
import FlipCard from "@/components/FlipCard"; // Ajusta la ruta si es necesario

const MissionVisionPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto mt-20 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Misión */}
        <FlipCard
          frontContent={
            <h2 className="font-bold text-6xl text-white text-center my-auto cursor-pointer">
              Misión
            </h2>
          }
          backTitle="Misión"
          backContent={
            <p className="cursor-pointer py-8 font-semibold">
              Formar profesionales competentes y competitivos en el desempeño de
              sus funciones en las áreas clínicas, comunitarias,
              administrativas, docencia e investigación con un enfoque
              holístico.
            </p>
          }
          icon={faFlag}
          frontBg="bg-gradient-to-r from-primary to-secondary"
          backBg="bg-gradient-to-tr from-secondary to-primary"
          frontTextColor="text-white"
          backTextColor="text-white"
        />

        {/* Visión */}
        <FlipCard
          frontContent={
            <h2 className="font-bold text-6xl text-white text-center my-auto cursor-pointer">
              Visión
            </h2>
          }
          backTitle="Visión"
          backContent={
            <p className="cursor-pointer font-semibold">
              Contar con profesionales en Enfermería competentes y competitivos
              que respondan a las exigencias de la población de la ciudad de El
              Alto y del país, potenciando la toma de decisiones en la solución
              de los problemas de salud y mantener la más alta calidad
              educativa, desarrollando innovaciones creativas en el proceso
              enseñanza aprendizaje a través de una gestión administrativa,
              científica y pedagógica eficaz y eficiente.
            </p>
          }
          icon={faRocket}
          frontBg="bg-gradient-to-r from-primary to-secondary"
          backBg="bg-gradient-to-tr from-secondary to-primary"
          frontTextColor="text-white"
          backTextColor="text-white"
        />
      </div>
    </section>
  );
};

export default MissionVisionPage;
