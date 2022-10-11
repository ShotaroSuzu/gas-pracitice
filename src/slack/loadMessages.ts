import { getUser, readHistory } from './slackDao';

export const loadMessages = (channelId: string) => {
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
        ts,
        url: attachment.from_url || '',
        author: attachment.author_id,
        name: attachment.author_name,
        text: attachment.text || '',
        email: user?.profile?.email,
        fileUrl: attachment.files && attachment.files[0]?.url_private,
      };
    });
  return targets;
};
