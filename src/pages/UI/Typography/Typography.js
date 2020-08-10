import React from 'react';

import { Typography } from '../../../components';

const TypographyPage = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Typography</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Basic grid</div>
      <Typography>123</Typography>
    </div>
  );
};

export default TypographyPage;
