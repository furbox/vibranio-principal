import { component$ } from '@builder.io/qwik';

export const Navbar = component$(() => {
  return (
    <header>
        <nav class="container flex items-start py-4 mt-4 sm:mt-12">
            <div class="py-1">
                <img height={50} width={50} src="favicon.svg" alt="logo" />
            </div>
            <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-vibranio-blue uppercase text-xs">
                <li>servicios</li>
                <li>nosotros</li>
                <li>contacto</li>
                <button type='button' class="bg-vibranio-red text-white rounded-md px-7 py-3">Whatsapp</button>
            </ul>
            <div class="flex sm:hidden flex-1 justify-end">
                <i class="text-2xl fa-solid fa-bars"></i>
            </div>
        </nav>
    </header>
  );
});
