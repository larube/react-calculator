export const setIntervalXTimes = (callback, delay, repetitions) => {
  let currentRepetition = 0;
  const intervalID = window.setInterval(() => {
    currentRepetition += 1;
    callback();

    if (repetitions === currentRepetition) {
      window.clearInterval(intervalID);
    }
  }, delay);
};
