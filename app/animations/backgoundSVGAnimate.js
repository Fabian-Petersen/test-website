const parentContainer = {
  initialState: {
    opacity: 1,
  },

  animateState: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childContainer = {
  initialState: {
    opacity: 0,
    pathLength: 0,
  },

  animateState: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const bgSVGVariants = [parentContainer, childContainer];

export default bgSVGVariants;
