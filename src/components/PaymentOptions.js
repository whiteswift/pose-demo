import React from "react";
import { PoseGroup } from "react-pose";
import { ExpandingContent } from "./ExpandingContent";
import { FadeInContent } from "./FadeInContent";

const paymentMethods = [
  "PayPal",
  "VISA ending **** 1111 expires 3/30",
  "Mastercard ending **** 1234 expires 10/20"
];

export const PaymentOptions = ({
  loading,
  isComplete,
  isCurrentStep,
  onComplete
}) => (
  <PoseGroup>
    {isComplete && (
      <FadeInContent key="PaymentOptionsSummary">
        <p>Mastercard ending **** 1234 expires 10/20</p>
      </FadeInContent>
    )}
    {!loading && isCurrentStep && (
      <ExpandingContent key="PaymentOptionsSelect">
        <ul>
          {paymentMethods.map((option, i) => (
            <li key={`paymentMethod${i}`} style={{ paddingBottom: 20 }}>
              <input
                id={`paymentMethod${i}`}
                type="radio"
                defaultChecked={i === paymentMethods.length - 1}
              />
              <label htmlFor={`paymentMethod${i}`}>{option}</label>
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
