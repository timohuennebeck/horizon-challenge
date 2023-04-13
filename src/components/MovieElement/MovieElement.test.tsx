import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MovieElement from "./MovieElement";
import { MovieContext } from "../../App";

const mockMovieItem = {
  id: 12345,
  original_title: "Test Movie",
  release_date: "2023-04-05",
  poster_path: "/testposterpath.jpg",
};

const contextValue = {
  favorites: {},
  updateFavorite: jest.fn(),
};

describe("MovieElement", () => {
  test("renders the MovieElement component", () => {
    render(
      <MemoryRouter>
        <MovieElement item={mockMovieItem} />
      </MemoryRouter>
    );

    // ensures that the movie name and release date are visible
    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("2023-04-05")).toBeInTheDocument();

    // ensures that the movie link is visible and has the correct href
    const movieLink = screen.getByRole("link");
    expect(movieLink).toHaveAttribute("href", "/movies/12345");

    // ensures that the movie image is visible and has the correct src
    const movieImg = screen.getByRole("img");
    expect(movieImg).toHaveAttribute(
      "src",
      "http://image.tmdb.org/t/p/w500//testposterpath.jpg"
    );
  });

  test("should render the correct heart based on the id", () => {
    const { rerender } = render(
      <MemoryRouter>
        <MovieContext.Provider value={contextValue}>
          <MovieElement item={mockMovieItem} />
        </MovieContext.Provider>
      </MemoryRouter>
    );

    // check if the outlined heart is rendered and filled heart is not
    expect(screen.queryByTestId("filled-heart")).not.toBeInTheDocument();
    expect(screen.getByTestId("outlined-heart")).toBeInTheDocument();

    // update the context value to make the movie a favorite
    const favoriteContextValue = {
      ...contextValue,
      favorites: { [mockMovieItem.id]: true },
    };

    // re-render the component with the updated context value
    rerender(
      <MemoryRouter>
        <MovieContext.Provider value={favoriteContextValue}>
          <MovieElement item={mockMovieItem} />
        </MovieContext.Provider>
      </MemoryRouter>
    );

    // check if the filled heart is rendered and outlined heart is not
    expect(screen.getByTestId("filled-heart")).toBeInTheDocument();
    expect(screen.queryByTestId("outlined-heart")).not.toBeInTheDocument();
  });
});
