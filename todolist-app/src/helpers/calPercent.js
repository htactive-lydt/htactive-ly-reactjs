export const calPercent = items => {
  let percent = 0;
  if (items.length > 0) {
    percent =
      (items.filter(item => item.isComplete).length / items.length) * 100;
  }
  return percent;
};
