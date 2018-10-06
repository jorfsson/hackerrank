let testArr = [16, 7, 20, 2, 5, 8, 190, 21, 23, 25, 29, 28],
    resArr = [2, 5, 7, 8, 16, 20, 21, 23, 25, 28, 29, 190];

function bubbleSort(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1)
      counter++;
    }
  }
  if (counter === 0) {
    console.log(arr)
    return arr
  } else {
    return bubbleSort(arr)
  }
}

function swap(arr, id1, id2) {
  [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
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

console.log(test(bubbleSort(testArr), resArr));
