import {
  ConversationsHistoryArguments,
  ConversationsHistoryResponse,
  UsersInfoArguments,
  UsersInfoResponse,
} from '@slack/web-api';
import { callSlackApi } from '../api';

export const readHistory = (channelId: string) => {
  const apiMethod = 'conversations.history';
  const response = callSlackApi({
    apiMethod,
    payload: {
      channel: channelId,
    } as ConversationsHistoryArguments,
  });
  const { ok, messages, error } = JSON.parse(
    response.getContentText(),
  ) as ConversationsHistoryResponse;
  if (!ok) {
    throw new Error(`Slack Api : ${apiMethod} fail. Message: ${error}`);
  }

  return messages;
};

export const getUser = (userId: string) => {
  const apiMethod = 'users.info';
  const response = callSlackApi({
    apiMethod,
    payload: {
      user: userId,
    } as UsersInfoArguments,
  });
  const { ok, user, error } = JSON.parse(
    response.getContentText(),
  ) as UsersInfoResponse;
  if (!ok) {
    throw new Error(`Slack Api : ${apiMethod} fail. Message: ${error}`);
  }
  return user;
};
