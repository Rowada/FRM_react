// @ts-nocheck

import { useState } from "react";
import { Age } from "../age/Age";
import { Form } from "../form/Form";

export const Main = () => {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="bg-white rounded-2xl md:rounded-xl rounded-br-7xl md:rounded-br-8xl py-8 px-6 w-80 sm:w-96 md:p-10 md:w-128">
      <Form onSubmit={handleSubmit} />

      <Age formData={formData} />
    </div>
  );
};
