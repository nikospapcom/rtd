import React from 'react';
import {
  Avatar,
  Card,
  CardFooter,
  CardHeader,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Link
} from 'components';

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
            <Typography className="mb-1" variant="body1" weight="medium">Card Title</Typography>
            <Typography className="mb-2" textLight variant="body2" weight="medium">Card Subtitle</Typography>
            <Typography className="mb-2" variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.</Typography>
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
            <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.</Typography>
          </CardContent>
        </Card>
      </div>
      <div className="my-6 text-xl">Title, Text and Links</div>
      <div className="max-w-sm">
        <Card>
          <CardContent>
            <Typography className="mb-1" variant="body1" weight="medium">Card Title</Typography>
            <Typography className="mb-2" textLight variant="body2" weight="medium">Card Subtitle</Typography>
            <Typography className="mb-2" variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.</Typography>
            <Link className="text-sm mr-2" to="/ui/buttons">
              This is a link
            </Link>
            <Link className="text-sm" to="/">
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
              <Typography className="mb-2" variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1 ">
          <Card className="inline-block">
            <CardContent>
              <Typography className="mb-2" variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.</Typography>
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
              <Button iconButton variant="transparent">
                <MoreVertIcon />
              </Button>
            }
            avatar={<Avatar variant="primary-solid">NP</Avatar>}
            subtitle="Fron End Developer"
            title="Nikos Pap"
          />
          <CardContent>
            <Typography className="mb-2" variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Featured" />
          <CardContent>
            <Typography className="mb-2" variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.</Typography>
          </CardContent>
        </Card>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Card Footer</div>
      <div className="max-w-sm">
        <Card className="mb-2">
          <CardContent>
            <Typography className="mb-2" variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.</Typography>
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
            <Typography className="mb-2" variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat lorem ante. Aliquam ut congue nisl. Aenean vel mi dui.</Typography>
          </CardContent>
          <CardFooter>
            <Button className="mr-2" iconButton variant="transparent">
              <FavoriteIcon />
            </Button>
            <Button iconButton variant="transparent">
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
