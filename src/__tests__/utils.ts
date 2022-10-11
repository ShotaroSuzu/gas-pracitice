export const mockedHttpResponse = {
  getAllHeaders: function (): object {
    throw new Error('Function not implemented.');
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAs: function (_: string): GoogleAppsScript.Base.Blob {
    throw new Error('Function not implemented.');
  },
  getBlob: function (): GoogleAppsScript.Base.Blob {
    throw new Error('Function not implemented.');
  },
  getContent: function (): number[] {
    throw new Error('Function not implemented.');
  },
  getContentText: () => {
    throw new Error('Function not implemented.');
  },
  getHeaders: function (): object {
    throw new Error('Function not implemented.');
  },
  getResponseCode: function (): number {
    throw new Error('Function not implemented.');
  },
};
