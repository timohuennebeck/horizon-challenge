import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";

describe("DefaultLayout", () => {
  test("renders the logo and outlet", () => {
    render(
      <BrowserRouter>
        <DefaultLayout />
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
