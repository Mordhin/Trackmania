import React from "react";

import { Sessions } from "./Sessions/Sessions";
// import { Form } from "./Form/Form";
import ReduxForm from "./Form/ReduxForm";

export const Home = () => {
  return (
    <div className="container">
     {/*  <ReduxForm /> */}
      <Sessions />
    </div>
  );
};
