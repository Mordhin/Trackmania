import React from "react";

import { Sessions } from "./Sessions/Sessions";
// import { Form } from "./Form/Form";
import ReduxForm from "./Form/ReduxForm";

export const Home = () => {
  return (
    <div>
      <ReduxForm />
      <Sessions />
    </div>
  );
};
