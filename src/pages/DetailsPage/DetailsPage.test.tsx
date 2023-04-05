// Import the required libraries and the component to be tested
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./DetailsPage";

// Mock the axios library to avoid making real API calls
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Sample data to be used as a response from the mocked axios.get call
const movieSampleData = {
  original_title: "Sample Movie",
  poster_path: "sample_poster.jpg",
  overview: "This is a sample movie overview.",
};

describe("DetailsPage component", () => {
  it("renders movie details after receiving data", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: movieSampleData });

    render(
      <MemoryRouter initialEntries={["/movie/123"]}>
        <Routes>
          <Route path="/movie/:movieId" element={<DetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText("Sample Movie")).toBeNull();

    await waitFor(() => {
      expect(screen.getByText("Sample Movie")).toBeInTheDocument();
      expect(
        screen.getByText("This is a sample movie overview.")
      ).toBeInTheDocument();
    });

    const imgElement = screen.getByAltText("");
    expect(imgElement).toHaveAttribute(
      "src",
      "http://image.tmdb.org/t/p/w500/sample_poster.jpg"
    );
    expect(screen.getByText("Return To Home")).toBeInTheDocument();
  });
});
