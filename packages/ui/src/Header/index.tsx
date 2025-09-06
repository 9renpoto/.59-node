import { Citrus } from "lucide-preact";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [{ name: "Home", href: "/" }];

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <a href="/" class="flex items-center">
          <Citrus aria-hidden="true" />
          <div class="text-2xl  ml-1 font-bold">Sample</div>
        </a>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li key={menu.name}>
            <a
              href={menu.href}
              class={`text-gray-500 hover:text-gray-700 py-1 border-gray-500 ${
                active === menu.name ? " font-bold border-b-2" : ""
              }`}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
      <div class="flex items-center">
        <a
          href="/login"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log in
        </a>
      </div>
    </div>
  );
}
