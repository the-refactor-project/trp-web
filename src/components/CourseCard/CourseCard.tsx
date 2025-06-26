"use client";

import Image from "next/image";
import Link from "next/link";
import * as amplitude from "@amplitude/analytics-browser";

export interface Course {
  id: string;
  title: string;
  image: string;
  hours: number;
  sessions: string;
  document: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({
  course: { id, title, image, hours, document },
}: CourseCardProps): React.ReactElement => {
  const registerEvent = () => {
    amplitude.logEvent("Clicado download del dossier de " + title);
  };

  return (
    <article className="course" id={id}>
      <Image
        src={`/images/${image}`}
        width="653"
        height="325"
        alt={`Curso ${title}`}
        loading="lazy"
      />
      <h3 className="course__title">{title}</h3>
      <dl className="course__data-list">
        <div className="course__data">
          <dt className="course__data-name">Formato online</dt>
          <dd className="course__data-value">
            En la plataforma{" "}
            <Link href="https://www.gather.town/" target="_blank">
              Gather
            </Link>
          </dd>
        </div>
        <div className="course__data">
          <dt className="course__data-name">Duración</dt>
          <dd className="course__data-value">{hours} horas</dd>
        </div>
      </dl>
      <div className="section__actions">
        <Link href="/contacto" className="button button--solid button--large">
          Infórmate
        </Link>
        <a
          href={`/docs/${document}`}
          className="button button--outline button--large"
          download
          onClick={registerEvent}
        >
          Descarga el dossier
        </a>
      </div>
    </article>
  );
};

export default CourseCard;
