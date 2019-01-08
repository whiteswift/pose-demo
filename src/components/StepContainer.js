import React from "react";
import { GlowingText } from "./GlowingText";

export const StepContainer = ({ id, title, loading, children }) => (
  <div id={id} className="step-container">
    <GlowingText
      initialPose="init"
      pose={loading ? "loading" : "init"}
      className="text"
    >
      {title}
    </GlowingText>
    {children}
  </div>
);
