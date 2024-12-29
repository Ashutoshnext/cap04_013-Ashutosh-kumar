let filterAndDouble = (arr) => {
    return arr.filter(item => item >= 5).map(item => item * 2);
  }
  
  const result = filterAndDouble([1, 3, 5, 7, 9]);
  console.log(result); // Output: [10, 14, 18]
  