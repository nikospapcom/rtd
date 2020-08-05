import React from 'react';

import { Badge } from '../../../components';

const Badges = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Badges</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Basic</div>
      <div>
        <Badge classes="mr-1">Primary</Badge>
        <Badge classes="mr-1" variant="secondary">
          Secondary
        </Badge>
        <Badge classes="mr-1" variant="success">
          Success
        </Badge>
        <Badge classes="mr-1" variant="danger">
          Danger
        </Badge>
        <Badge classes="mr-1" variant="warning">
          Warning
        </Badge>
        <Badge classes="mr-1" variant="info">
          Info
        </Badge>
        <Badge classes="mr-1" variant="dark">
          Dark
        </Badge>
        <Badge classes="mr-1" variant="light">
          Light
        </Badge>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Sizes</div>
      <div>
        <Badge classes="mr-1" size="sm">
          Primary Small
        </Badge>
        <Badge classes="mr-1" variant="secondary">
          Secondary Normal
        </Badge>
        <Badge classes="mr-1" size="lg" variant="success">
          Secondary Large
        </Badge>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Outline</div>
      <div>
        <Badge classes="mr-1" variant="primary-outline">
          Primary Outline
        </Badge>
        <Badge classes="mr-1" variant="secondary-outline">
          Secondary Outline
        </Badge>
        <Badge classes="mr-1" variant="success-outline">
          Success Outline
        </Badge>
        <Badge classes="mr-1" variant="danger-outline">
          Danger Outline
        </Badge>
        <Badge classes="mr-1" variant="warning-outline">
          Warning Outline
        </Badge>
        <Badge classes="mr-1" variant="info-outline">
          Info Outline
        </Badge>
        <Badge classes="mr-1" variant="dark-outline">
          Dark Outline
        </Badge>
        <Badge classes="mr-1" variant="light-outline">
          Light Outline
        </Badge>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Pill</div>
      <div>
        <Badge classes="mr-1" pill>
          Primary
        </Badge>
        <Badge classes="mr-1" pill variant="secondary">
          Secondary
        </Badge>
        <Badge classes="mr-1" pill variant="success">
          Success
        </Badge>
        <Badge classes="mr-1" pill variant="danger">
          Danger
        </Badge>
        <Badge classes="mr-1" pill variant="warning">
          Warning
        </Badge>
        <Badge classes="mr-1" pill variant="info">
          Info
        </Badge>
        <Badge classes="mr-1" pill variant="dark">
          Dark
        </Badge>
        <Badge classes="mr-1" pill variant="light">
          Light
        </Badge>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Rounded</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Avatar</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Close</div>
    </div>
  );
};

export default Badges;
