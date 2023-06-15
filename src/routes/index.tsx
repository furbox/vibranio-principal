import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/shared/navbar/navbar";
import { Hero } from "~/components/shared/hero/hero";
import { Features } from "~/components/shared/features/features";
import { CallAction } from "~/components/shared/callaction/callaction";
import { Services } from "~/components/shared/services/services";
import { Faqs } from "~/components/shared/faqs/faqs";
import { Contact } from "~/components/shared/contact/contact";
import { Footer } from "~/components/shared/footer/footer";
import { Ws } from "~/components/shared/floatbutton/whatsapp";

export default component$(() => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <CallAction />
      <Faqs />
      <Contact />
      <Ws />
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Bienvenido a Vibranio.com.mx",
  meta: [
    {
      name: "description",
      content:
        "Vibranio.com.mx es una empresa de desarrollo web enfocada a emprendedores y pequeñas empresas",
    },
  ],
};
