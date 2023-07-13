import { ICareer } from "utils/types";

export const getCareers = async () => {
  const response = await fetch("http://localhost:400/careers");

  if (!response.ok) {
    throw new Error("Could not fetch the careers!");
  }

  return response.json() as Promise<ICareer[]>;
};
