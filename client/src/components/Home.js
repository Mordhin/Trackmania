import React from "react";

import { Sessions } from "./Sessions/Sessions";
// import { Form } from "./Form/Form";
import ReduxForm from "./Form/ReduxForm";

export const Home = () => {
  return (
    <div>
      <h1>App</h1>
      <ReduxForm />
      <Sessions />
    </div>
  );
};
