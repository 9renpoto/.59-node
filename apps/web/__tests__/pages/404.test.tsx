import { render } from "@testing-library/preact";
import Page from "../../pages/404";

describe("404", () => {
  it("render", () => {
    const { container } = render(<Page />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          style="color: rgb(0, 0, 0); background: rgb(255, 255, 255); font-family: -apple-system, BlinkMacSystemFont, Roboto, \\"Segoe UI\\", \\"Fira Sans\\", Avenir, \\"Helvetica Neue\\", \\"Lucida Grande\\", sans-serif; height: 100vh; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;"
        >
          <div>
            <style>
              body { margin: 0 }
            </style>
            <h1
              style="display: inline-block; border-right: 1px solid rgba(0, 0, 0,.3); margin: 0px 20px 0px 0px; padding: 10px 23px 10px 0px; font-size: 24px; font-weight: 500; vertical-align: top;"
            >
              404
            </h1>
            <div
              style="display: inline-block; text-align: left; line-height: 49px; height: 49px; vertical-align: middle;"
            >
              <h2
                style="font-size: 14px; font-weight: normal; line-height: inherit; margin: 0px; padding: 0px;"
              >
                This page could not be found
                .
              </h2>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
