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
          id="lastname"
          label="Last Name"
          name="lastname"
          valid
          validMessage="Looks good!"
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
        <TextField
          id="gray"
          isGray
          label="Gray"
          name="gray"
          placeholder="This is gray input"
        />
        <TextField
          disabled
          id="disabled"
          label="disabled"
          name="disabled"
          placeholder="This is disabled input"
        />
        <TextField
          id="readOnly"
          label="readOnly"
          name="readOnly"
          placeholder="This is readOnly input"
          readOnly
        />
        <TextField
          id="multiline"
          label="multiline"
          multiline
          name="multiline"
          placeholder="This is multiline input"
        />
      </div>
    </div>
  );
};

export default FormElements;
