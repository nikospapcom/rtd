import React from 'react';
import { Link } from 'react-router-dom';

import {
  Breadcrumbs as BreadcrumbsList,
  Card,
  CardContent
} from '../../../components';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Breadcrumbs = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Breadcrumbs</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Basic</div>
      <Card>
        <CardContent>
          <BreadcrumbsList
            aria-label="breadcrumb"
            seperatorClasses="px-2 text-gray-700">
            <Link className="text-indigo-500" to="/">
              Home
            </Link>
            <Link className="text-indigo-500" to="/ui">
              UI Elements
            </Link>
            <span className="text-gray-600">Breadcrumbs</span>
          </BreadcrumbsList>
        </CardContent>
      </Card>
      <hr className="my-8" />
      <div className="my-6 text-xl">Alignment</div>
      <div className="my-4 text-md">Aling Center</div>
      <Card>
        <CardContent>
          <BreadcrumbsList
            align="center"
            aria-label="breadcrumb"
            seperatorClasses="px-2 text-gray-700">
            <Link className="text-indigo-500" to="/">
              Home
            </Link>
            <Link className="text-indigo-500" to="/ui">
              UI Elements
            </Link>
            <span className="text-gray-600">Breadcrumbs</span>
          </BreadcrumbsList>
        </CardContent>
      </Card>
      <div className="my-4 text-md">Aling Right</div>
      <Card>
        <CardContent>
          <BreadcrumbsList
            align="right"
            aria-label="breadcrumb"
            seperatorClasses="px-2 text-gray-700">
            <Link className="text-indigo-500" to="/">
              Home
            </Link>
            <Link className="text-indigo-500" to="/ui">
              UI Elements
            </Link>
            <span className="text-gray-600">Breadcrumbs</span>
          </BreadcrumbsList>
        </CardContent>
      </Card>
      <hr className="my-8" />
      <div className="my-6 text-xl">Size</div>
      <div className="my-4 text-md">Size Small</div>
      <Card>
        <CardContent>
          <BreadcrumbsList
            aria-label="breadcrumb"
            seperatorClasses="px-2 text-gray-700"
            size="sm">
            <Link className="text-indigo-500" to="/">
              Home
            </Link>
            <Link className="text-indigo-500" to="/ui">
              UI Elements
            </Link>
            <span className="text-gray-600">Breadcrumbs</span>
          </BreadcrumbsList>
        </CardContent>
      </Card>
      <div className="my-4 text-md">Size Large</div>
      <Card>
        <CardContent>
          <BreadcrumbsList
            aria-label="breadcrumb"
            seperatorClasses="px-2 text-gray-700"
            size="lg">
            <Link className="text-indigo-500" to="/">
              Home
            </Link>
            <Link className="text-indigo-500" to="/ui">
              UI Elements
            </Link>
            <span className="text-gray-600">Breadcrumbs</span>
          </BreadcrumbsList>
        </CardContent>
      </Card>
      <hr className="my-8" />
      <div className="my-6 text-xl">Divider</div>
      <div className="my-4 text-md">Example One ( Material Icon )</div>
      <Card>
        <CardContent>
          <BreadcrumbsList
            aria-label="breadcrumb"
            seperator={<ArrowForwardIosIcon fontSize="inherit" />}
            seperatorClasses="px-2 text-gray-700">
            <Link className="text-indigo-500" to="/">
              Home
            </Link>
            <Link className="text-indigo-500" to="/ui">
              UI Elements
            </Link>
            <span className="text-gray-600">Breadcrumbs</span>
          </BreadcrumbsList>
        </CardContent>
      </Card>
      <div className="my-4 text-md">Example Two ( Emoji )</div>
      <Card>
        <CardContent>
          <BreadcrumbsList
            aria-label="breadcrumb"
            seperator="😍"
            seperatorClasses="px-2 text-gray-700">
            <Link className="text-indigo-500" to="/">
              Home
            </Link>
            <Link className="text-indigo-500" to="/ui">
              UI Elements
            </Link>
            <span className="text-gray-600">Breadcrumbs</span>
          </BreadcrumbsList>
        </CardContent>
      </Card>
    </div>
  );
};

export default Breadcrumbs;
