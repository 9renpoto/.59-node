# @app/ui

## Testing

The tests for the components in this package are run using Storybook's `test-runner`. However, there is a known issue with the current setup that causes all tests to fail with the following error:

```
ReferenceError: Cannot access 'StorybookTestRunnerError' before initialization
```

This issue seems to be caused by an incompatibility between the version of `@storybook/test-runner` and the other Storybook packages in this project. The test runner is not compatible with Storybook v9, which is used in this project.

As a workaround, the tests can be visually inspected in Storybook, but the automated tests are not currently functional.

## Install

> TBA

## Usage

> TBA

## Contributing

PRs accepted.

## License

MIT © TBA
