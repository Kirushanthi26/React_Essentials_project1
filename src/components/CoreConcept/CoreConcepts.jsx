import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import "./CoreConcept.css";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((_, index) => (
          <CoreConcept key={index} {...CORE_CONCEPTS[index]} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
