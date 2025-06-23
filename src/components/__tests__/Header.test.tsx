import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { useTheme } from "../../context/DarkModeContext";
import useScreenWidth from "../../hooks/useScreenSize";

// Mock dependencies
vi.mock("../../context/DarkModeContext", () => ({
  useTheme: vi.fn(),
}));
vi.mock("../../hooks/useScreenSize", () => ({
  default: vi.fn(),
}));

vi.mock("../Icon", () => ({
  Icon: (props: { alt: string; src: string }) => (
    <img data-testid="icon" {...props} />
  ),
}));
vi.mock("../ToggleDarkMode", () => ({
  ToggleDarkMode: () => <button>ToggleDarkMode</button>,
}));
vi.mock("../Arrow", () => ({
  Arrow: () => <svg data-testid="arrow" />,
}));

describe("Header", () => {
  beforeEach(() => {
    (useTheme as ReturnType<typeof vi.fn>).mockReturnValue({
      darkMode: false,
      toggleTheme: vi.fn(),
    });
    (useScreenWidth as ReturnType<typeof vi.fn>).mockReturnValue(800);
  });

  it("renders the header with name and strapline", () => {
    render(<Header />);
    expect(screen.getByText("Erin Young")).toBeInTheDocument();
    expect(screen.getByText("Frontend Engineer")).toBeInTheDocument();
  });

  it("renders ToggleDarkMode button", () => {
    render(<Header />);
    expect(screen.getByText("ToggleDarkMode")).toBeInTheDocument();
  });

  it("renders GitHub and LinkedIn icons", () => {
    render(<Header />);
    const icons = screen.getAllByTestId("icon");
    expect(icons.length).toBe(2);
    expect(icons[0]).toHaveAttribute("alt", "GitHub icon");
    expect(icons[1]).toHaveAttribute("alt", "LinkedIn icon");
  });

  it("uses dark icons when darkMode is true", () => {
    (useTheme as ReturnType<typeof vi.fn>).mockReturnValue({
      darkMode: true,
      toggleTheme: vi.fn(),
    });
    render(<Header />);
    const icons = screen.getAllByTestId("icon");
    expect(icons[0]).toHaveAttribute("alt", "GitHub icon");
    expect(icons[1]).toHaveAttribute("alt", "LinkedIn icon");
  });
});
