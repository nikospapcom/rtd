import React from 'react';

import Alert from '../../../components/UI/Alert';

const Alerts = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Alerts</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Default Alerts</div>
      <Alert classes="my-4" variant="primary">
        A simple primary alert!
      </Alert>
      <Alert classes="my-4" variant="secondary">
        A simple secondary alert!
      </Alert>
      <Alert classes="my-4" variant="success">
        A simple success alert!
      </Alert>
      <Alert classes="my-4" variant="danger">
        A simple danger alert!
      </Alert>
      <Alert classes="my-4" variant="warning">
        A simple warning alert!
      </Alert>
      <Alert classes="my-4" variant="info">
        A simple info alert!
      </Alert>
      <Alert classes="my-4" variant="light">
        A simple light alert!
      </Alert>
      <Alert classes="my-4" variant="dark">
        A simple dark alert!
      </Alert>
      <hr className="my-8" />
      <div className="my-6 text-xl">Alert Sizes</div>
      <Alert classes="my-4" size="sm" variant="primary">
        A simple primary alert with size sm!
      </Alert>
      <Alert classes="my-4" size="lg" variant="success">
        A simple primary alert with size lg!
      </Alert>
      <hr className="my-8" />
      <div className="my-6 text-xl">Additional Content</div>
      <Alert
        classes="my-4"
        hr
        subtitle="This text is an example of subtitle."
        title="Congratulations"
        variant="secondary">
        A simple secondary alert!
      </Alert>
    </div>
  );
};

export default Alerts;
