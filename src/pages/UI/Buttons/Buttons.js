import React from 'react';

import { Button } from '../../../components';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckIcon from '@material-ui/icons/Check';
import SendIcon from '@material-ui/icons/Send';

const Buttons = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Buttons</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Basic</div>
      <div>
        <Button className="mr-2 mb-2">Primary</Button>
        <Button className="mr-2 mb-2" variant="secondary">
          Secondary
        </Button>
        <Button className="mr-2 mb-2" variant="success">
          Success
        </Button>
        <Button className="mr-2 mb-2" variant="danger">
          Danger
        </Button>
        <Button className="mr-2 mb-2" variant="warning">
          Warning
        </Button>
        <Button className="mr-2 mb-2" variant="info">
          Info
        </Button>
        <Button className="mr-2 mb-2" variant="dark">
          Dark
        </Button>
        <Button className="mr-2 mb-2" variant="light">
          Light
        </Button>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Outline</div>
      <div>
        <Button className="mr-2 mb-2" variant="primary-outline">
          Primary Outline
        </Button>
        <Button className="mr-2 mb-2" variant="secondary-outline">
          Secondary Outline
        </Button>
        <Button className="mr-2 mb-2" variant="success-outline">
          Success Outline
        </Button>
        <Button className="mr-2 mb-2" variant="danger-outline">
          Danger Outline
        </Button>
        <Button className="mr-2 mb-2" variant="warning-outline">
          Warning Outline
        </Button>
        <Button className="mr-2 mb-2" variant="info-outline">
          Info Outline
        </Button>
        <Button className="mr-2 mb-2" variant="dark-outline">
          Dark Outline
        </Button>
        <Button className="mr-2 mb-2" variant="light-outline">
          Light Outline
        </Button>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Solid</div>
      <div>
        <Button className="mr-2 mb-2" variant="primary-solid">
          Primary Solid
        </Button>
        <Button className="mr-2 mb-2" variant="secondary-solid">
          Secondary Solid
        </Button>
        <Button className="mr-2 mb-2" variant="success-solid">
          Success Solid
        </Button>
        <Button className="mr-2 mb-2" variant="danger-solid">
          Danger Solid
        </Button>
        <Button className="mr-2 mb-2" variant="warning-solid">
          Warning Solid
        </Button>
        <Button className="mr-2 mb-2" variant="info-solid">
          Info Solid
        </Button>
        <Button className="mr-2 mb-2" variant="dark-solid">
          Dark Solid
        </Button>
        <Button className="mr-2 mb-2" variant="light-solid">
          Light Solid
        </Button>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Sizes</div>
      <div>
        <Button className="mr-2 mb-2" size="xs" variant="info">
          Extra Small
        </Button>
        <Button className="mr-2 mb-2" size="sm" variant="success">
          Small
        </Button>
        <Button className="mr-2 mb-2" variant="danger">
          Normal
        </Button>
        <Button className="mr-2 mb-2" size="lg" variant="primary-solid">
          Large Button
        </Button>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Full Width</div>
      <div>
        <Button className="mb-2" fullWidth variant="primary-solid">
          Primary
        </Button>
        <Button className="mb-2" fullWidth variant="secondary-solid">
          Secondary
        </Button>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Disabled State</div>
      <div>
        <Button className="mr-2 mb-2" disabled>
          Primary
        </Button>
        <Button className="mr-2 mb-2" disabled variant="success-solid">
          Success
        </Button>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Rounded</div>
      <div>
        <Button className="mr-2 mb-2" rounded>
          Primary
        </Button>
        <Button className="mr-2 mb-2" rounded variant="secondary-solid">
          Success
        </Button>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Icon Buttons</div>
      <div>
        <Button className="mr-2 mb-2" iconButton variant="danger-solid">
          <DeleteForeverIcon fontSize="small" />
        </Button>
        <Button className="mr-2 mb-2" iconButton variant="primary-solid">
          <CheckIcon fontSize="small" />
        </Button>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Buttons with icons and label</div>
      <div>
        <Button
          className="mr-2 mb-2"
          iconButton
          startIcon={<DeleteForeverIcon className="w-4 h-4" />}
          variant="danger-solid">
          Delete
        </Button>
        <Button
          className="mr-2 mb-2"
          endIcon={<SendIcon className="w-4 h-4" />}
          iconButton
          variant="primary-solid">
          Send
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
