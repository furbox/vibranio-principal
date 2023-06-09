import { component$ } from "@builder.io/qwik";

export const Features = component$(() => {
  return (
    <section id="features" class="bg-vibranio-white py-20 mt-20 lg:mt-60">
      <div id="heading" class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-vibranio-blue">Ventajas</h1>
        <p class="text-center text-vibranio-grey mt-4">
          En Vibranio, nos enorgullece ofrecer una solución de presencia digital
          asequible y de calidad para empresas pequeñas. Nuestra plataforma de
          páginas personalizadas te brinda una serie de ventajas y beneficios
          que te ayudarán a destacar en línea:
        </p>
      </div>
      <div id="feature1" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="https://i.gifer.com/XVZN.gif"
              alt="Ventaja1"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">Costo Anual Bajo</h1>
            <p class="text-vibranio-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Sabemos lo importante que es para las empresas pequeñas optimizar
              sus gastos. Es por eso que ofrecemos una solución de landing page
              con un costo anual muy bajo en comparación con otras opciones
              disponibles en el mercado. Obtén una presencia en línea efectiva
              sin comprometer tu presupuesto.
            </p>
          </div>
        </div>
      </div>
      <div id="feature2" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="https://i.gifer.com/XVZN.gif"
              alt="Ventaja1"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">
              Diseño Profesional y Personalizado
            </h1>
            <p class="text-vibranio-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Nuestro equipo de diseñadores expertos trabajará en estrecha
              colaboración contigo para crear una landing page que refleje la
              identidad y la esencia de tu negocio. Nos aseguramos de que tu
              página sea visualmente atractiva, fácil de navegar y se destaque
              entre la competencia.
            </p>
          </div>
        </div>
      </div>
      <div id="feature3" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="https://i.gifer.com/XVZN.gif"
              alt="Ventaja1"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">
              Integración de Redes Sociales
            </h1>
            <p class="text-vibranio-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Potencia tu presencia en línea al integrar tus perfiles de redes
              sociales en tu landing page. Con botones y enlaces a tus cuentas
              de redes sociales, tus clientes podrán seguirte, interactuar
              contigo y compartir tus productos o servicios con su propia red,
              lo que aumentará tu alcance y visibilidad.
            </p>
          </div>
        </div>
      </div>
      <div id="feature4" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="https://i.gifer.com/XVZN.gif"
              alt="Ventaja1"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">Mapa para Localización</h1>
            <p class="text-vibranio-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Facilita a tus clientes encontrar tu ubicación física con la
              integración de un mapa interactivo en tu landing page. Esto es
              especialmente útil para negocios locales, ya que les proporciona
              una forma conveniente de ubicarte y visitarte físicamente.
            </p>
          </div>
        </div>
      </div>
      <div id="feature5" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="https://i.gifer.com/XVZN.gif"
              alt="Ventaja1"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">Diseño Responsivo</h1>
            <p class="text-vibranio-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Tu landing page estará optimizada para adaptarse a cualquier
              dispositivo, ya sea una computadora de escritorio, un teléfono
              móvil o una tableta. Esto garantiza una experiencia de usuario
              consistente y agradable, sin importar cómo accedan tus clientes a
              tu página.
            </p>
          </div>
        </div>
      </div>
      <div id="feature6" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="https://i.gifer.com/XVZN.gif"
              alt="Ventaja1"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">
              Soporte y Atención al Cliente
            </h1>
            <p class="text-vibranio-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              En Vibranio, valoramos la satisfacción de nuestros clientes.
              Estamos aquí para brindarte soporte y atención al cliente en todo
              momento. Si tienes alguna pregunta, consulta o necesitas ayuda,
              nuestro equipo estará encantado de asistirte y asegurarse de que
              obtengas el máximo beneficio de tu landing page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
