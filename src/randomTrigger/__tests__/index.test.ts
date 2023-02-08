import randomTrigger from '../index';

test.concurrent('randomTrigger-general', async () => {
  return new Promise<void>((resolve) => {
    const last = Date.now();
    randomTrigger(2, 5, () => {
      const diff = Date.now() - last;
      console.log('randomTrigger', diff);
      expect(diff).toBeGreaterThan(2000);
      expect(diff).toBeLessThan(5000);
      resolve();
    });
  });
});
