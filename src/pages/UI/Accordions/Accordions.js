import React from 'react';

import { Accordion, AccordionHeader, AccordionBody } from '../../../components';

const Accordions = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Accordions</div>
      <hr className="my-8" />
      <Accordion>
        <AccordionHeader eventKey={0}>question 1</AccordionHeader>
        <AccordionBody eventKey={0}>answer 1</AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHeader eventKey={1}>question 2</AccordionHeader>
        <AccordionBody eventKey={1}>answer 2</AccordionBody>
      </Accordion>
    </div>
  );
};

export default Accordions;
