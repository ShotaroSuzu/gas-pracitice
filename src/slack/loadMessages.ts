import { readHistory } from './slackDao';

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
      const url = attachment.from_url || '';
      const author = attachment.author_id;
      const name = attachment.author_name;
      const text = attachment.text || '';
      // const mail = attachment.author_id //TODOメール検索APIを呼び出す
      const fileUrl = attachment.files && attachment.files[0]?.url_private;
      return { ts, url, author, name, text, fileUrl };
    });
  return targets;
};
