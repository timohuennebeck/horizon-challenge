// MovieElement.test.tsx

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MovieElement from "./MovieElement";

const mockMovieItem = {
  id: 12345,
  original_title: "Test Movie",
  release_date: "2023-04-05",
  poster_path: "/testposterpath.jpg",
};

describe("MovieElement", () => {
  test("renders the MovieElement component", () => {
    render(
      <MemoryRouter>
        <MovieElement item={mockMovieItem} />
      </MemoryRouter>
    );

    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("2023-04-05")).toBeInTheDocument();

    const movieLink = screen.getByRole("link");
    expect(movieLink).toHaveAttribute("href", "/movies/12345");

    const movieImg = screen.getByRole("img");
    expect(movieImg).toHaveAttribute(
      "src",
      "http://image.tmdb.org/t/p/w500//testposterpath.jpg"
    );
  });
});
