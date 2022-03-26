import { render } from "@testing-library/preact";
import Page from "../../pages";

describe("index", () => {
  it("render", () => {
    const { container } = render(<Page />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          Hello World.
           
          <ul>
            <li>
              <a
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/ssr"
              >
                SSR
              </a>
            </li>
            <li>
              <a
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
