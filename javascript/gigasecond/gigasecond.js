export const gigasecond = (startDate) => {
  const startTime = startDate.getTime();
  const endDate = new Date(startTime + 1000000000000);
  return endDate;
};
