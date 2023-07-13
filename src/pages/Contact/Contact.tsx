import { Form, useActionData } from "react-router-dom";

export const Contact = () => {
  const actionData = useActionData() as { error: string };

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </Form>
      {actionData?.error && <p className="error">{actionData.error}</p>}
    </div>
  );
};
