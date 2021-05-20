interface Store {
  [key: string]: number;
}

// Helper function to make the first letter of a string Uppercase
const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Callback function that creates a hasMap that keeps a count of all elements.
 * @param {Store} store - The initial hasMap
 * @param {key} string -  The element of the collection
 * @return {Store}        The populated store
 */
const createStoreFromCollection = (store: Store, key: string) => {
  const capitilisedKey = capitalizeFirstLetter(key);
  if (Object.prototype.hasOwnProperty.call(store, capitilisedKey)) {
    store[capitilisedKey]++;
  } else {
    store[capitilisedKey] = 1;
  }
  return store;
};

// Space O(1) / Time O(N)
/**
 * Creates a hasMap that keeps a count of all elements.
 * @param {[string]} collection - The initial collection (array)
 * @return {Store}        				The populated store
 */
export const countTheElements = (collection: string[]) =>
  collection.reduce(createStoreFromCollection, {});
