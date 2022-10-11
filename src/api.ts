import { slackApiToken } from './env';

export const callSlackApi = <T>({
  apiMethod,
  payload,
}: {
  apiMethod: 'conversations.history';
  payload: T;
}) => {
  const response = UrlFetchApp.fetch(`https://www.slack.com/api/${apiMethod}`, {
    method: 'post',
    contentType: 'application/x-www-form-urlencoded',
    headers: { Authorization: `Bearer ${slackApiToken()}` },
    payload: payload,
  });
  return response;
};
