# Contributing to This Project

Thank you for your interest in contributing to this project. We welcome all forms of contributions, including bug reports, feature requests, and pull requests.

## How to Contribute

We use [GitHub Issues](https://github.com/your-repo/issues) for bug reports and feature suggestions.

-   **Bug Reports:** When reporting a bug, please provide detailed steps to reproduce it, the expected behavior, and the actual behavior.
-   **Feature Requests:** If you want to add a new feature, please describe the problem it solves and the specific use case.

## Development Workflow

To contribute code, please follow these steps to submit a pull request.

This project uses **npm workspaces**. Make sure you are using a version of npm that supports workspaces (v7 or later).

1.  **Fork the Repository:** First, fork this repository to your own GitHub account.
2.  **Clone the Repository:** Clone your forked repository to your local machine.
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
    cd YOUR_REPOSITORY
    ```
3.  **Install Dependencies:** Run the following command in the project's root directory to install all dependencies for the workspaces.
    ```bash
    npm install
    ```
4.  **Create a Branch:** Create a new branch for your feature or bug fix.
    ```bash
    git checkout -b my-new-feature
    ```
5.  **Edit the Code:** Make your changes. This project uses [Biome](https://biomejs.dev/) to enforce a consistent code style. Formatting and linting checks will run automatically before you commit.
6.  **Run Tests:** Once you have completed your changes, run the following command to execute the tests across all workspaces. Please ensure all tests pass before submitting.
    ```bash
    npm run test --workspaces
    ```
7.  **Commit and Push:** Commit your changes and push them to your forked repository.
    ```bash
    git commit -m "feat: Add new feature"
    git push origin my-new-feature
    ```
8.  **Create a Pull Request:** On GitHub, create a pull request from your forked repository's branch to this repository's `main` branch. Please provide a clear description of your changes.

---

## Guidelines for AI Coding Agents

This section is for AI coding agents such as `codex`, `claude code`, `gemini-cli`, and `google jules`.

You are a valued member of our project team. Please follow these guidelines to assist with development:

1.  **Understand the Context:** Before starting, carefully read `README.md` and this `CONTRIBUTING.md` file to understand the project's overview and development rules.
2.  **Set Up the Environment:** Always run `npm install` in the root directory before you begin your work to ensure all necessary packages for the workspaces are installed.
3.  **Run Tests:** After making any code changes, you **must** run `npm run test --workspaces` to verify that you have not broken any existing functionality. Ensure all tests pass before you conclude your task.
4.  **Seek Clarification:** If a given instruction is ambiguous or could be interpreted in multiple ways, please ask for clarification.
5.  **Submit Pull Requests:** Your changes will be submitted as a pull request for human review. Create clear and descriptive commit messages that explain the purpose of your changes.

Thank you for your cooperation!
