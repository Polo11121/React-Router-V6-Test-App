import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();

  const crumbs = location.pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumbs">
      {crumbs.map((crumb, index) => {
        const path = crumbs.slice(0, index + 1).join("/");

        return (
          <div key={index} className="crumb">
            <Link to={path}>{crumb}</Link>
          </div>
        );
      })}
    </div>
  );
};
