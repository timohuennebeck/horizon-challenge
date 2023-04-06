// Import necessary dependencies
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

// mocks axios
jest.mock("axios");

describe("HomePage component", () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({
      data: {
        genres: [
          { id: 1, name: "Action" },
          { id: 2, name: "Adventure" },
        ],
      },
    });

    axios.get.mockResolvedValueOnce({
      data: {
        results: [
          { original_title: "Test Movie 1" },
          { original_title: "Test Movie 2" },
        ],
      },
    });

    axios.get.mockResolvedValueOnce({
      data: {
        results: [
          { original_title: "Trending Movie 1" },
          { original_title: "Trending Movie 2" },
        ],
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the HomePage component and displays the movie categories", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // checks if the "Categories" header is visible
    const categoriesHeader = screen.getByText("Categories");
    expect(categoriesHeader).toBeInTheDocument();

    // checks if the genres are visible
    const actionGenre = screen.getByText("Action");
    const adventureGenre = screen.getByText("Adventure");
    expect(actionGenre).toBeInTheDocument();
    expect(adventureGenre).toBeInTheDocument();
  });

  test("filters popular movies based on user input", async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // gets the users search input
    const searchInput = screen.getByPlaceholderText(
      "Search for a movie, tv show, person..."
    );

    // simulates the users input
    fireEvent.change(searchInput, { target: { value: "Test Movie 1" } });

    // checks if the filtered movie is visible
    const filteredMovie = await screen.findByText("Test Movie 1");
    expect(filteredMovie).toBeInTheDocument();

    // checks if the other movie is not visible
    const otherMovie = screen.queryByText("Test Movie 2");
    expect(otherMovie).not.toBeInTheDocument();
  });
});
