import React from "react";
import { PoseGroup } from "react-pose";
import { ExpandingContent } from "./ExpandingContent";
import { FadeInContent } from "./FadeInContent";

const options = [
  "Next Day\nNext business day, 9am-5pm, Mon-Fri\n£8.00",
  "Standard\n3 business days or less\n£5.00"
];

export const ShippingOptions = ({
  loading,
  isComplete,
  isCurrentStep,
  onComplete
}) => (
  <PoseGroup>
    {isComplete && (
      <FadeInContent key="ShippingOptionsSummary">
        <p>Next Day</p>
      </FadeInContent>
    )}
    {!loading && isCurrentStep && (
      <ExpandingContent key="ShippingOptionsSelect">
        <ul>
          {options.map((option, i) => (
            <li key={`option${i}`} style={{ paddingBottom: 20 }}>
              <input id={`option${i}`} type="radio" defaultChecked={i === 0} />
              <label htmlFor={`option${i}`}>{option}</label>
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
