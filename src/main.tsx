import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  About,
  Careers,
  Contact,
  Faq,
  Home,
  NotFound,
  CareerDetails,
  CareersError,
} from "pages";
import {
  RootLayout,
  HelpLayout,
  CareersLayout,
  ProtectedRoutes,
} from "components";
import { contact, getCareer, getCareers } from "api";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contact} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route
          path="careers"
          element={<CareersLayout />}
          errorElement={<CareersError />}
        >
          <Route index element={<Careers />} loader={getCareers} />
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={(params) => getCareer(params)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
