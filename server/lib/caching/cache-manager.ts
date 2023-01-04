export const cache = async (key: string, callback: Function) => {
  const cacheKey = `cache:${key}`;

  const data = await useStorage().getItem(cacheKey);
  if (data) {
    console.log('Get cached data for key: %s', key);
    return data;
  }

  const result = await callback();

  console.log('Caching data for key: %s', key);
  await useStorage().setItem(cacheKey, result);

  return result;
};
