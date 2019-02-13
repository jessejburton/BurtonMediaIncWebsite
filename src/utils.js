import scrollToElement from 'scroll-to-element';

const scrollPageTo = (id) => {
  scrollToElement(`#${id}`, {
    offset: 0,
    ease: 'out-expo',
    duration: 2000
  });
};

export { scrollPageTo };
