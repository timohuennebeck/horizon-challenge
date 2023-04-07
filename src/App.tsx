// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

// components
import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import DetailsPageHome from "./pages/DetailsPageHome/DetailsPageHome";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

// interfaces
import { MovieContextInterface } from "./interfaces/appInterfaces";

export const MovieContext = createContext<MovieContextInterface>({
  favorites: {},
  updateFavorite: () => {},
});

function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });

  const updateFavorite = (id: number, status: boolean) => {
    const updatedFavorites = { ...favorites, [id]: status };
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <MovieContext.Provider value={{ favorites, updateFavorite }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<CategoriesPage />} />
            <Route path="/:id/movies/:movieId" element={<DetailsPage />} />
            <Route path="movies/:movieId" element={<DetailsPageHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MovieContext.Provider>
  );
}

export default App;
