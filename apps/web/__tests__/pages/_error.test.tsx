import { render } from "@testing-library/preact";
import Page from "../../pages/_error";

describe("Error", () => {
  it("render", () => {
    const { container } = render(<Page statusCode={200} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          style="font-family: -apple-system, BlinkMacSystemFont, Roboto, \\"Segoe UI\\", \\"Fira Sans\\", Avenir, \\"Helvetica Neue\\", \\"Lucida Grande\\", sans-serif; height: 100vh; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;"
        >
          <div>
            <style>
              
                      body { margin: 0; color: #000; background: #fff; }
                      .next-error-h1 {
                        border-right: 1px solid rgba(0, 0, 0, .3);
                      }

                      @media (prefers-color-scheme: dark) {
                        body { color: #fff; background: #000; }
                        .next-error-h1 {
                          border-right: 1px solid rgba(255, 255, 255, .3);
                        }
                      }
            </style>
            <h1
              class="next-error-h1"
              style="display: inline-block; margin: 0px 20px 0px 0px; padding: 0px 23px 0px 0px; font-size: 24px; font-weight: 500; vertical-align: top; line-height: 49px;"
            >
              200
            </h1>
            <div
              style="display: inline-block; text-align: left; line-height: 49px; height: 49px; vertical-align: middle;"
            >
              <h2
                style="font-size: 14px; font-weight: normal; line-height: 49px; margin: 0px; padding: 0px;"
              >
                An unexpected error has occurred
                .
              </h2>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
