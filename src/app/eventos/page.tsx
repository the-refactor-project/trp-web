import { Metadata } from "next";
import Events from "../../components/Events/Events";
import "./EventsPage.scss";

export const metadata: Metadata = {
  title: "Próximos eventos de la escuela - The Refactor Project",
  description:
    "Echa un vistazo a nuestra agenda y encontrarás talleres, encuentros, charlas y directos, relacionados con el mundo tech y la programación.",
};

const EventsPage = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <Events />
      </div>
    </main>
  );
};

export default EventsPage;
