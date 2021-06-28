import React from 'react'

import { Sessions } from "./Sessions/Sessions";
import { Form } from "./Form/Form";

export const Home = () => {
  return (
    <div>
      <h1>App</h1>
        <Form></Form>
        <Sessions></Sessions>
    </div>
  )
}
