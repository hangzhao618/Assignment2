/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
console.log("\n--------------******** Question 1 ********-----------");
console.log("Double the quantity and price in each object:");

const doubelValue = (array) => {
  return array.map((item) => {
    return { quantity: item.quantity * 2, price: item.price * 2 };
  });
};
console.log(doubelValue(itemsObject));

console.log("\nFind item quantity > 2 and price > 300:");

const findItem = (array) => {
  return array.filter((item) => {
    return item.quantity > 2 && item.price > 300;
  });
};
console.log(findItem(itemsObject));

console.log("\nCalculate the total value of the items:");

const totalValue = (array) => {
  return array.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
};
console.log(totalValue(itemsObject));

/*
  Question 2
  Given the string, implement a function to remove all the non-alphabet characters and 
  extra space in the string and convert the string to all lowercase.
  */

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

console.log("\n--------------******** Question 2 ********-----------");
console.log(
  "Remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase:\n"
);
console.log(string.replace(/-|  +/g, " ").trim().toLowerCase());

/*
  Question 3
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, 
  second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
  */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

console.log("\n--------------******** Question 3 ********-----------");
console.log("Merge two arrays of objects on uuid:");

const mergeTwoArray = (array1, array2) => {
  // get all keys
  const keys = [
    ...new Set([...Object.keys(array2[0]), ...Object.keys(array1[0])]),
  ];

  // combine two arrays
  const array3 = array1.concat(array2);

  // Get all uuids without duplication
  const uuids = [...new Set(array3.map((item) => item.uuid))].sort();

  // combine objects with the same uuid
  const result = uuids.map((id) => {
    const b = array3.reduce((self, item) => {
      a = item.uuid === id ? Object.assign(self, item) : self;
      return a;
    }, {});
    let c = {};
    for (let k of keys) {
      c[k] = b[k] || null;
    }
    return c;
  });
  console.log(result);
};

mergeTwoArray(first, second);
