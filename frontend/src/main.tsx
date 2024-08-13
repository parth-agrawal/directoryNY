import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PeopleListingSection from "./components/pages/PeopleListingSection.tsx";
import { SpaceListingPage } from "./components/pages/SpaceListingPage.tsx";
import MainLayout from "./components/layouts/MainLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <PeopleListingSection />
      },
      {
        path: "spaces",
        element: <SpaceListingPage />
      }
    ]
  },
  {
    path: "/login",
    element: <SignInButton />
  }

])



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);
