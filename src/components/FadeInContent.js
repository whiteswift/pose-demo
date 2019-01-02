import posed from "react-pose";

export const FadeInContent = posed.div({
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 100,
      ease: "linear"
    }
    // flip: true
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 100,
      ease: "linear"
    }
    // flip: true
  }
});
