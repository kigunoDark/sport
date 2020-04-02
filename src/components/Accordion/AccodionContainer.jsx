import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionContainer = props => {
  const [setActive, setActiveState] = useState(true);
  const toggleAccordion = () => {
    setActiveState(!setActive);
  };

  return (
    <Accordion
      active={setActive}
      toggleAccordion={toggleAccordion}
      data={props.league}
    />
  );
};

export default AccordionContainer;
