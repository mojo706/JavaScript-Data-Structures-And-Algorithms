const binarySearch = (arr, item) => {

  let { length } = arr
  let firstIndex = 0
  let lastIndex = length - 1
  let midPoint = Math.floor(length / 2)

  while (arr[midPoint] != item && firstIndex < lastIndex) {
    if (item < arr[midPoint]) {
      lastIndex = midPoint - 1
    } else {
      firstIndex = midPoint + 1
    }

    midPoint = Math.floor((lastIndex + firstIndex) / 2)
  }

  return (arr[midPoint] != item) ? -1 : midPoint;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4))
