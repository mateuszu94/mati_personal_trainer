export const pickSmalestandLargest = (numbers) => {
  if (numbers.length === 0) {
    return [0, 0];
  }
  const smallest = Math.min(...numbers);
  const largest = Math.max(...numbers);
  return [smallest, largest];
};
