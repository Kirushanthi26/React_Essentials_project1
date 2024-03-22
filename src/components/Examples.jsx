import React, { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";

const Examples = () => {
  const [tabContent, setTabContent] = useState();

  const handleSelect = (selectedBtn) => {
    setTabContent(selectedBtn);
  };

  return (
    <Section id="examples" title={"Examples"}>
      <menu>
        <TabButton
          isSelected={tabContent === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={tabContent === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={tabContent === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={tabContent === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {/* instent of initial state value */}
      {!tabContent && <p>Please, select a topic.</p>}
      {tabContent && (
        <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>{EXAMPLES[tabContent].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
};

export default Examples;
