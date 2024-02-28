// @ts-nocheck

import { Age } from "../age/Age";
import { Form } from "../form/Form";

export const Main = () => {
  return (
    <div className="bg-white rounded-xl rounded-br-4xl p-6 w-96 md:p-10 md:w-[800px]">
      <Form />

      <Age />
    </div>
  );
};
