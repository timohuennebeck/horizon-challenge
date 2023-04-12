// Import the required libraries and the component to be tested
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./DetailsPage";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// creates sample data to be used as a response from the mocked axios.get call
const movieSampleData = {
  original_title: "Sample Movie",
  poster_path: "sample_poster.jpg",
  overview: "This is a sample movie overview.",
};

// describes a test for the DetailsPage component.
describe("DetailsPage component", () => {
  // tests whether the movie details are rendered after receiving data.
  it("renders movie details after receiving data", async () => {
    // mocks an axios GET request and resolves with sample data.
    mockedAxios.get.mockResolvedValueOnce({ data: movieSampleData });

    // renders the DetailsPage component with the MemoryRouter.
    render(
      <MemoryRouter initialEntries={["/movie/123"]}>
        <Routes>
          <Route path="/movie/:movieId" element={<DetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    // expects the text "Sample Movie" to not be present.
    expect(screen.queryByText("Sample Movie")).toBeNull();

    // waits for the movie details to be rendered, then checks for the text "Sample Movie" and the overview text.
    await waitFor(() => {
      expect(screen.getByText("Sample Movie")).toBeInTheDocument();
      expect(
        screen.getByText("This is a sample movie overview.")
      ).toBeInTheDocument();
    });

    // gets the movie poster image element and expects it to have the correct src attribute.
    const imgElement = screen.getByAltText("");
    expect(imgElement).toHaveAttribute(
      "src",
      "http://image.tmdb.org/t/p/w500/sample_poster.jpg"
    );

    // expects the "Return To Home" button to be present.
    expect(screen.getByText("Return To Home")).toBeInTheDocument();
  });
});

