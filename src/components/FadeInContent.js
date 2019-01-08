import posed from "react-pose";

export const FadeInContent = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: 100, ease: "linear" }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0 }
  }
});
