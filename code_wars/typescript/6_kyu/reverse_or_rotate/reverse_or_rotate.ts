function isStringOfDigits(str: string): boolean {
  return str.split('').every((char) => char >= '0' && char <= '9');
}

function chunkString(str: string, chunkSize: number): string[] {
  const chunks: string[] = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    const chunk = str.slice(i, i + chunkSize);
    if (chunk.length === chunkSize) chunks.push(chunk);
  }
  return chunks;
}

function reverseChunk(chunk: string): string {
  return chunk.split('').reverse().join('');
}

function rotateChunk(chunk: string): string {
  return chunk.slice(1) + chunk[0];
}

export function revRot(str: string, chunkSize: number): string {
  if (
    !str ||
    chunkSize <= 0 ||
    chunkSize > str.length ||
    !isStringOfDigits(str)
  ) {
    return '';
  }

  const chunks = chunkString(str, chunkSize);
  const modifiedChunks = chunks.map((chunk) => {
    const sumOfCubes = chunk
      .split('')
      .reduce((acc, digit) => acc + Math.pow(Number(digit), 3), 0);
    return sumOfCubes % 2 === 0 ? reverseChunk(chunk) : rotateChunk(chunk);
  });

  return modifiedChunks.join('');
}
