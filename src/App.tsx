import "./App.scss";

// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import DetailsPageHome from "./pages/DetailsPageHome/DetailsPageHome";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

function App() {
  return (
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
  );
}

export default App;
