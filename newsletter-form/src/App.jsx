// @ts-nocheck
import { useState } from "react";
import Form from "./components/Form/Form";
import AsideImg from "./components/Header/AsideImg";
import Header from "./components/Header/Header";
import Success from "./components/Header/Success";

function App() {
  const [isSumitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (email) => {
    setIsSubmitted(true);
    setSubmittedEmail(email);
  };

  return (
    <div className="bg-secondary h-screen w-screen sm:h-full sm:w-full sm:p-4 sm:rounded-3xl">
      {!isSumitted && (
        <div className="md:flex md:flex-row-reverse md:items-center md:justify-center">
          <AsideImg />
          <div>
            <Header />
            <Form onSubmit={handleSubmit} />
          </div>
        </div>
      )}
      {isSumitted && <Success email={submittedEmail} />}
    </div>
  );
}

export default App;
