import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Dropdown, DropdownItem } from '../../../components';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const Dropdowns = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Dropdowns</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Basic</div>
      <Dropdown buttonContent="Dropdown">
        <DropdownItem>
          <Link to="/">Action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Another action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Something else here</Link>
        </DropdownItem>
      </Dropdown>
      <hr className="my-8" />
      <div className="my-6 text-xl">Dropup</div>
      <Dropdown buttonContent="Dropup" dropUp>
        <DropdownItem>
          <Link to="/">Action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Another action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Something else here</Link>
        </DropdownItem>
      </Dropdown>
      <hr className="my-8" />
      <div className="my-6 text-xl">Dropdown with right position</div>
      <Dropdown buttonContent="Dropdown" className="ml-12" position="right">
        <DropdownItem>
          <Link to="/">Action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Another action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Something else here</Link>
        </DropdownItem>
      </Dropdown>
      <hr className="my-8" />
      <div className="my-6 text-xl">Dropdown header</div>
      <Dropdown buttonContent="Dropdown header">
        <DropdownItem component="h6" isHeader>
          Dropdown header
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Another action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Something else here</Link>
        </DropdownItem>
      </Dropdown>
      <hr className="my-8" />
      <div className="my-6 text-xl">Dropdown with arrow</div>
      <Dropdown buttonContent="Dropdown with arrow" hasArrow>
        <DropdownItem>
          <Link to="/">Action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Another action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Something else here</Link>
        </DropdownItem>
      </Dropdown>
      <hr className="my-8" />
      <div className="my-6 text-xl">Dropdown with custom arrow</div>
      <Dropdown
        arrowActive={<ThumbDownIcon className="w-4 h-4" />}
        arrowInactive={<ThumbUpIcon className="w-4 h-4" />}
        buttonContent="Dropdown custom arrow"
        hasArrow>
        <DropdownItem>
          <Link to="/">Action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Another action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Something else here</Link>
        </DropdownItem>
      </Dropdown>
      <hr className="my-8" />
      <div className="my-6 text-xl">Dropdown with emoji</div>
      <Dropdown
        arrowActive="🙃"
        arrowInactive="🙂"
        buttonContent="Dropdown with emoji"
        hasArrow>
        <DropdownItem>
          <Link to="/">Action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Another action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Something else here</Link>
        </DropdownItem>
      </Dropdown>
      <hr className="my-8" />
      <div className="my-6 text-xl">Dropdown Button Variants</div>
      <Dropdown
        buttonContent="Dropdown"
        className="mb-2"
        variant="primary-solid">
        <DropdownItem>
          <Link to="/">Action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Another action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Something else here</Link>
        </DropdownItem>
      </Dropdown>
      <Dropdown buttonContent="Dropdown" variant="danger">
        <DropdownItem>
          <Link to="/">Action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Another action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Something else here</Link>
        </DropdownItem>
      </Dropdown>
      <hr className="my-8" />
      <div className="my-6 text-xl">Dropdown with avatar</div>
      <Dropdown
        buttonContent={
          <Avatar
            altText="This is altText"
            src="https://source.unsplash.com/autok_VqU9U/400x400"
          />
        }
        iconButton
        paddingLess>
        <DropdownItem>
          <Link to="/">Action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Another action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Something else here</Link>
        </DropdownItem>
      </Dropdown>
      <hr className="my-8" />
      <div className="my-6 text-xl">Dropdown with icon</div>
      <Dropdown buttonContent={<MoreVertIcon />} className="mb-24" iconButton>
        <DropdownItem>
          <Link to="/">Action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Another action</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Something else here</Link>
        </DropdownItem>
      </Dropdown>
    </div>
  );
};

export default Dropdowns;
