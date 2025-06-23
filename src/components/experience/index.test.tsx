import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { motion } from "framer-motion";
import { Experience } from "./index";
import { SectionTitle } from "../SectionTitle";

describe("Experience", () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it("should render a motion div", () => {
    render(<Experience />);
    render(<motion.div data-testid="my-motion-div">Test</motion.div>);
    const motionDiv = screen.getByTestId("my-motion-div");
    expect(motionDiv).toBeDefined();
  });

  it("renders the experience section with details", () => {
    render(<SectionTitle text="My Section" />);
    expect(screen.getByText("My Section")).toBeInTheDocument();
    render(<Experience />);
    expect(
      screen.getByText(
        "Frontend Engineer | IGN Entertainment (Gamer Network Ltd) London"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("April 2020 - December 2024")).toBeInTheDocument();
    const separators = screen.getAllByAltText("Section separating border");
    expect(separators.length).toBe(2);
    expect(separators[0]).toHaveAttribute("loading", "lazy");
    expect(separators[0]).toHaveAttribute("width", "730");
    expect(separators[0]).toHaveAttribute("height", "64");
  });
});
