import { NavLink, Outlet } from "react-router-dom";
import { Breadcrumbs } from "../";

export const RootLayout = () => (
  <>
    <header>
      <nav>
        <h1>Jobarouter</h1>
        <NavLink to="">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="help">Help</NavLink>
        <NavLink to="careers">Careers</NavLink>
      </nav>
      <Breadcrumbs />
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
