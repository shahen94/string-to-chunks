function stringToChunks(value: string, chunks: number[]): string[] {
  let skipped = 0;
  const finalResult = [];

  const digits = [...chunks].reverse();

  for (const size of digits) {
    const currentSplice = [];

    const startIndex = value.length - skipped - size >= 0
      ? value.length - size - skipped
      : 0;
    const endIndex = value.length - skipped >= 0
      ? value.length - skipped
      : 0;

    if (startIndex === endIndex) {
      continue;
    }

    skipped += size;

    for (let cursor = startIndex; cursor < endIndex; ++cursor) {
      currentSplice.push(value[cursor]);
    }

    finalResult.unshift(currentSplice.join(''));
  }

  return finalResult;
}

export default stringToChunks;