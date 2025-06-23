import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { About } from "./index";

vi.mock("../Icon", () => ({
  Icon: (props: { alt: string; src: string }) => (
    <img data-testid="icon" {...props} />
  ),
}));

describe("About", () => {
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

  it("renders the about with details", () => {
    render(<About />);
    expect(screen.getByText("New York, NY")).toBeInTheDocument();
    expect(screen.getByText("erinmyoung12@gmail.com")).toBeInTheDocument();
    const icons = screen.getAllByTestId("icon");
    expect(icons.length).toBe(4);
    expect(icons[0]).toHaveAttribute("alt", "Map icon");
    expect(icons[1]).toHaveAttribute("alt", "Email icon");
    expect(icons[2]).toHaveAttribute("alt", "Phone icon");
    expect(icons[3]).toHaveAttribute("alt", "Education icon");
  });

  it("renders Erin image with correct alt and loading attributes", () => {
    render(<About />);
    const erinImg = screen.getByAltText("Erin Young image");
    expect(erinImg).toHaveAttribute("loading", "eager");
    expect(erinImg).toHaveAttribute("width", "320");
    expect(erinImg).toHaveAttribute("height", "320");
  });
});
