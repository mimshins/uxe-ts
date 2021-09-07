interface PaintOptions {
  xPos?: number;
  yPos?: number;
  readonly prop: string;
}

interface StringArray {
  [index: number]: string;
}

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit {
  name?: string;
  unit: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit2 extends BasicAddress {
  unit: string;
}

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}
type ColorfulCircle2 = Colorful & Circle;

interface IBox<Type> {
  contents: Type;
}

type TBox<Type> = {
  contents: Type;
};

type SelfOrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = SelfOrNull<OneOrMany<Type>>;

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

type StringNumberTuple = [string, number];
type ReadonlyStringNumberTuple = readonly [string, number];
const points = [3, 5] as const;

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

export {};
