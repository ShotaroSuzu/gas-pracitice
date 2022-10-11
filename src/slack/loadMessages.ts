import { RawMessage } from './types';
import { getUser, readHistory } from './slackDao';
import { convertMillisecond } from './util';

export const loadMessages = (channelId: string): RawMessage[] => {
  const messages = readHistory(channelId);
  const targets = messages
    .filter(({ username, attachments }) => {
      return username === 'Reacji Channeler' && attachments?.length > 0;
    })
    .filter(({ attachments }) => {
      return attachments[0] && attachments[0].author_id;
    })
    .map(({ ts, attachments }) => {
      const attachment = attachments[0];
      const user = attachment.author_id && getUser(attachment.author_id);
      return {
        reacjiDateTime: new Date(convertMillisecond(ts)).toISOString(),
        authorId: attachment.author_id,
        authorName: attachment.author_name || '',
        text: attachment.text || '',
        authorEmail: user?.profile?.email || '',
        url: attachment.original_url || '',
        fileUrl: (attachment.files && attachment.files[0]?.url_private) || '',
        originalDateTime:
          (attachment.ts && new Date(convertMillisecond(ts)).toISOString()) ||
          '',
      };
    })
    .sort((a, b) => {
      if (a.reacjiDateTime < b.reacjiDateTime) {
        return -1;
      }
      if (a.reacjiDateTime > b.reacjiDateTime) {
        return 1;
      }
      return 0;
    });
  return targets;
};
