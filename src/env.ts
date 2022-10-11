// このモジュールに存在する各 property は Apps Script の スクリプトプロパティを読み込みます。
// 本スクリプトを実行する前に対象のプロジェクトのスクリプトプロパティに 本ファイルに含まれるプロパティの設定をしてください。

const getProperty = (key: string) => {
  return PropertiesService.getScriptProperties().getProperty(key);
};

export const slackApiToken = () => {
  return getProperty('SLACK_API_TOKEN');
};

export const channelId = () => {
  return getProperty('SLACK_CHANNEL_ID');
};

export const sheetForSlackId = () => {
  return getProperty('SHEET_FOR_SLACK_ID');
};
