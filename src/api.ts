import { slackApiToken } from './env';

type ApiMethod = 'conversations.history' | 'users.info';

export const callSlackApi = <T>({
  apiMethod,
  payload,
}: {
  apiMethod: ApiMethod;
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
