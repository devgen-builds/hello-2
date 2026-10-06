import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("shows the project name and ticker", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Hello DEVGEN");
    expect(heading).toHaveTextContent("$HELLO");
  });

  it("shows a plan with three milestones, each with a status", () => {
    render(<App />);
    const items = within(screen.getByRole("list")).getAllByRole("listitem");
    expect(items).toHaveLength(3);
    for (const item of items) {
      expect(item.textContent).toMatch(/done|in progress|planned/);
    }
  });
});
