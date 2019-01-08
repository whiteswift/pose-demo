import posed from "react-pose";

export const ExpandingContent = posed.div({
  enter: {
    height: "auto",
    transition: { duration: 1000, ease: "linear" }
  },
  exit: {
    height: 0,
    transition: { duration: 0 }
  }
});
