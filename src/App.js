import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import DefaultInterface from "./interfaces/DefaultInterface/DefaultInterface";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultInterface />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<CategoriesPage />} />
          <Route path="/:id/movies/:movieId" element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
