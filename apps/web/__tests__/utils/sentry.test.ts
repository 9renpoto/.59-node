import { init } from "../../utils/sentry";

describe("sentry", () => {
  it("init", () => expect(init()).toBeUndefined());
});
