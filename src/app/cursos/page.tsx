import { Metadata } from "next";
import Courses from "../../components/Courses/Courses";

export const metadata: Metadata = {
  title:
    "Cursos de programación presenciales y online en Barcelona - The Refactor Project",
  description:
    "Potencia tus habilidades como programador/a con nuestros cursos de iniciación y avanzados. Tanto si quieres buscar trabajo como developer fullstack como si ya trabajas y quieres ampliar tus conocimientos para ascender en tu carrera.",
};

const CoursesPage = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <Courses />
      </div>
    </main>
  );
};

export default CoursesPage;
