import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DefaultInterface from "./DefaultInterface";

describe("DefaultInterface", () => {
  test("renders the logo and Outlet correctly", () => {
    render(
      <BrowserRouter>
        <DefaultInterface />
      </BrowserRouter>
    );

    const logoLink = screen.getByRole("link");
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");

    const logoImg = screen.getByRole("img");
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveClass("interface__nav-logo-img");

    const outlet = screen.getByTestId("interface-outlet");
    expect(outlet).toBeInTheDocument();
    expect(outlet).toHaveClass("interface__outlet");
  });
});
