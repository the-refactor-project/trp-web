import { Metadata } from "next";
import Image from "next/image";
import SolidCourse from "../../../components/SolidCourse/SolidCourse";

export const metadata: Metadata = {
  title:
    "Curso Ingeniería en el Software: SOLID & Design Patterns - The Refactor Projectarrollo Web Profesional en Barcelona - The Refactor Project",
  description:
    "Si ya sabes programar pero sientes que te faltan bases para ascender en tu carrera, en este curso podrás encontrar el empuje que necesitas para complementar tus conocimientos.",
};

const SolidPage = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <SolidCourse />
      </div>
    </main>
  );
};

export default SolidPage;
