/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpentByCategory = transactions.reduce(reducer, {});

  /*
  Object.entries() is a method that returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
  */
  return Object.entries(totalSpentByCategory).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
}
function reducer (accumulator, transaction) {
  const { category, price } = transaction;
  if (accumulator[category]) {
    // checking if the accumulator object has a property named category.
    accumulator[category] += price;
  } else {
    accumulator[category] = price;
  }
  return accumulator;
}
module.exports = calculateTotalSpentByCategory;

/*
 DRY RUN:
In the context of the reduce method, the {} is the initial value of the accumulator. Here’s a detailed explanation:

Initial Value ({}): The {} represents an empty object. This empty object is provided as the initial value for the accumulator, which is used to accumulate the results of the reduction.
When you call .reduce with two arguments (reducer and {}), the reduce method will:

Initialize the accumulator with the empty object {}.
Iterate over each transaction in the transactions array, passing the current accumulator and the current transaction to the reducer function.
Here’s a step-by-step breakdown of how the reduce method works with the provided reducer function and the initial value {}:

First Iteration:

accumulator = {}
transaction = { category: 'Groceries', price: 20 }
The reducer function adds a new key Groceries with a value of 20 to the accumulator: { Groceries: 20 }.
Second Iteration:

accumulator = { Groceries: 20 }
transaction = { category: 'Entertainment', price: 50 }
The reducer function adds a new key Entertainment with a value of 50 to the accumulator: { Groceries: 20, Entertainment: 50 }.
Third Iteration:

accumulator = { Groceries: 20, Entertainment: 50 }
transaction = { category: 'Groceries', price: 30 }
The reducer function updates the value of the Groceries key by adding 30 to the existing value: { Groceries: 50, Entertainment: 50 }.
Fourth Iteration:

accumulator = { Groceries: 50, Entertainment: 50 }
transaction = { category: 'Utilities', price: 100 }
The reducer function adds a new key Utilities with a value of 100 to the accumulator: { Groceries: 50, Entertainment: 50, Utilities: 100 }.
Fifth Iteration:

accumulator = { Groceries: 50, Entertainment: 50, Utilities: 100 }
transaction = { category: 'Entertainment', price: 20 }
The reducer function updates the value of the Entertainment key by adding 20 to the existing value: { Groceries: 50, Entertainment: 70, Utilities: 100 }.
*/
