import React from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";

const Examples = () => {
  const handleSelect = () => {};

  return (
    <Section id="examples" title={"Examples"}>
      <menu>
        <TabButton onSelect={handleSelect}>Components</TabButton>
        <TabButton onSelect={handleSelect}>JSX</TabButton>
        <TabButton onSelect={handleSelect}>Props</TabButton>
        <TabButton onSelect={handleSelect}>State</TabButton>
      </menu>
      btn click, dynamic content should change, so, onClick create here
    </Section>
  );
};

export default Examples;
