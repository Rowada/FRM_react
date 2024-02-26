// @ts-nocheck
import { useState } from "react";
import Form from "../Form/Form";
import AsideImg from "../Header/AsideImg";
import Header from "../Header/Header";
import Success from "../Header/Success";

export const Home = () => {
  const [isSumitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (email) => {
    setIsSubmitted(true);
    setSubmittedEmail(email);
  };

  const handleDismiss = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="bg-secondary h-screen w-screen sm:h-full sm:w-full sm:p-4 sm:rounded-5xl">
      {!isSumitted && (
        <div className="md:flex md:flex-row-reverse md:items-center md:justify-center">
          <AsideImg />
          <div>
            <Header />
            <Form onSubmit={handleSubmit} />
          </div>
        </div>
      )}
      {isSumitted && (
        <Success email={submittedEmail} onDismiss={handleDismiss} />
      )}
    </div>
  );
};
