import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { useParams } from "react-router-dom";
import CategoriesPage from "./CategoriesPage";

jest.mock("../../utils/apiCalls", () => ({
  DiscoverMovies: jest.fn(() =>
    Promise.resolve([
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ])
  ),
}));

jest.mock("axios");

// mocks the useParams function from react-router-dom
jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

// mocks a custom MovieElement component
jest.mock("../../components/MovieElement/MovieElement", () => {
  // returns a Jest mock function that creates a div element with a test ID
  return jest.fn(() => <div data-testid="mock-movie-element" />);
});

// declares a test suite for the CategoriesPage component
describe("CategoriesPage", () => {
  // executed before each test case
  beforeEach(() => {
    // mocks the useParams function to return an object with an "id" property set to "123"
    useParams.mockReturnValue({ id: "123" });
  });

  // executes after each test case
  afterEach(() => {
    // clears all mock functions
    jest.clearAllMocks();
  });

  // declares a test case for rendering movies from an API response
  it("renders movies from API response", async () => {
    // Rendering the CategoriesPage component
    render(<CategoriesPage />);

    // waits for the component to render and the API call to complete
    await waitFor(() => {
      // expects that two mock movie elements were rendered
      expect(screen.getAllByTestId("mock-movie-element")).toHaveLength(2);
    });
  });
});
