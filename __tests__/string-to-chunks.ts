import stringToChunks from '../src';

interface ITestCase {
  value: string;
  chunks: number[],
  expected: string[],
}

const cases: ITestCase[] = [
  { value: '18', chunks: [1, 1], expected: ['1', '8'] },
  { value: '1', chunks: [3, 3], expected: ['1'] },
  { value: '123', chunks: [1, 1, 1], expected: ['1', '2', '3'] },
  { value: '556', chunks: [1, 1, 2], expected: ['5', '56'] },
  { value: '0', chunks: [10], expected: ['0'] },
  { value: '551133', chunks: [2, 2, 2], expected: ['55', '11', '33'] }
];

cases.forEach((testCase) => {
  test(`value: ${testCase.value}, chunks: ${testCase.chunks}, should result: ${testCase.expected}`, () => {
    expect(stringToChunks(testCase.value, testCase.chunks)).toEqual(testCase.expected);
  });
});