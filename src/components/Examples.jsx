import React, { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

const Examples = () => {
  const [tabContent, setTabContent] = useState();

  const handleSelect = (selectedBtn) => {
    setTabContent(selectedBtn);
  };

  return (
    <Section id="examples" title={"Examples"}>
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={tabContent === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      />

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
