class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything<string>(["a", "b"]);
const arrInferred = new ArrayOfAnything(["a", "b"]);

// Example of generics with functions
function printAnything<T>(arr: T[]): void {
  arr.forEach((elem: T) => console.log(elem));
}

printAnything<string>(["a", "b"]);

// Generic constraints

class Car {}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  arr.forEach((elem) => elem.print());
}

printHousesOrCars([new House()]);
