const frets = [
  {
    _id: 20,
    name: 20
  },
  {
    _id: 21,
    name: 21
  },
  {
    _id: 22,
    name: 22
  },
  {
    _id: 24,
    name: 24
  }
];

const price = [
  {
    _id: 0,
    name: "Any",
    array: []
  },
  {
    _id: 1,
    name: "$0 to $299",
    array: [0, 299]
  },
  {
    _id: 2,
    name: "$300 to $599",
    array: [300, 599]
  },
  {
    _id: 3,
    name: "$600 to $999",
    array: [600, 999]
  },
  {
    _id: 4,
    name: "$1000 to $1999",
    array: [1000, 1999]
  },
  {
    _id: 5,
    name: "More than $2000",
    array: [2000, 1500000]
  }
];

export { frets, price };
