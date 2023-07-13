import { Link } from "react-router-dom";

export const NotFound = () => (
  <div>
    <h2>Page not found!</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat soluta
      dolore libero ad doloribus, amet rerum nemo dolorum nulla architecto
      illum, sunt nisi officiis similique fuga explicabo, adipisci consectetur!
    </p>
    <p>
      Go to the <Link to="/">Homepage</Link>
    </p>
  </div>
);
