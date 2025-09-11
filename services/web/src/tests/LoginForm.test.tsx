import { LoginForm } from "@app/ui/LoginForm";
import { render, screen } from "@testing-library/preact";
import { expect, test } from "vitest";

test("LoginForm should render the GitHub sign-in button", () => {
  render(<LoginForm />);

  // Check for the "Sign in with GitHub" button
  const githubButton = screen.getByRole("button", {
    name: "Sign in with GitHub",
  });
  expect(githubButton).not.toBeNull();
});
