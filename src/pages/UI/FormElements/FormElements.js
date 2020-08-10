import React from 'react';

import { TextField, Grid, GridColumn } from '../../../components';
import PersonIcon from '@material-ui/icons/Person';

const FormElements = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Form Elements</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Basic Input</div>
      <div className="inline-block">
        <TextField
          id="name"
          label="First Name"
          name="name"
          placeholder="This is a placeholder"
        />
      </div>
      <div className="my-6 text-xl">Valid - Invalid Inputs</div>
      <Grid>
        <GridColumn>
          <TextField
            id="valid"
            label="Last Name"
            name="valid"
            valid
            validMessage="Looks good!"
          />
        </GridColumn>
        <GridColumn>
          <TextField
            error
            errorMessage="This field is required"
            id="invalid"
            label="Last Name"
            name="invalid"
          />
        </GridColumn>
      </Grid>
      <div className="my-6 text-xl">Prepend & Append Inputs</div>
      <Grid>
        <GridColumn>
          <TextField
            id="username"
            label="Username"
            name="username"
            prepend={<PersonIcon />}
          />
        </GridColumn>
        <GridColumn>
          <TextField
            append="@example.com"
            id="email"
            label="Email"
            name="email"
          />
        </GridColumn>
      </Grid>
      <div className="my-6 text-xl">Gray Input</div>
      <Grid>
        <GridColumn>
          <TextField
            id="gray"
            isGray
            label="Gray"
            name="gray"
            placeholder="This is gray input"
          />
        </GridColumn>
      </Grid>
      <div className="my-6 text-xl">Disabled & readOnly Inputs</div>
      <Grid>
        <GridColumn>
          <TextField
            disabled
            id="disabled"
            label="disabled"
            name="disabled"
            placeholder="This is disabled input"
          />
        </GridColumn>
        <GridColumn>
          <TextField
            id="readOnly"
            label="readOnly"
            name="readOnly"
            placeholder="This is readOnly input"
            readOnly
          />
        </GridColumn>
      </Grid>
      <div className="my-6 text-xl">Textarea</div>
      <Grid>
        <GridColumn>
          <TextField
            id="multiline"
            label="Textarea"
            multiline
            name="multiline"
            placeholder="This is textarea component"
          />
        </GridColumn>
      </Grid>
    </div>
  );
};

export default FormElements;
