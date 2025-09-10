# Repository Guidelines

## Project Structure & Module Organization
- Monorepo managed by npm workspaces.
- `packages/ui`: Preact component library (Storybook, TypeScript). Stories live next to components as `*.stories.tsx` in `src/`.
- `services/web`: Astro app consuming `@app/ui`.
- Root config: `biome.json` (lint/format), `cspell.json` (spelling), `.pre-commit-config.yaml`, GitHub Actions workflows in `.github/`.

## Build, Test, and Development Commands
- Install: `npm ci` (or `npm install` for local) at repo root.
- Build all workspaces: `npm run build` (runs `tsc` in `@app/ui` and `astro build` in `@app/web`).
- Test all workspaces: `npm test` (Storybook Test Runner with coverage in `@app/ui`).
- Run Storybook: `npm run storybook -w @app/ui` (dev) or `npm run build-storybook -w @app/ui` (static build to `packages/ui/storybook-static`).
- Run the web app: `npm run dev -w @app/web`, preview a build: `npm run preview -w @app/web`.

## Coding Style & Naming Conventions
- Language: TypeScript (ESM). UI uses Preact; Web uses Astro + Preact.
- Formatting/linting: Biome. Validate locally with `npx biome ci .` (CI runs the same). Indentation: spaces (2).
- Spelling: `npx cspell .` using `cspell.json`.
- Component files: `PascalCase` directories and files under `packages/ui/src/<Component>/index.tsx` with adjacent `*.stories.tsx`.

## Testing Guidelines
- Framework: Storybook Test Runner (`@storybook/test-runner`) executing stories as tests.
- Add or update tests by writing stories: `Component.stories.tsx` colocated with the component.
- Coverage: generated in `packages/ui/coverage`; CI uploads results to Codecov.
- Run: `npm test` at root, or `npm test -w @app/ui` for package-only.

## Commit & Pull Request Guidelines
- Commit style: Conventional Commits (e.g., `feat:`, `fix:`, `chore:`, optional scopes like `refactor(services): ...`).
- Before opening a PR, run: `npm ci && npm run build && npm test && npx biome ci . && npx cspell .`.
- PRs should include: clear description, linked issues, and screenshots/GIFs for UI changes. Keep diffs focused and small when possible.

## Security & Tooling
- Do not commit secrets. Pre-commit hooks run secretlint; enable with `pre-commit install` if you use pre-commit.
- CI targets Node LTS; match locally when possible. Dependabot keeps dependencies updated.
