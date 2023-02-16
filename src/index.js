import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <Menu />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
