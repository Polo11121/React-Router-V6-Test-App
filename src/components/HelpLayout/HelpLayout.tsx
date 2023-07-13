import { NavLink, Outlet } from "react-router-dom";

export const HelpLayout = () => (
  <div className="help-layout">
    <h2>Website Help</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim
      asperiores, labore tenetur, nam cumque pariatur ex blanditiis accusamus
      amet est atque commodi laboriosam eum dolorum qui, fuga ut eligendi?
    </p>
    <nav>
      <NavLink to="faq">View the FAQ</NavLink>
      <NavLink to="contact">Contact us</NavLink>
    </nav>
    <Outlet />
  </div>
);
