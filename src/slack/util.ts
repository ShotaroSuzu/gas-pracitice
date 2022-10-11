export const convertMillisecond = (slackTs: string) => {
  return Number(slackTs) * 1000;
};
