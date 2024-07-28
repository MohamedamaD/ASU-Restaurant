const effects = {
  transition: {
    trans: { ease: [0, 0.71, 0.2, 1.01], duration: 0.5 },
    spring: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slide: {
    initial: { x: -100 },
    animate: { x: 0 },
  },
  scale: {
    initial: { scale: 0 },
    animate: { scale: 1 },
  },
  rotate: {
    initial: { rotate: -45 },
    animate: { rotate: 0 },
  },
};

export default effects;
