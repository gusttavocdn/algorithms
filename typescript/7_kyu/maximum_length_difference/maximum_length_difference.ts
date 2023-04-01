export const mxdiflg = (a1: string[], a2: string[]): number => {
  if (!a1.length || !a2.length) return -1;

  const maxValues = [
    Math.max(...a1.map((x) => x.length)),
    Math.max(...a2.map((x) => x.length)),
  ];
  const minValues = [
    Math.min(...a1.map((x) => x.length)),
    Math.min(...a2.map((x) => x.length)),
  ];

  return Math.max(...maxValues) - Math.min(...minValues);
};

const s1 = ['Gustavo', 'da', 'Silva'];
const s2 = ['dsa', 'dsa', 'dsa'];

const a1 = [
  'hoqq',
  'bbllkw',
  'oox',
  'ejjuyyy',
  'plmiis',
  'xxxzgpsssa',
  'xxwwkktt',
  'znnnnfqknaz',
  'qqquuhii',
  'dvvvwz',
];

const a2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];

// console.log(mxdiflg(a1, a2));
