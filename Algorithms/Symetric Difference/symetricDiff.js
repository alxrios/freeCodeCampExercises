function sym(args) {
  // First step, clean the possible repeated elements:
  function clean_rep(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1)
          j--
        }
      }
    }
  }
  // Apply the clean function:
  for (let i = 0; i < arguments.length; i++) {
    clean_rep(arguments[i])
  }

  // Second step, find the symetric difference:
  let result = arguments[0]
  for (let arg = 1; arg < arguments.length; arg++) {
    for (let i = 0; i < arguments[arg].length; i++) {
      let find_pos = null
      for (let j = 0; j < result.length; j++) {
        if (result[j] === arguments[arg][i]) {
          find_pos = j
        }
      }
      if (find_pos != null) {
        result.splice(find_pos, 1)
      } else {
        result.push(arguments[arg][i])
      }
    }

  }
  // Third step, sort the result:
  function sort_result(input) {
    for (let i = 0; i < input.length  - 1; i++) {
      let min = input[i]
      for (let j = i + 1; j < input.length; j++) {
        if (min > input[j]) {
          let aux = input[j]
          input[j] = min
          input[i] = aux
          min = input[i]
        }
      }
    }
    return input
  }
  return sort_result(result)
}

// Tests
/*
console.log(sym([1, 2, 3, 3, 3], [5, 2, 1, 5, 4, 5]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]) );
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
*/