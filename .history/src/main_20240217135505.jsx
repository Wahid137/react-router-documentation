import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  createContactAction,
  deleteContactAction,
  editContactAction,
  updateContactFavorite,
} from "./actions/conatctsAction";
import Contact from "./Contact";
import EditContact from "./Edit";
import ErrorPage from "./Error";
import Index from "./Index";
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
        index: true,
        element: <Index />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
        action: updateContactFavorite,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action: editContactAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteContactAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
