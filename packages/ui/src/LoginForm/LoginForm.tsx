import { tw } from "@twind/core";
import type { FunctionComponent } from "preact";

export const LoginForm: FunctionComponent = () => {
  return (
    <div class={tw`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}>
      <div class={tw`mb-4`}>
        <button
          class={tw`bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline`}
          type="button"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};
