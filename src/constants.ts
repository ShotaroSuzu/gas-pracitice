import { SheetSchema } from './types';

export const messageSchema: SheetSchema = [
  { key: 'reacjiDateTime', name: 'Reacji 日時' },
  { key: 'authorId', name: '投稿者ID' },
  { key: 'authorName', name: '投稿者氏名' },
  { key: 'authorEmail', name: '投稿者メアド' },
  { key: 'text', name: '本文' },
  { key: 'url', name: 'URL' },
  { key: 'fileUrl', name: '添付ファイルリンク' },
  { key: 'originalDateTime', name: '投稿日時' },
];
