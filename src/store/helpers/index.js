export const mapIds = items => items.map(({ id }) => id);

export const reduceToObj = items =>
  items.reduce((acc, item) => {
    acc = { ...acc, [item.id]: item };
    return acc;
  }, {});

export const removeFromState = (objectKey, arrayKey) => (state, { id }) => {
  const itemPosition = state[arrayKey].indexOf(id);
  if (itemPosition === -1) {
    return state;
  }
  const { [id]: value, ...updatedStateObject } = state[objectKey];
  // slice's end is up to but not including that item at the provided index for the second argument (end).
  const updatedStateArray = [
    ...state[arrayKey].slice(0, itemPosition),
    ...state[arrayKey].slice(itemPosition + 1, state[arrayKey].length)
  ];
  return { [objectKey]: updatedStateObject, [arrayKey]: updatedStateArray };
};
