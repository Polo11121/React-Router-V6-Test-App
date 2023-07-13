import { ActionFunction, redirect } from "react-router-dom";

export const contact: ActionFunction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  if (submission?.message && submission?.message.toString().length < 10) {
    return {
      error: "Message must be at least 10 characters long",
    };
  }

  return redirect("/");
};
