import { Citrus, Menu, X } from "lucide-preact";
import { useState } from "preact/hooks";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const menus = [{ name: "Home", href: "/" }];

  return (
    <header class="bg-white w-full py-4 px-6 md:px-8 flex flex-col md:flex-row gap-4 shadow-md sticky top-0 z-50">
      <div class="flex items-center justify-between flex-1">
        <a href="/" class="flex items-center">
          <Citrus aria-hidden="true" />
          <div class="text-2xl ml-1 font-bold">Sample</div>
        </a>
        <div class="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            class="text-gray-500 hover:text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <nav class={`md:flex items-center gap-6 ${isOpen ? "block" : "hidden"}`}>
        <ul class="flex flex-col md:flex-row items-center gap-6">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.href}
                class={`text-gray-500 hover:text-gray-700 py-1 border-gray-500 ${
                  active === menu.name ? "font-bold border-b-2" : ""
                }`}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
        <div class="flex items-center mt-4 md:mt-0">
          <a
            href="/login"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
          >
            Log in
          </a>
        </div>
      </nav>
    </header>
  );
}
