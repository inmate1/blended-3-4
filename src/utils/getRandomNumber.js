export const getRandomNumber = (min, max) => {
  const minIndex = Math.ceil(min);
  const maxIndex = Math.floor(max);
  return Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);
};
