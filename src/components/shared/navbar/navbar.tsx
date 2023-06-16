import { component$ } from "@builder.io/qwik";

export const Navbar = component$(() => {
  return (
    <header>
      <nav class="container flex items-start py-4 mt-4 sm:mt-12 rounded-lg">
        <div class="py-1">
          <img height={50} width={50} src="favicon.svg" alt="logo" />
        </div>
        <ul class="hidden sm:flex flex-1 m-auto justify-end items-center gap-12 text-secondary uppercase text-xs">
          <li>servicios</li>
          <li>nosotros</li>
          <li>contacto</li>
          <button type="button" class="bg-neutral text-secondary btn">
            Whatsapp
          </button>
        </ul>
        <div class="flex sm:hidden flex-1 justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
            ></path>
          </svg>
        </div>
      </nav>
    </header>
  );
});
