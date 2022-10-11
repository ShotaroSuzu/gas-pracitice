import { loadMessages } from './slack/loadMessages';
import { channelId } from './env';

export const main = async () => {
  const messages = loadMessages(channelId());

  console.log(messages);
};
