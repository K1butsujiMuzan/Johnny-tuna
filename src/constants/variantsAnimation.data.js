export const textVariants = {
  enter: { opacity: 0, x: -30 },
  center: { opacity: 1, x: 0 },
}

export const loginFromTop = {
  enter: { opacity: 0, translateY: -30 },
  center: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: -30 },
}

export const loginFromDown = {
  enter: { opacity: 0, translateY: 30 },
  center: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: 30 },
}

export const cityContainerVariants = {
  enter: {
    opacity: 0,
    y: -10,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      duration: 0.2,
    },
  },
}

export const cityVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
}

export const sliderVariables = {
  enter: direction => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: direction => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
  }),
}
