import initStoryshots, {
  multiSnapshotWithOptions,
} from "@storybook/addon-storyshots";
import { render } from "@testing-library/react";
import path from "path";

const reactTestingLibrarySerializer: jest.SnapshotSerializerPlugin = {
  print: (val, serialize) => serialize((val as any).container.firstChild),
  test: (val) => val && val.hasOwnProperty("container"),
};

initStoryshots({
  configPath: path.join(process.cwd(), "./.storybook"),
  framework: "react",
  snapshotSerializers: [reactTestingLibrarySerializer],
  test: multiSnapshotWithOptions({
    renderer: render,
  }),
});
