import clipboard from '../index';

let clipboardText = 'default test';
Object.defineProperty(window, 'navigator', {
  value: {
    clipboard: {
      writeText: async function (content: string) {
        return new Promise<void>((resolve) => {
          clipboardText = content;
          resolve();
        });
      },
      readText: async function () {
        return new Promise<string>((resolve) => {
          resolve(clipboardText);
        });
      },
    },
  },
});

test('clipboard-read-default', () => {
  clipboard.read((text) => {
    expect(text).toEqual('default test');
  });
});

test('clipboard-write', () => {
  clipboard.write('write111', () => {
    expect(clipboardText).toEqual('write111');
  });
});

test('clipboard-read', () => {
  clipboard.write('write222', () => {
    clipboard.read((text) => {
      expect(text).toEqual('write222');
    });
  });
});
