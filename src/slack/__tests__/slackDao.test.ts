import { mocked } from 'jest-mock';

import { callSlackApi } from '../../api';
import { mockedHttpResponse } from '../../__tests__/utils';
import { getUser, readHistory } from '../slackDao';

jest.mock('../../api');

describe('slackDao', () => {
  describe('readHistory', () => {
    const mockedCallSlackApi = mocked(callSlackApi);
    describe('success', () => {
      it('should return slack messages', () => {
        mockedCallSlackApi.mockReturnValueOnce({
          ...mockedHttpResponse,
          getContentText: () => {
            return JSON.stringify({
              ok: true,
              messages: [{ username: 'user-name', text: 'text' }],
            });
          },
        });

        expect(readHistory('channel-id')).toEqual([
          { username: 'user-name', text: 'text' },
        ]);
        expect(mockedCallSlackApi).toHaveBeenCalledWith({
          apiMethod: 'conversations.history',
          payload: {
            channel: 'channel-id',
          },
        });
      });
    });
    describe('fail', () => {
      it('should throw Error', () => {
        mockedCallSlackApi.mockReturnValueOnce({
          ...mockedHttpResponse,
          getContentText: () => {
            return JSON.stringify({ ok: false, error: 'invalid_auth' });
          },
        });
        expect(() => {
          readHistory('channel-id');
        }).toThrow(
          'Slack Api : conversations.history fail. Message: invalid_auth',
        );
      });
    });
  });
  describe('getUser', () => {
    const mockedCallSlackApi = mocked(callSlackApi);
    describe('success', () => {
      it('should return slack messages', () => {
        mockedCallSlackApi.mockReturnValueOnce({
          ...mockedHttpResponse,
          getContentText: () => {
            return JSON.stringify({
              ok: true,
              user: {
                profile: {
                  email: 'author-email',
                },
              },
            });
          },
        });

        expect(getUser('user-id')).toEqual({
          profile: {
            email: 'author-email',
          },
        });
        expect(mockedCallSlackApi).toHaveBeenCalledWith({
          apiMethod: 'users.info',
          payload: {
            user: 'user-id',
          },
        });
      });
    });
    describe('fail', () => {
      it('should throw Error', () => {
        mockedCallSlackApi.mockReturnValueOnce({
          ...mockedHttpResponse,
          getContentText: () => {
            return JSON.stringify({ ok: false, error: 'invalid_auth' });
          },
        });
        expect(() => {
          getUser('user-id');
        }).toThrow('Slack Api : users.info fail. Message: invalid_auth');
      });
    });
  });
});
