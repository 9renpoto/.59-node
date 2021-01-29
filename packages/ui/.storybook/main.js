module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  // https://github.com/storybookjs/storybook/issues/11146#issuecomment-645341199
  typescript: {
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      },
    },
  },
  babel: async ({ plugins, ...options }) => ({
    plugins,
    ...options,
  }),
};
