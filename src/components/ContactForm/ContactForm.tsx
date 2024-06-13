"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactData {
  email: string;
  phone: string;
  name: string;
  course: string;
  message: string;
  privacy: boolean;
}

const ContactForm = (): React.ReactElement => {
  const [contactData, setContactData] = useState<ContactData>({
    email: "",
    phone: "",
    name: "",
    course: "crafting",
    message: "",
    privacy: false,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const isFormValid = formRef.current?.checkValidity();

  useEffect(() => {
    emailjs.init("grdFnJ-ot5fQpyAI7");
  }, []);

  const changeContactData = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setContactData((contactData) => ({
      ...contactData,
      [event.target.id]:
        event.target.type === "checkbox"
          ? (event.target as HTMLInputElement).checked
          : event.target.value,
    }));
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault;

    if (!isFormValid) {
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone,
          course: contactData.course,
          message: contactData.message,
          privacy: contactData.privacy,
        },
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTO_ID!,
        {
          name: contactData.name,
          email: contactData.email,
        },
      );
    } catch (error) {
      console.log((error as Error).message);
    }

    formRef.current?.submit();
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
          ref={formRef}
          className="form"
          onSubmit={submitForm}
        >
          <input
            type="hidden"
            name="u"
            value="23069d5189e40c66d49cf3aba"
            readOnly
          />
          <input type="hidden" name="id" value="8e51c725c5" readOnly />
          <div
            className="hidden"
            aria-label="Please leave the following three fields empty"
            aria-hidden="true"
          >
            <label htmlFor="b_name">Name: </label>
            <input
              type="text"
              name="b_name"
              tabIndex={-1}
              value=""
              placeholder="Freddie"
              id="b_name"
              readOnly
            />

            <label htmlFor="b_email">Email: </label>
            <input
              type="email"
              name="b_email"
              tabIndex={-1}
              value=""
              placeholder="youremail@gmail.com"
              id="b_email"
              readOnly
            />

            <label htmlFor="b_comment">Comment: </label>
            <textarea
              name="b_comment"
              tabIndex={-1}
              placeholder="Please comment"
              id="b_comment"
            ></textarea>
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Dinos tu correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="MERGE0"
              className="form__control"
              value={contactData.email}
              required
              onChange={changeContactData}
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
              value={contactData.phone}
              onChange={changeContactData}
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
              value={contactData.name}
              required
              onChange={changeContactData}
            />
          </div>
          <div className="form__group">
            <label htmlFor="course" className="form__label">
              ¿Sobre qué quieres información?
            </label>
            <select
              name="MERGE2"
              id="course"
              className="form__control"
              value={contactData.course}
              onChange={changeContactData}
            >
              <option value="crafting">
                Crafting en Desarrollo Web Profesional
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
              ¿Quieres añadir algo más? (opcional)
            </label>
            <textarea
              name="MERGE3"
              id="message"
              className="form__control"
              rows={5}
              value={contactData.message}
              onChange={changeContactData}
            ></textarea>
          </div>
          <div className="form__group">
            <label htmlFor="privacy">
              <input
                type="checkbox"
                id="privacy"
                checked={contactData.privacy}
                required
                onChange={changeContactData}
              />{" "}
              Acepta la{" "}
              <Link href="privacidad" target="_blank">
                política de privacidad
              </Link>
            </label>
          </div>
          <div className="form__submit">
            <button
              className="button button--outline button--full"
              type="submit"
              disabled={!isFormValid}
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.4875960748004!2d2.1567085!3d41.406933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6613a9245591fc23%3A0x7cad1d5fd476f369!2sThe%20Refactor%20Project!5e0!3m2!1ses!2ses!4v1711020295162!5m2!1ses!2ses"
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
