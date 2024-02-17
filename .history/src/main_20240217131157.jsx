import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContactAction } from "./actions/conatctsAction";
import Contact from "./Contact";
import EditContact from "./Edit";
import ErrorPage from "./Error";
import "./index.css";
import { getContactLoader, getContactsLoader } from "./loader/contactsLoader";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action: editContactAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
