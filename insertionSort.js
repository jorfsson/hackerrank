let testArr = [16, 7, 20, 2, 5, 8, 190, 21, 23, 25, 29, 28],
    resArr = [2, 5, 7, 8, 16, 20, 21, 23, 25, 28, 29, 190];

function insertionSort(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < arr[i - 1]) {
      swap(arr, i, i - 1)
      i--;
    } else {
      i++
    }
  }
  return arr
}

function swap(arr, idx, idy) {
  [arr[idx], arr[idy]] = [arr[idy], arr[idx]]
}


function test(res, goal) {
  let result = true;
  for (let i = 0; i < goal.length; i++) {
    if (res[i] !== goal[i]) {
      result = false;
    }
  }
  return result;
}

console.log(test(insertionSort(testArr), resArr));
