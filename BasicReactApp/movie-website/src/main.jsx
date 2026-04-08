import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";
import MovieDetails from "./pages/movie/movieDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path:'movie/:id',
        element:<MovieDetails/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
);
