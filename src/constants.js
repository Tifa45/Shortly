export const navLinks = [
  { title: "Features", ref: "#features" },
  { title: "Pricing", ref: "#pricing" },
  { title: "Resources", ref: "#resources" },
];
export const statVars = [
  {
    img: "icon-brand-recognition.svg",
    title: "Brand Recognition",
    descrioption:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    img: "icon-detailed-records.svg",
    title: "Detailed Records",
    descrioption:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    img: "icon-fully-customizable.svg",
    title: "Fully Customizable",
    descrioption:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

export const features = [
  { title: "Link Shortening", refr: "#getstarted" },
  { title: "Branded Links", refr: "#" },
  { title: "Analytics", refr: "#" },
];

export const resources = [
  { title: "Blog", refr: "#" },
  { title: "Developers", refr: "#" },
  { title: "Support", refr: "#" },
];

export const company = [
  { title: "About", refr: "#" },
  { title: "Our Team", refr: "#" },
  { title: "Careers", refr: "#" },
  { title: "Contact", refr: "#" },
];

//motion variants

//viewPortVariants
export const vpVars = {
  initial: "startStyles",
  whileInView: "entry",
  viewport: {
    once: true,
    amount: 0,
  },

  style: { originY: 0, originX: 0 },
};

export const lineAnimateHor = {
  startStyles: {
    scaleX: 0,
  },
  entry: {
    scaleX: 1,
    transition: { duration: 2, delay: 0.1, ease: "linear" },
  },
};
export const lineAnimateVer = {
  startStyles: {
    scaleY: 0,
  },
  entry: {
    scaleY: 1,
    transition: { duration: 1.7, delay: 0.2, ease: "linear" },
  },
};

export const cardParentVariants = {
  initial: "startStyles",
  whileInView: "entry",
  transition: { staggerChildren: 0.7 },
  viewport: {
    once: true,
    amount: 0,
  },
};
export const cardAnimate = {
  startStyles: {
    opacity: 0,
    y: -40,
  },
  entry: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0.55, 0.45, 1] },
  },
};

// default motion variants

export const deafaultProps = {
  initial: "startStyles",
  whileInView: "entry",
  viewport: {
    once: true,
    amount: 0,
  },
};

export const popupAnimate = {
  startStyles: {
    opacity: 0.5,
    scale: 0,
  },
  entry: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.5 * i, type: "spring", bounce: .5 },
  }),
};
