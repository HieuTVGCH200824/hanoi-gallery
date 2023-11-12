import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./landing/index.tsx";
import About from "./about/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
