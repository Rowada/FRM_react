// @ts-nocheck

import { useState } from "react";

export default function Form({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Valid email required");
    } else {
      setError("");
      onSubmit(email);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col justify-center my-6 md:mt-8 px-5 md:px-10"
    >
      <div className="flex flex-col items-start">
        <label className="font-bold text-xs mb-1" htmlFor="new">
          Email adress
        </label>
        <input
          className="border border-gray-300 hover:border-primary focus:outline-none focus:border-primary text-accent w-full mb-4 rounded-md py-3 px-3"
          type="email"
          placeholder="email@company.com"
          value={email}
          id="new"
          onChange={handleChange}
        />
      </div>
      <button className="block bg-text text-secondary font-bold text-sm rounded-md py-3 px-3 hover:bg-gradient-to-l hover:from-primary hover:to-hover">
        Subscribe to monthly newsletter
      </button>
      {error && (
        <span className="absolute top-0 right-5 md:right-10 font-bold text-xs text-primary">
          {error}
        </span>
      )}
    </form>
  );
}
