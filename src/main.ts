import { loadMessages } from './slack/loadMessages';
import { channelId, sheetForSlackId } from './env';
import { messageSchema } from './constants';
import { writeToRow as writeAccordingToSchema } from './sheet/writeToRow';

export const main = async () => {
  const messages = loadMessages(channelId());

  const headerTexts = messageSchema.map(({ name }) => {
    return name;
  });
  const sheetForSlackRawData = SpreadsheetApp.openById(
    sheetForSlackId(),
  ).getSheets()[0];
  const currentHeader = sheetForSlackRawData.getRange(
    1,
    1,
    1,
    headerTexts.length,
  );
  currentHeader.setValues([headerTexts]);
  writeAccordingToSchema({
    messages,
    messageSchema,
    sheet: sheetForSlackRawData,
    startAt: { row: 2, column: 1 },
  });
  console.log(messages);
};
