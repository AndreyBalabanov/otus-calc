export type ScalarOperationType = (first: number, second: number) => number;
export type UnaryOperationType = (operand: number) => number;

export const mul: ScalarOperationType = (first: number, second: number): number => first * second;

export const div: ScalarOperationType = (first: number, second: number): number => first / second;

export const add: ScalarOperationType = (first: number, second: number): number => first + second;

export const minus: ScalarOperationType = (first: number,  second: number): number => first - second;

export const sqr: UnaryOperationType = (first: number): number => first * first;

export const pwr: ScalarOperationType = (base: number, exponent: number): number => Math.pow(base, exponent);

export const fact: UnaryOperationType = (first: number): number => (first != 1) ? first * fact(first - 1) : 1;

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": sqr,
  "^": pwr,
  "!": fact,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
