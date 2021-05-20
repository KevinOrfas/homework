// Note: There is also a brute force approach which uses double for loop to find the most recurring element hence the time complexity for it would be O(n^2)
// The current implemtation uses SET that brings time complexity down to O(n)

// O(n) time | O(n) space = where n is the length of input array
// O(n) time as it loops through all elements of array and O(n) as it uses Set to store the elements
/**
 * Find the most reccuring element in the array
 * @param {[numbers]} collection - The initial collection (array)
 * @return {number}        				reccuring element
 */
function findRecurringFast(numbers: number[]) {
  const seen = new Set();
  for (const number of numbers) {
    if (seen.has(number)) {
      return number;
    }
    seen.add(number);
  }
  return undefined;
}

/**
 * Iterates through an array of arrays and for each nested array find the most reccuring number
 * @param {[numbers]} collection - The initial collection (array)
 * @return {[number]}        			 An array of all recurring numbers
 */
const firstRecurringChar = (collection: Array<number[]>) => {
  return collection.map((numbers) => findRecurringFast(numbers));
};

export { firstRecurringChar };
