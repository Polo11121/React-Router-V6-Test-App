import { Link, useRouteError } from "react-router-dom";

export const CareersError = () => {
  const error = useRouteError() as Error;

  return (
    <div className="career-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
};
