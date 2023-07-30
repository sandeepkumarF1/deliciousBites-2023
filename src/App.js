import React, { lazy, Suspense } from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantInfo from "./components/RestaurantInfo";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Shimmer } from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Help from "./components/Help";

const Instamart = lazy(() => import("./components/Instamart"));
const App = () => {
  return (
    // <div>Hello namaste</div>
    <Provider store={store}>
      <Header />
      <Outlet />
      {/* <Home /> */}
      <Footer />
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/restaurant/:resId", element: <RestaurantInfo /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
      { path: "/help", element: <Help /> },
    ],
  },
]);

export default appRouter;
