import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionTitle } from "../SectionTitle";

// Mock constants
vi.mock("../../constants/lines", () => ({
  SECTION_TITLE_SRC: "light-src.png",
  DARK_SECTION_TITLE_SRC: "dark-src.png",
}));

// Mock context
const mockUseTheme = vi.fn();
vi.mock("../../context/DarkModeContext", () => ({
  useTheme: () => mockUseTheme(),
}));

describe("SectionTitle", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the section title text", () => {
    mockUseTheme.mockReturnValue({ darkMode: false });
    render(<SectionTitle text="My Section" />);
    expect(screen.getByText("My Section")).toBeInTheDocument();
  });

  it("renders the image with light src when darkMode is false", () => {
    mockUseTheme.mockReturnValue({ darkMode: false });
    render(<SectionTitle text="Test" />);
    const img = screen.getByRole("img", { hidden: true });
    expect(img).toHaveAttribute("src", "light-src.png");
  });

  it("renders the image with dark src when darkMode is true", () => {
    mockUseTheme.mockReturnValue({ darkMode: true });
    render(<SectionTitle text="Test" />);
    const img = screen.getByRole("img", { hidden: true });
    expect(img).toHaveAttribute("src", "dark-src.png");
  });

  it("applies default bgColor and darkBgColor classes", () => {
    mockUseTheme.mockReturnValue({ darkMode: false });
    render(<SectionTitle text="Test" />);
    const container = screen.getByText("Test").parentElement;
    expect(container?.className).toContain("bg-white");
    expect(container?.className).toContain("dark:bg-darkmode-background");
  });

  it("applies custom bgColor and darkBgColor classes", () => {
    mockUseTheme.mockReturnValue({ darkMode: false });
    render(
      <SectionTitle
        text="Test"
        bgColor="bg-red-500"
        darkBgColor="dark:bg-blue-500"
      />
    );
    const container = screen.getByText("Test").parentElement;
    expect(container?.className).toContain("bg-red-500");
    expect(container?.className).toContain("dark:bg-blue-500");
  });

  it("renders the image with correct alt and loading attributes", () => {
    mockUseTheme.mockReturnValue({ darkMode: false });
    render(<SectionTitle text="Test" />);
    const img = screen.getByAltText("Section title lines");
    expect(img).toHaveAttribute("loading", "lazy");
    expect(img).toHaveAttribute("width", "318");
    expect(img).toHaveAttribute("height", "82");
  });

  it("renders h2 with correct classes", () => {
    mockUseTheme.mockReturnValue({ darkMode: false });
    render(<SectionTitle text="Test" />);
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2.className).toMatch(/font-bungee/);
    expect(h2.className).toMatch(/text-title-small/);
  });
});
