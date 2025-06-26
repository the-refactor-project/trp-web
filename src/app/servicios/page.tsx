import { Metadata } from "next";
import Services from "../../components/Services/Services";

export const metadata: Metadata = {
  title: "Servicios para empresas - The Refactor Project",
  description:
    "Ayudamos a empresas con desarrollo de aplicaciones web y móviles, auditorías de accesibilidad web, formación en programación y consultoría técnica. Especialistas en desarrollo full stack.",
};

const ServicesPage = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <Services />
      </div>
    </main>
  );
};

export default ServicesPage;
