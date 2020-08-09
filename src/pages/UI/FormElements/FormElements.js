import React from 'react';

import { TextField } from '../../../components';

const FormElements = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Form Elements</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Basic grid</div>
      <div className="inline-block">
        <TextField id="name" label="First Name" name="name" />
        <TextField
          error="This field is required"
          id="lastname"
          label="Last Name"
          name="lastname"
        />
      </div>
    </div>
  );
};

export default FormElements;
