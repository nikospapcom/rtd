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
      <hr className="my-8" />
      <div className="my-6 text-xl">Outline Style</div>
      <Alert classes="my-4" variant="primary-outline">
        A simple primary outline alert!
      </Alert>
      <Alert classes="my-4" variant="secondary-outline">
        A simple secondary outline alert!
      </Alert>
      <Alert classes="my-4" variant="success-outline">
        A simple success outline alert!
      </Alert>
      <Alert classes="my-4" variant="danger-outline">
        A simple danger outline alert!
      </Alert>
      <Alert classes="my-4" variant="warning-outline">
        A simple warning outline alert!
      </Alert>
      <Alert classes="my-4" variant="info-outline">
        A simple info outline alert!
      </Alert>
      <Alert classes="my-4" variant="light-outline">
        A simple light outline alert!
      </Alert>
      <Alert classes="my-4" variant="dark-outline">
        A simple dark outline alert!
      </Alert>
      <hr className="my-8" />
      <div className="my-6 text-xl">Solid Background</div>
      <Alert classes="my-4" variant="primary-solid">
        A simple primary solid alert!
      </Alert>
      <Alert classes="my-4" variant="secondary-solid">
        A simple secondary solid alert!
      </Alert>
      <Alert classes="my-4" variant="success-solid">
        A simple success solid alert!
      </Alert>
      <Alert classes="my-4" variant="danger-solid">
        A simple danger solid alert!
      </Alert>
      <Alert classes="my-4" variant="warning-solid">
        A simple warning solid alert!
      </Alert>
      <Alert classes="my-4" variant="info-solid">
        A simple info solid alert!
      </Alert>
      <Alert classes="my-4" variant="light-solid">
        A simple light solid alert!
      </Alert>
      <Alert classes="my-4" variant="dark-solid">
        A simple dark solid alert!
      </Alert>
      <hr className="my-8" />
      <div className="my-6 text-xl">Dismissing</div>
      <Alert classes="my-4" dismissible variant="success-outline">
        A simple primary outline alert with dismiss button!
      </Alert>
    </div>
  );
};

export default Alerts;
