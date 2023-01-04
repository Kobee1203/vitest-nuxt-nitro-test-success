import { describe, beforeEach, afterEach, test, expect, vi } from 'vitest';
import { cache } from '~/server/lib/caching/cache-manager';
import { useStorage } from '~/__mocks__/storage';

describe('My test', () => {
  test('my test', async () => {
    useStorage().getItem.mockReturnValue(3);

    const result = await cache(`myKey`, () => 3);
    expect(useStorage().getItem).toBeCalledWith(`cache:myKey`);
    expect(result).toBe(3);
    expect(useStorage().setItem).not.toBeCalled();
  });

  test('my test 2', async () => {
    useStorage().getItem.mockReturnValue(null);

    const result = await cache(`myKey`, () => 3);
    expect(useStorage().getItem).toBeCalledWith(`cache:myKey`);
    expect(result).toBe(3);
    expect(useStorage().setItem).toBeCalledWith(`cache:myKey`, 3);
  });
});
