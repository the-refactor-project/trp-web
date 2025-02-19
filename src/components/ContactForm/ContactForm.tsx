"use client";

import Link from "next/link";
import { FormEvent, useRef } from "react";

const ContactForm = (): React.ReactElement => {
  const form = useRef<HTMLFormElement>(null);

  const appendDamnMailchimpHiddenIdInputThatCrashesThePage = (
    form: HTMLFormElement,
  ): void => {
    const damnMailchimpHiddenIdInputThatCrashesThePage =
      document.createElement("input");
    damnMailchimpHiddenIdInputThatCrashesThePage.hidden = true;
    damnMailchimpHiddenIdInputThatCrashesThePage.name = "id";
    damnMailchimpHiddenIdInputThatCrashesThePage.value = "8e51c725c5";
    damnMailchimpHiddenIdInputThatCrashesThePage.readOnly = true;

    form.appendChild(damnMailchimpHiddenIdInputThatCrashesThePage);
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) {
      throw new Error("The form is empty");
    }

    const emailInput = form.current.querySelector("#email") as HTMLInputElement;

    const bannedEmails = ["agenciafwdigital", "agenciadigitalv"];

    if (bannedEmails.includes(emailInput?.value)) {
      return;
    }

    appendDamnMailchimpHiddenIdInputThatCrashesThePage(form.current);

    form.current.submit();
  };

  return (
    <>
      <section className="section contact">
        <div>
          <h2 className="section__title">
            ¿Quieres recibir información sobre un curso o evento?
          </h2>
          <section className="section__text">
            <p>Te contestaremos a la mayor brevedad posible</p>
          </section>
        </div>
        <form
          action="https://the-refactor-project.us21.list-manage.com/subscribe/post"
          method="POST"
          className="form"
          ref={form}
          onSubmit={submitForm}
        >
          <input
            type="hidden"
            name="u"
            value="23069d5189e40c66d49cf3aba"
            readOnly
          />
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Dinos tu correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="MERGE0"
              className="form__control"
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="phone" className="form__label">
              Y un número de teléfono: (opcional)
            </label>
            <input
              type="tel"
              id="phone"
              name="MERGE4"
              className="form__control"
            />
          </div>
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              ¿Cómo te llamas?
            </label>
            <input
              type="text"
              id="name"
              name="MERGE1"
              className="form__control"
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="course" className="form__label">
              ¿Sobre qué quieres información?
            </label>
            <select name="MERGE2" id="course" className="form__control">
              <option value="crafting">
                Bootcamp de Programación Web Full Stack
              </option>
              <option value="engineering">
                Ingeniería en el Software: SOLID & Design Patterns
              </option>
              <option value="online">Cursos online</option>
              <option value="events">Eventos</option>
              <option value="all">Quiero saberlo TODO</option>
              <option value="others">
                Quiero información sobre otros asuntos
              </option>
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="message" className="form__label">
              Deja tus comentarios
            </label>
            <textarea
              name="MERGE3"
              id="message"
              className="form__control"
              rows={5}
              required
            ></textarea>
          </div>
          <div className="form__group">
            <label htmlFor="privacy">
              <input type="checkbox" id="privacy" required /> Acepta la{" "}
              <Link href="privacidad" target="_blank">
                política de privacidad
              </Link>
            </label>
          </div>
          <div className="form__submit">
            <button
              className="button button--outline button--full"
              type="submit"
              // disabled={!isFormValid}
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
      <section className="section map">
        <h2 className="section__title" id="donde-estamos">
          ¿Dónde estamos?
        </h2>
        <p style={{ marginBottom: 15 }}>
          👋 Ven a visitarnos a C/ Bruc, 149, 1er piso
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.864312492793!2d2.163471!3d41.398753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a25e5f5cc24f%3A0x538fb151a674c0fc!2sCREC%20Coworking%20Diagonal%20-%20Depot%20Lab%20Barcelona!5e0!3m2!1ses!2ses!4v1739793610466!5m2!1ses!2ses"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default ContactForm;
