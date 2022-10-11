const getProperty = (key: string) => {
  return PropertiesService.getScriptProperties().getProperty(key);
};

export const slackApiToken = () => {
  return getProperty('SLACK_API_TOKEN');
};

export const channelId = () => {
  return getProperty('SLACK_CHANNEL_ID');
};
