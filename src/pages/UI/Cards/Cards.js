import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Card,
  CardFooter,
  CardHeader,
  CardMedia,
  CardContent,
  Button
} from '../../../components';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

const Cards = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Cards</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Basic</div>
      <div className="max-w-sm">
        <Card>
          <CardMedia
            alt="Contemplative Reptile"
            component="img"
            height="150"
            image="https://tailwindcss.com/img/card-top.jpg"
          />
          <CardContent>
            <div className="text-base font-medium mb-1">Card Title</div>
            <div className="text-sm text-gray-500 font-medium mb-2">
              Card Subtitle
            </div>
            <div className="text-sm text-gray-800 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.
            </div>
            <Button
              component="a"
              href="https://www.google.com"
              size="xs"
              target="_blank"
              variant="primary-solid">
              Open link
            </Button>
          </CardContent>
        </Card>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-2xl">Content Types</div>
      <div className="my-6 text-xl">Body</div>
      <div className="max-w-sm">
        <Card>
          <CardContent>
            <div className="text-sm text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="my-6 text-xl">Title, Text and Links</div>
      <div className="max-w-sm">
        <Card>
          <CardContent>
            <div className="text-base font-medium mb-1">Card Title</div>
            <div className="text-sm text-gray-500 font-medium mb-2">
              Card Subtitle
            </div>
            <div className="text-sm text-gray-800 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.
            </div>
            <Link className="text-blue-700 text-sm mr-2" to="/">
              This is a link
            </Link>
            <Link className="text-blue-700 text-sm" to="/">
              Another Link
            </Link>
          </CardContent>
        </Card>
      </div>
      <div className="my-6 text-xl">Card Images</div>
      <div className="max-w-2xl flex-none sm:flex mb-2">
        <div className="flex-1 sm:mr-4">
          <Card className="inline-block">
            <CardMedia
              alt="Contemplative Reptile"
              component="img"
              height="150"
              image="https://via.placeholder.com/350x170?text=Placeholder"
            />
            <CardContent>
              <div className="text-sm text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1 ">
          <Card className="inline-block">
            <CardContent>
              <div className="text-sm text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.
              </div>
            </CardContent>
            <CardMedia
              alt="Contemplative Reptile"
              component="img"
              height="150"
              image="https://via.placeholder.com/350x170?text=Placeholder"
            />
          </Card>
        </div>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Card Header</div>
      <div className="max-w-sm">
        <Card className="mb-2">
          <CardHeader
            action={
              <Button iconButton>
                <MoreVertIcon />
              </Button>
            }
            avatar={<Avatar variant="primary-solid">NP</Avatar>}
            subtitle="Fron End Developer"
            title="Nikos Pap"
          />
          <CardContent>
            <div className="text-sm text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Featured" />
          <CardContent>
            <div className="text-sm text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.
            </div>
          </CardContent>
        </Card>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Card Footer</div>
      <div className="max-w-sm">
        <Card className="mb-2">
          <CardContent>
            <div className="text-sm text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.
            </div>
          </CardContent>
          <CardFooter>
            <Button className="mr-2" size="xs" variant="primary-solid">
              SHARE
            </Button>
            <Button size="xs">LEARN MORE</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardContent>
            <div className="text-sm text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.
            </div>
          </CardContent>
          <CardFooter>
            <Button iconButton>
              <FavoriteIcon />
            </Button>
            <Button iconButton>
              <ShareIcon />
            </Button>
            <Button className="ml-auto" iconButton variant="danger-outline">
              <DeleteIcon />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
