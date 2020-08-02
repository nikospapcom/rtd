import React from 'react';

import { Avatar } from '../../../components';

const Avatars = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Avatars</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Sizes</div>
      <div className="flex items-center">
        <Avatar
          altText="This is altText"
          classes="mr-4"
          size="xs"
          src="https://source.unsplash.com/autok_VqU9U/400x400"
        />
        <Avatar
          altText="This is altText"
          classes="mr-4"
          size="sm"
          src="https://source.unsplash.com/autok_VqU9U/400x400"
        />
        <Avatar
          altText="This is altText"
          classes="mr-4"
          src="https://source.unsplash.com/autok_VqU9U/400x400"
        />
        <Avatar
          altText="This is altText"
          classes="mr-4"
          size="md"
          src="https://source.unsplash.com/autok_VqU9U/400x400"
        />
        <Avatar
          altText="This is altText"
          classes="mr-4"
          size="lg"
          src="https://source.unsplash.com/autok_VqU9U/400x400"
        />
        <Avatar
          altText="This is altText"
          classes="mr-4"
          size="xl"
          src="https://source.unsplash.com/autok_VqU9U/400x400"
        />
        <Avatar
          altText="This is altText"
          classes="mr-4"
          size="xxl"
          src="https://source.unsplash.com/autok_VqU9U/400x400"
        />
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Shapes</div>
      <div className="flex items-center">
        <Avatar
          altText="This is altText"
          classes="mr-4"
          size="lg"
          src="https://source.unsplash.com/autok_VqU9U/400x400"
        />
        <Avatar
          altText="This is altText"
          classes="mr-4"
          radius="rounded"
          size="lg"
          src="https://source.unsplash.com/autok_VqU9U/400x400"
        />
        <Avatar
          altText="This is altText"
          classes="mr-4"
          radius="square"
          size="lg"
          src="https://source.unsplash.com/autok_VqU9U/400x400"
        />
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Initials</div>
      <div className="flex items-center">
        <Avatar variant="primary" classes="mr-4" size="xs">
          NP
        </Avatar>
        <Avatar variant="primary" classes="mr-4" size="sm">
          NP
        </Avatar>
        <Avatar variant="primary" classes="mr-4">
          NP
        </Avatar>
        <Avatar variant="primary" classes="mr-4" size="md">
          NP
        </Avatar>
        <Avatar variant="primary" classes="mr-4" size="lg">
          NP
        </Avatar>
        <Avatar variant="primary" classes="mr-4" size="xl">
          NP
        </Avatar>
        <Avatar variant="primary" classes="mr-4" size="xxl">
          NP
        </Avatar>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Initials Colors - Basic</div>
      <div className="flex items-center">
        <Avatar classes="mr-4" variant="primary">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="secondary">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="success">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="danger">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="warning">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="info">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="light">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="dark">
          NP
        </Avatar>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Initials Colors - Outline</div>
      <div className="flex items-center">
        <Avatar classes="mr-4" variant="primary-outline">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="secondary-outline">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="success-outline">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="danger-outline">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="warning-outline">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="info-outline">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="light-outline">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="dark-outline">
          NP
        </Avatar>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Initials Colors - Solid</div>
      <div className="flex items-center">
        <Avatar classes="mr-4" variant="primary-solid">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="secondary-solid">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="success-solid">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="danger-solid">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="warning-solid">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="info-solid">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="light-solid">
          NP
        </Avatar>
        <Avatar classes="mr-4" variant="dark-solid">
          NP
        </Avatar>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Status Indicator</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Grouped</div>
    </div>
  );
};

export default Avatars;
