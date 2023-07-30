import React from "react";
import ReactDOM from "react-dom/client";
import appRouter from "./App";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-pfp6zxt4vcettugp.us.auth0.com"
    clientId="SmnGSCRtoQVEmHQD5EjjMbCT3tV9HHS8"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={appRouter} />
  </Auth0Provider>
  // </React.StrictMode>
);
