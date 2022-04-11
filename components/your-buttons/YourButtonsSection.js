import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const YourButtonsSection = () => {
  return (
    <Section>
      <Heading>Your Button</Heading>
      <PrimaryButton>Button primary</PrimaryButton>
      <SecondaryButton>Button secondary</SecondaryButton>
    </Section>
  );
};

export default YourButtonsSection;
