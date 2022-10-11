import {
  ConversationsHistoryArguments,
  ConversationsHistoryResponse,
} from '@slack/web-api';
import { callSlackApi } from '../api';

export const readHistory = (channelId: string) => {
  const response = callSlackApi({
    apiMethod: 'conversations.history',
    payload: {
      channel: channelId,
    } as ConversationsHistoryArguments,
  });
  const { ok, messages, error } = JSON.parse(
    response.getContentText(),
  ) as ConversationsHistoryResponse;
  if (!ok) {
    throw new Error(`Fail to read message from channel. Message: ${error}`);
  }

  return messages;
};
