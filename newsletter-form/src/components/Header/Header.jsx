// @ts-nocheck
import Form from "../Form/Form";

export default function Header() {
  return (
    <section className="flex-1">
      <h1 className="text-4xl font-bold text-text">Stay updated!</h1>

      <p>Join 60,000+ product managers receiving monthly updates on :</p>

      <span>Product discovery and building what matters</span>
      <span>Measuring to ensure updates are a success</span>
      <span>And much more!</span>

      <Form />
    </section>
  );
}
