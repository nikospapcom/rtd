import React from 'react';

import { Card, CardMedia, CardContent, Button } from '../../../components';

const Cards = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Cards</div>
      <hr className="my-8" />
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
    </div>
  );
};

export default Cards;
