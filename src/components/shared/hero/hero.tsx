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
          <p class="text-vibranio-gray text-lg text-center lg:text-left mb-6">
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
            src="webanimation.gif"
            alt="HeroImg"
          />
        </div>
      </div>
      <div class="hero min-h-screen bg-base-200 mt-6">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
});
