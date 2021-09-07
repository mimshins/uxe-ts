// Indexed Access Types
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 }
];

type T1 = typeof MyArray[number];
type T2 = typeof MyArray[number]["age"];

interface User {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
}

type UserProperties = keyof User;

const updateAddress = (id: User["id"], newAddress: User["address"]) => {
  return {};
};

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const user = { name: "John Doe", age: 25 };

const age = getProperty(user, "age");
const name = getProperty(user, "name");

interface MyMouseEvent {
  x: number;
  y: number;
}

interface MyKeyboardEvent {
  key: string;
}

interface MyEvents {
  click: MyMouseEvent;
  keydown: MyKeyboardEvent;
}

const handleEvent = <E extends keyof MyEvents>(
  eventName: E,
  eventHandler: MyEvents[E]
) => {};

// Conditional Types
interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Ex1 = Dog extends Animal ? number : string;
type Ex2 = RegExp extends Animal ? number : string;

type AUnion = string | boolean | never;

type ToArray<Type> = Type extends any ? Type[] : never;
type ToArrayNonDistributive<Type> = [Type] extends [any] ? Type[] : never;

type X = ToArray<string | number>;
type Y = ToArrayNonDistributive<string | number>;

// Flatten<number[]> => number
// Flatten<number> => number
type Flatten<T> = T extends Array<infer R> ? R : T;

// ExcludeType<"a" | "b" | "c", "a"> => "b" | "c"
// ExcludeType<string | number | (() => void), Function> => string | number
type ExcludeType<T, U> = T extends U ? never : T;

// ExtractType<"a" | "b" | "c", "a" | "f"> => "a"
// ExtractType<string | number | (() => void), Function> => (() => void)
type ExtractType<T, U> = T extends U ? T : never;

// NonNullableType<string | number | undefined> => string | number
// NonNullableType<string[] | null | undefined> => string[]
type NonNullableType<T> = T extends undefined | null ? never : T;

// ParametersOf<() => void> => []
// ParametersOf<(s: string) => void> => [s: string]
type ParametersOf<T> = T extends (...arg: infer P) => unknown ? P : never;

// ReturnTypeOf<() => void> => void
// ReturnTypeOf<(s: string) => number> => number
type ReturnTypeOf<T> = T extends (...arg: any) => infer R ? R : never;

class Clazz {
  constructor(n: number, s: string) {}
}

type InstanceTypeOf<T> = T extends abstract new (...arg: any) => infer R
  ? R
  : never;

// TODO: Write
type ConstructorParametersOf<T> = T extends abstract new (
  ...arg: infer P
) => any
  ? P
  : never;

// Mapped Types
type OnlyBoolsAndHorses = {
  [key: string]: boolean | "Horse";
};

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type Mandatory<T> = {
  [P in keyof T]-?: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type ObjectOfType<K extends string | number | symbol, V> = {
  [P in K]: V;
};

type PickKeys<T, K extends keyof T> = {
  [P in K]: T[P];
};

type OmitKeys<T, K extends keyof T> = {
  [P in ExcludeType<keyof T, K>]: T[P];
};

type TT = OmitKeys<string, "charAt" | "toString">;

type WithGetters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

type T = WithGetters<Person>;

export {};
