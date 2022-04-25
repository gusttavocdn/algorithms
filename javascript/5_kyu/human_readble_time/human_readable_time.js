function humanReadable(seconds) {
  const formatNum = (num) => {
    return num < 10 ? '0' + num : num;
  };

  let hours = 0;
  let min = 0;

  if (seconds >= 3600) hours = Math.floor(seconds / 3600);
  seconds = seconds - 3600 * hours;

  if (seconds >= 60) min = Math.floor(seconds / 60);
  seconds = seconds - 60 * min;

  hours = formatNum(hours);
  min = formatNum(min);
  seconds = formatNum(seconds);

  const TIME = `${hours}:${min}: ${seconds}`;
  return TIME;
}

console.log(humanReadable(60));
