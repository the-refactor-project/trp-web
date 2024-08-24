import { Metadata } from "next";
import CraftingCourse from "../../../components/CraftingCourse/CraftingCourse";

export const metadata: Metadata = {
  title:
    "Curso Crafting en Desarrollo Web Profesional en Barcelona - The Refactor Project",
  description:
    "Aprende el oficio de developer desde cero en Barcelona. 4 meses de formación intensiva en desarrollo web avanzado.",
};

const CraftingPage = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <CraftingCourse />
      </div>
    </main>
  );
};

export default CraftingPage;
