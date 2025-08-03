export const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 35,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 35,
      when: "afterChildren",
    },
  },
};

export const overlayVariants = {
  open: { opacity: 1, transition: { duration: 0.3 } },
  closed: { opacity: 0, transition: { duration: 0.3 } },
};

export const menuItemVariants = {
  closed: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.4 },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const containerVariant = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const defaultMenuItemVariants = {
  closed: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};
