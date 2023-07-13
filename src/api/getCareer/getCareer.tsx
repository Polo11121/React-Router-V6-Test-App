import { LoaderFunctionArgs } from "react-router-dom";
import { ICareer } from "utils/types";

export const getCareer = async (params: LoaderFunctionArgs) => {
  const { id } = params.params as { id: string };

  const response = await fetch(`http://localhost:400/careers/${id}`);

  if (!response.ok) {
    throw new Error("Could not fetch the career!");
  }

  return response.json() as Promise<ICareer>;
};
