import React from "react";
import { PoseGroup } from "react-pose";
import { ExpandingContent } from "./ExpandingContent";
import { FadeInContent } from "./FadeInContent";

const addresses = [
  "123 Fake Street,\nFake Town\nFK3 7WN",
  "245 Make Believe Drive\nFantasy City\nFA5 1TY"
];

export const ShippingAddress = ({
  isCurrentStep,
  isComplete,
  loading,
  onComplete
}) => (
  <PoseGroup>
    {isComplete && (
      <FadeInContent key="ShippingAddressSummary">
        <p>
          123 Fake Street
          <br />
          Fake Town
          <br />
          FK3 7WN
        </p>
      </FadeInContent>
    )}
    {!loading && isCurrentStep && (
      <ExpandingContent key="ShippingAddressSelect">
        <ul style={{ position: "relative" }}>
          {addresses.map((address, i) => (
            <li key={`address${i}`} style={{ paddingBottom: 20 }}>
              <input id={`address${i}`} type="radio" defaultChecked={i === 0} />
              <label htmlFor={`address${i}`}>{address}</label>
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
