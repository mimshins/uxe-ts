// Control Flow Analysis
const e1 = () => {
  let x: string | number | boolean;

  x = Math.random() < 0.5;
  console.log(x);

  if (Math.random() < 0.5) {
    x = "";
    console.log(x);
  } else {
    x = 1;
    console.log(x);
  }

  return x;
};

// Type Predicates
type Fish = { swim: () => void };
type Bird = { fly: () => void };

const isFish = (pet: Fish | Bird): pet is Fish => {
  return (pet as Fish).swim !== undefined;
};

const getRandomPet = () => {
  const r = Math.random();

  if (r < 0.5)
    return {
      swim: () => {
        console.log("swim");
      }
    } as Fish;
  else
    return {
      fly: () => {
        console.log("fly");
      }
    } as Bird;
};

const pet = getRandomPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

// Exhaustiveness Checking
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

const getArea = (shape: Shape) => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      return shape;
  }
};

export {};
