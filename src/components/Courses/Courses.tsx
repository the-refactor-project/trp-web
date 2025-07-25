"use client";

import Image from "next/image";
import Link from "next/link";
import * as amplitude from "@amplitude/analytics-browser";
import CourseCard, { Course } from "../CourseCard/CourseCard";
import "./Courses.scss";

const Courses = (): React.ReactElement => {
  const typeScriptCourse: Course = {
    id: "de-js-a-ts",
    title: "De JavaScript a TypeScript",
    image: "Curso-De-JavaScript-a-TypeScript.png",
    hours: 15,
    sessions: "4 sesiones de 3 horas",
    document: "Dossier de JS a TS.pdf",
  };
  const advancedTypeScriptCourse: Course = {
    id: "typescript-avanzado",
    title: "TypeScript Avanzado",
    image: "Curso-TypeScript-Avanzado.png",
    hours: 15,
    sessions: "4 sesiones de 3 horas",
    document: "Dossier TypeScript Avanzado.pdf",
  };
  const frontendTestingCourse: Course = {
    id: "testing-en-front",
    title: "Testing en el Front",
    image: "Curso-Testing-Front.png",
    hours: 15,
    sessions: "4 sesiones de 3 horas",
    document: "Dossier Testing en el Front.pdf",
  };
  const sqlCourse: Course = {
    id: "fundamentos-sql",
    title: "Fundamentos de SQL",
    image: "Curso-Fundamentos-SQL.png",
    hours: 15,
    sessions: "4 sesiones de 3 horas",
    document: "Dossier Fundamentos de SQL.pdf",
  };
  const angularCourse: Course = {
    id: "angular",
    title: "Desarrollo con Angular",
    image: "Curso-Desarrollo-con-Angular.png",
    hours: 15,
    sessions: "4 sesiones de 3 horas",
    document: "Dossier Desarrollo con Angular.pdf",
  };
  const a11yCourse: Course = {
    id: "accesibilidad-web",
    title: "Accesibilidad Web",
    image: "Curso-Accesibilidad-Web.png",
    hours: 15,
    sessions: "4 sesiones de 3 horas",
    document: "Dossier Accesibilidad Web.pdf",
  };

  const registerDownload = (course: string) => {
    amplitude.logEvent("Clicado download del dossier de " + course);
  };

  return (
    <section className="section courses" id="cursos" data-testid="courses">
      <h2 className="section__title">Formaciones bonificables por Fundae</h2>
      <ul className="courses-list">
        <li className="courses-list__featured">
          <article className="course course--inverse">
            <Image
              src="/images/gafas-large.webp"
              className="course__image course__image--desktop"
              alt="Unas gafas sobre un portátil, la parte de pantalla que se ve a través de ellas aparece enfocada"
              loading="lazy"
              width="1200"
              height="533"
            />
            <Image
              src="/images/gafas-mobile.webp"
              className="course__image"
              alt="Unas gafas sobre un portátil, la parte de pantalla que se ve a través de ellas aparece enfocada"
              loading="lazy"
              width="500"
              height="533"
            />
            <div className="course__info">
              <h3 className="course__title">
                Ingeniería en el Software: SOLID & Design Patterns
              </h3>
              <dl className="course__data-list">
                <div className="course__data">
                  <dt className="course__data-name">Formato</dt>
                  <dd className="course__data-value">100% online</dd>
                </div>
                <div className="course__data">
                  <dt className="course__data-name">Duración</dt>
                  <dd className="course__data-value">
                    2 semanas a tu ritmo
                    <br />
                    13 semanas clases en directo
                  </dd>
                </div>
              </dl>
              <span className="section__floating">
                <strong>Curso bonificable por Fundae</strong>
              </span>
              <div className="section__actions">
                <Link
                  href="/cursos/ingenieria-en-el-software-solid-design-patterns"
                  className="button button--solid button--large"
                >
                  Ver curso
                </Link>
                <a
                  href="/docs/Dossier Ingeniería en el Software SOLID & Design Patterns.pdf"
                  className="button button--outline button--large"
                  onClick={() =>
                    registerDownload(
                      "Ingeniería en el Software SOLID & Design Patterns",
                    )
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
          <CourseCard course={a11yCourse} />
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
        <li>
          <CourseCard course={angularCourse} />
        </li>
      </ul>
    </section>
  );
};

export default Courses;
