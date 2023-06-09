import { component$ } from "@builder.io/qwik";

export const Hero = component$(() => {
  return (
    <section class="relative">
      <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h2 class="text-vibrano-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            Entra al mundo de la <br />
            <span class="font-bold">tecnología</span>
          </h2>
          <p class="text-vibranio-grey text-lg text-center lg:text-left mb-6">
            Dale a tu negocio la presencia que se merece.
            <br />
            Obten tu propia pagina profesional por tal solo{" "}
            <span class="font-bold">$200</span> al año
          </p>
          <div class="flex justify-center flex-wrap gap-6">
            <button class="btn btn-purple">Contactar</button>
            <button class="btn btn-white">Whatsapp</button>
          </div>
        </div>
        <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
            src="https://i.gifer.com/XVZN.gif"
            alt="HeroImg"
          />
        </div>
      </div>
    </section>
  );
});
