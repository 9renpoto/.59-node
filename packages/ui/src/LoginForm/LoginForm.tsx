import { tw } from "@twind/core";
import type { FunctionComponent } from "preact";

export const LoginForm: FunctionComponent = () => {
  return (
    <form class={tw`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}>
      <div class={tw`mb-4`}>
        <label
          class={tw`block text-gray-700 text-sm font-bold mb-2`}
          for="email"
        >
          Email
        </label>
        <input
          class={tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div class={tw`mb-6`}>
        <label
          class={tw`block text-gray-700 text-sm font-bold mb-2`}
          for="password"
        >
          Password
        </label>
        <input
          class={tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
          id="password"
          type="password"
          placeholder="******************"
        />
      </div>
      <div class={tw`mb-4`}>
        <button
          class={tw`bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline`}
          type="button"
        >
          Sign in with GitHub
        </button>
      </div>
      <div class={tw`flex items-center justify-between`}>
        <button
          class={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          type="button"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};
