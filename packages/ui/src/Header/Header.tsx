import { tw } from "@twind/core";
import type { FunctionComponent } from "preact";

export const Header: FunctionComponent = () => {
  return (
    <header
      class={tw`bg-white shadow-md px-4 py-2 flex items-center justify-between`}
    >
      <div class={tw`flex items-center`}>
        <a href="/" class={tw`text-2xl font-bold`}>
          My App
        </a>
        <div class={tw`ml-4`}>
          <input
            type="text"
            placeholder="Search..."
            class={tw`border rounded py-2 px-3`}
          />
        </div>
      </div>
      <div>
        <a
          href="/login"
          class={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        >
          Log in
        </a>
      </div>
    </header>
  );
};
