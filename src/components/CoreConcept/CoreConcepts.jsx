import React from "react";
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data";
import "./CoreConcept.css";
import Section from "../Section.jsx";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((_, index) => (
          <CoreConcept key={index} {...CORE_CONCEPTS[index]} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
