import { cache } from '../lib/caching/cache-manager';

export default defineEventHandler(async () => {
  return cache('runtimeConfig', () => useRuntimeConfig());
});
