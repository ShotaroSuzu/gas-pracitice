import { callSlackApi } from '../api';
import { mockedHttpResponse } from './utils';

jest.mock('../env', () => {
  return {
    slackApiToken: () => {
      return 'slack-api-token';
    },
  };
});
describe('api', () => {
  const mockedFetch = jest.fn();
  UrlFetchApp['fetch'] = mockedFetch;
  describe('callSlackApi', () => {
    it('should call GAS fetch', () => {
      mockedFetch.mockReturnValueOnce({
        ...mockedHttpResponse,
      });

      expect(
        callSlackApi({
          apiMethod: 'conversations.history',
          payload: { channelId: 'channel-id' },
        }),
      ).toEqual({
        ...mockedHttpResponse,
      });
      expect(mockedFetch).toHaveBeenCalledWith(
        'https://www.slack.com/api/conversations.history',
        {
          method: 'post',
          contentType: 'application/x-www-form-urlencoded',
          headers: { Authorization: `Bearer slack-api-token` },
          payload: {
            channelId: 'channel-id',
          },
        },
      );
    });
  });
});
