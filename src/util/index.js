export function chunk(item, size) {
  if (item.length <= 0 || size <= 0) {
    return item;
  }

  let chunks = [];

  for (let i = 0; i < item.length; i = i + size) {
    chunks.push(item.slice(i, i + size));
  }

  return chunks;
}
