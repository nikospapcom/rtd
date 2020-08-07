import React from 'react';

import { Dropdown } from '../../../components';
import { Button } from '../../../components';
import { Avatar } from '../../../components';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const Dropdowns = () => {
  // const buttonWithArrow = `Dropdown ${(<ExpandMoreIcon />)}`;

  return (
    <div className="container mx-auto">
      <div className="text-3xl">Dropdowns</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Basic</div>
      <Dropdown buttonContent="Dropdown" />
      <br />
      <Dropdown buttonContent="Dropdown" hasArrow />
      <br />
      <Dropdown
        arrowActive={<ThumbDownIcon className="w-4 h-4" />}
        arrowInactive={<ThumbUpIcon className="w-4 h-4" />}
        buttonContent="Dropdown"
        hasArrow
        variant="primary"
      />
      <br />
      <Dropdown
        arrowActive="🙃"
        arrowInactive="🙂"
        buttonContent="Dropdown"
        hasArrow
      />
      <br />
      <Dropdown
        buttonContent={
          <Avatar
            altText="This is altText"
            src="https://source.unsplash.com/autok_VqU9U/400x400"
          />
        }
        iconButton
        paddingLess
      />
      <br />
      <Dropdown buttonContent={<MoreVertIcon />} iconButton />
    </div>
  );
};

export default Dropdowns;
