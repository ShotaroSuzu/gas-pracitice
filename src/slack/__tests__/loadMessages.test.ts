import { mocked } from 'jest-mock';
import { loadMessages } from '../loadMessages';
import { readHistory, getUser } from '../slackDao';

jest.mock('../slackDao');

describe('loadMessages', () => {
  const mockedReadHistory = mocked(readHistory);
  const mockedGetUser = mocked(getUser);
  it('should return converted messages', () => {
    mockedReadHistory.mockReturnValueOnce([
      {
        username: 'Reacji Channeler',
        ts: 'ts',
        attachments: [
          {
            from_url: 'from-url',
            author_id: 'author-id',
            author_name: 'author-name',
            text: 'attachment-text',
            files: [
              {
                url_private: 'url-private',
              },
            ],
          },
        ],
      },
      {
        username: 'Reacji Channeler',
      },
      {
        username: 'Reacji Channeler',
        attachments: [],
      },
      {
        username: 'Reacji Channeler',
        ts: 'ts',
        attachments: [{}],
      },
      {
        username: 'Reacji Channeler',
        ts: 'ts',
        attachments: [{ author_id: 'author-id', author_name: 'author-name' }],
      },
      {
        username: 'another user',
        attachments: [
          {
            from_url: 'from-url',
            author_id: 'author-id',
            author_name: 'author-name',
            text: 'attachement-test',
            files: [
              {
                url_private: 'url-private',
              },
            ],
          },
        ],
      },
    ]);
    mockedGetUser.mockReturnValueOnce({
      profile: {
        email: 'author-email',
      },
    });
    expect(loadMessages('channel-id')).toEqual([
      {
        ts: 'ts',
        url: 'from-url',
        author: 'author-id',
        name: 'author-name',
        text: 'attachment-text',
        fileUrl: 'url-private',
        email: 'author-email',
      },
      {
        ts: 'ts',
        url: '',
        author: 'author-id',
        name: 'author-name',
        text: '',
      },
    ]);
  });
});
