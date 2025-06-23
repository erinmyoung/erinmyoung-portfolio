import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { ToggleDarkMode } from "../ToggleDarkMode";
import { useTheme } from "../../context/DarkModeContext";

// Mock context
vi.mock("../../context/DarkModeContext", () => ({
  useTheme: vi.fn(),
}));

describe("ToggleDarkMode", () => {
  beforeEach(() => {
    (useTheme as ReturnType<typeof vi.fn>).mockReturnValue({
      darkMode: false,
      toggleTheme: vi.fn(),
    });
  });

  it("renders the toggle with light details when darkMode is false", () => {
    (useTheme as ReturnType<typeof vi.fn>).mockReturnValue({
      darkMode: false,
      toggleTheme: vi.fn(),
    });
    render(<ToggleDarkMode />);
    const toggle = screen.getByRole("checkbox", { checked: false });
    const toggleCircle = screen.getByLabelText("Toggle circle");
    expect(toggle).toHaveAttribute("aria-label", "Toggle theme");
    expect(toggle?.className).toContain("justify-end");
    expect(toggleCircle?.className).toContain("translate-x-0");
  });

  it("renders the toggle with dark details when darkMode is true", () => {
    (useTheme as ReturnType<typeof vi.fn>).mockReturnValue({
      darkMode: true,
      toggleTheme: vi.fn(),
    });
    render(<ToggleDarkMode />);
    const toggle = screen.getByRole("checkbox", { checked: true });
    const toggleCircle = screen.getByLabelText("Toggle circle");
    expect(toggle).toHaveAttribute("aria-label", "Toggle theme");
    expect(toggle?.className).not.toContain("justify-end");
    expect(toggleCircle?.className).toContain("translate-x-9");
  });
});
