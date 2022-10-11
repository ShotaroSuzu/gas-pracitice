import { Message } from '@slack/web-api/dist/response/ChannelsHistoryResponse';
import { SheetSchema } from '../types';

export const writeToRow = ({
  messages,
  messageSchema,
  sheet,
  startAt,
}: {
  messages: Message[];
  messageSchema: SheetSchema;
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  startAt: { row: number; column: number };
}) => {
  messages.forEach((message, rowNum) => {
    const row = sheet.getRange(
      startAt.row + rowNum,
      startAt.column,
      1, // １行ごとに書き込むため
      messageSchema.length,
    );
    messageSchema.forEach(({ key }, index) => {
      row.getCell(1, ++index).setValue(message[key]);
    });
  });
};
