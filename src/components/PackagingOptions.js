import React from "react";
import { PoseGroup } from "react-pose";
import { ExpandingContent } from "./ExpandingContent";
import { FadeInContent } from "./FadeInContent";

const options = [
  "Signature Packaging\nDelivered in a MR PORTER signature white box that’s FSC-certified and recyclable\nFree",
  "Basic Packaging\nYour order will be delivered in a FSC-certified, recyclable, non-branded box\nFree"
];

export const PackagingOptions = ({
  loading,
  isComplete,
  isCurrentStep,
  onComplete
}) => (
  <PoseGroup>
    {isComplete && (
      <FadeInContent key="PackagingOptionsSummary">
        <p>Signature Packaging</p>
      </FadeInContent>
    )}
    {!loading && isCurrentStep && (
      <ExpandingContent key="PackaginOptionsSelect">
        <ul>
          {options.map((option, i) => (
            <li key={`packagingOption${i}`} style={{ paddingBottom: 20 }}>
              <input
                id={`packagingOption${i}`}
                type="radio"
                defaultChecked={i === 0}
              />
              <label htmlFor={`packagingOption${i}`}>{option}</label>
            </li>
          ))}
        </ul>

        <div style={{ textAlign: "center" }}>
          <input type="button" value="Continue" onClick={onComplete} />
        </div>
      </ExpandingContent>
    )}
  </PoseGroup>
);
