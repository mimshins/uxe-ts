type FN = (arg: string) => void;

type DescribableFN = {
  description: string;
  (arg: string): void;
};

type Constructor = {
  new (arg: string): void;
};

const construct = (ctor: Constructor) => {
  new ctor("Hello");
};

// Generic and Inference
const firstElement = <T>(arr: Array<T>): T => {
  return arr[0];
};

// Constraints
const longest = <T extends { length: number }>(subjA: T, subjB: T): T => {
  if (subjA.length >= subjB.length) return subjA;
  else return subjB;
};

// Function Overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

export {};
