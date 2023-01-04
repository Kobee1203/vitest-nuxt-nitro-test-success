import { vi } from 'vitest';

const mockedStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
};

export const useStorage = vi.fn(() => mockedStorage);
