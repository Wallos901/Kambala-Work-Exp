import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import OldPrimaryButton from "./OldPrimaryButton";
import OldSecondaryButton from "./OldSecondaryButton";

const OldButtonsSection = () => {
  return (
    <Section>
      <Heading>Old Button</Heading>
      <OldPrimaryButton>Button primary</OldPrimaryButton>
      <OldSecondaryButton>Button secondary</OldSecondaryButton>
    </Section>
  );
};

export default OldButtonsSection;
