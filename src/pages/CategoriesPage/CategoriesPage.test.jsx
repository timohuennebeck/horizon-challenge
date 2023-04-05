import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CategoriesPage from "./CategoriesPage";
import MovieElement from "../../components/MovieElement/MovieElement";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));
jest.mock("../../components/MovieElement/MovieElement", () => {
  return jest.fn(() => <div data-testid="mock-movie-element" />);
});

describe("CategoriesPage", () => {
  beforeEach(() => {
    useParams.mockReturnValue({ id: "123" });

    axios.get.mockResolvedValue({
      data: {
        results: [
          { id: 1, title: "Movie 1" },
          { id: 2, title: "Movie 2" },
        ],
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders movies from API response", async () => {
    render(<CategoriesPage />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
          process.env.REACT_APP_MOVIES_API_KEY +
          "&with_genres=123"
      );
    });

    expect(screen.getAllByTestId("mock-movie-element")).toHaveLength(2);
  });
});
