import { Link, useLoaderData } from "react-router-dom";
import { ICareer } from "utils/types";

export const Careers = () => {
  const careers = useLoaderData() as ICareer[];

  return (
    <div className="careers">
      {careers.map(({ id, title, location }) => (
        <Link to={`/careers/${id}`} key={id}>
          <p>{title}</p>
          <p>Based in {location}</p>
        </Link>
      ))}
    </div>
  );
};
