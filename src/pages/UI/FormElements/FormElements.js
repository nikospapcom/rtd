import React from 'react';

import { TextField } from '../../../components';
import PersonIcon from '@material-ui/icons/Person';

const FormElements = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Form Elements</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Basic grid</div>
      <div className="inline-block">
        <TextField id="name" label="First Name" name="name" />
        <TextField
          error
          errorMessage="This field is required"
          id="lastname"
          label="Last Name"
          name="lastname"
        />
        <TextField
          valid
          validMessage="Looks good!"
          id="lastname"
          label="Last Name"
          name="lastname"
        />
        <TextField
          id="username"
          label="Username"
          name="username"
          prepend={<PersonIcon />}
        />
        <TextField
          append="@example.com"
          id="email"
          label="Email"
          name="email"
        />
        <TextField
          id="box"
          label="Label"
          name="box"
          placeholder="This is a placeholder"
        />
      </div>
    </div>
  );
};

export default FormElements;
