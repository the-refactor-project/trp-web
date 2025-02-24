"use client";

import Image from "next/image";
import Link from "next/link";
import * as amplitude from "@amplitude/analytics-browser";
import "./Courses.scss";
import CourseCard, { Course } from "../CourseCard/CourseCard";

const Courses = (): React.ReactElement => {
  const typeScriptCourse: Course = {
    id: "de-js-a-ts",
    title: "De JavaScript a TypeScript",
    image: "Curso-De-JavaScript-a-TypeScript.png",
    hours: 12,
    sessions: "4 sesiones de 3 horas",
    document: "Dossier de JS a TS.pdf",
  };
  const advancedTypeScriptCourse: Course = {
    id: "typescript-avanzado",
    title: "TypeScript Avanzado",
    image: "Curso-TypeScript-Avanzado.png",
    hours: 12,
    sessions: "4 sesiones de 3 horas",
    document: "Dossier TypeScript Avanzado.pdf",
  };
  const frontendTestingCourse: Course = {
    id: "testing-en-front",
    title: "Testing en el Front",
    image: "Curso-Testing-Front.png",
    hours: 12,
    sessions: "4 sesiones de 3 horas",
    document: "Dossier Testing en el Front.pdf",
  };
  const sqlCourse: Course = {
    id: "fundamentos-sql",
    title: "Fundamentos de SQL",
    image: "Curso-Fundamentos-SQL.png",
    hours: 12,
    sessions: "4 sesiones de 3 horas",
    document: "Dossier Fundamentos de SQL.pdf",
  };

  const registerDownload = (course: string) => {
    amplitude.logEvent("Clicado download del dossier de " + course);
  };

  return (
    <section className="section courses" id="cursos" data-testid="courses">
      <h2 className="section__title">Nuestros cursos</h2>
      <ul className="courses-list">
        <li className="courses-list__featured">
          <article className="course">
            <Image
              src="/images/programando-fondo.webp"
              className="course__image course__image--desktop"
              alt="Manos escribiendo muy rápidamente en un portátil"
              loading="lazy"
              width="1200"
              height="533"
            />
            <Image
              src="/images/programando.webp"
              className="course__image"
              alt="Manos escribiendo muy rápidamente en un portátil"
              loading="lazy"
              width="500"
              height="533"
            />
            <div className="course__info">
              <h3 className="course__title">
                Bootcamp de Programación Web Full Stack
              </h3>
              <dl className="course__data-list">
                <div className="course__data">
                  <dt className="course__data-name">Formato híbrido</dt>
                  <dd className="course__data-value">
                    25% remoto
                    <br />
                    75% presencial
                  </dd>
                </div>
                <div className="course__data">
                  <dt className="course__data-name">Duración</dt>
                  <dd className="course__data-value">
                    1 mes remoto
                    <br />3 meses presencial
                  </dd>
                </div>
              </dl>
              <span className="section__floating">
                Paga cuando empieces a trabajar
              </span>
              <div className="section__actions">
                <Link
                  href="/cursos/bootcamp-de-programacion-web-full-stack"
                  className="button button--solid button--large"
                >
                  Ver curso
                </Link>
                <a
                  href="/docs/Dossier Bootcamp de Programacion Web Full Stack.pdf"
                  className="button button--outline button--large"
                  onClick={() =>
                    registerDownload("Bootcamp de Programación Web Full Stack")
                  }
                  download
                >
                  Descarga el dossier
                </a>
              </div>
            </div>
          </article>
        </li>
        <li>
          <CourseCard course={typeScriptCourse} />
        </li>
        <li>
          <CourseCard course={advancedTypeScriptCourse} />
        </li>
        <li>
          <CourseCard course={frontendTestingCourse} />
        </li>
        <li>
          <CourseCard course={sqlCourse} />
        </li>
      </ul>
    </section>
  );
};

export default Courses;
