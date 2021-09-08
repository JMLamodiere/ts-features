const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprint: Drink = ["clear", true, 40];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horesepower: 400,
  weight: 3354,
};
