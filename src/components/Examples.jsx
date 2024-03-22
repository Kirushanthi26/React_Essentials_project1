import React from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";

const Examples = () => {
  const handleSelect = (selectedBtn) => {
    console.log(selectedBtn);
  };

  return (
    <Section id="examples" title={"Examples"}>
      <menu>
        <TabButton onSelect={() => handleSelect("components")}>
          Components
        </TabButton>
        <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
        <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
        <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
      </menu>
      btn click, dynamic content should change, so, onClick create here
    </Section>
  );
};

export default Examples;
