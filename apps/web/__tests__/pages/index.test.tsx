import { render } from "@testing-library/preact";
import Page from "../../pages";

describe("index", () => {
  it("render", () => {
    const { container } = render(<Page />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          __self="[object Object]"
          __source="[object Object]"
        >
          Hello World.
           
          <ul
            __self="[object Object]"
            __source="[object Object]"
          >
            <li
              __self="[object Object]"
              __source="[object Object]"
            >
              <a
                __self="[object Object]"
                __source="[object Object]"
                href="/about"
              >
                About
              </a>
            </li>
            <li
              __self="[object Object]"
              __source="[object Object]"
            >
              <a
                __self="[object Object]"
                __source="[object Object]"
                href="/ssr"
              >
                SSR
              </a>
            </li>
            <li
              __self="[object Object]"
              __source="[object Object]"
            >
              <a
                __self="[object Object]"
                __source="[object Object]"
                href="/ssg"
              >
                SSG
              </a>
            </li>
          </ul>
        </div>
      </div>
    `);
  });
});
