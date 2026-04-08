import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./Layout.jsx";
import Login from "./pages/Login/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import PrivateRoute from "./component/privateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {path:"/",element:<Home/>},
      { path: "about", element: <About /> },
      { path: "contact", element:<PrivateRoute><Contact /> </PrivateRoute> },
      {
        path:"login",element:<Login/>
      },
      {
      }
    ],
  },
]);

// const router=createBrowserRouter([{
//   path:"/",
//   element:<Layout/>
// },{
//   path:"/about",
//   element:<About/>
// },
// {path:"/contact",
//   element:<Contact/>
// }])

createRoot(document.getElementById("root")).render(
  <AuthProvider>

  <RouterProvider router={router}/>


  </AuthProvider>
);
