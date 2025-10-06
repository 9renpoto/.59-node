import { Citrus, Github } from "lucide-preact";

type MenuItem = {
  name: string;
  href: string;
};

type Menu = {
  title: string;
  children: MenuItem[];
};

export type FooterProps = {
  menus: Menu[];
};

export default function Footer({ menus }: FooterProps) {
  return (
    <div class="bg-white">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row w-full gap-8 md:gap-16 px-4 sm:px-6 lg:px-8 py-8 text-sm">
        <div class="flex-1">
          <div class="flex items-center gap-1">
            <Citrus class="inline-block" aria-hidden="true" />
            <div class="font-bold text-2xl">Sample</div>
          </div>
          <div class="text-gray-500">Full Stack Framework</div>
        </div>

        {menus.map((item) => (
          <div class="mb-4" key={item.title}>
            <div class="font-bold">{item.title}</div>
            <ul class="mt-2">
              {item.children.map((child) => (
                <li class="mt-2" key={child.name}>
                  <a class="text-gray-500 hover:text-gray-700" href={child.href}>
                    {child.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div class="text-gray-500 space-y-2">
          <div class="text-xs">
            Copyright © {new Date().getFullYear()} 9renpoto
            <br />
            All right reserved.
          </div>

          <a
            href="https://github.com/9renpoto/.59-node"
            class="inline-block hover:text-black"
            aria-label="GitHub"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}
