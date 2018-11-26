const divide = (arr) => {
  const center = Math.floor(arr.length / 2)
  let leftArr = arr.slice(0, center)
  let rightArr = arr.slice(center)

  if (leftArr.length > 2) {
    leftArr = divide(leftArr)
  }

  if (rightArr.length > 2) {
    rightArr = divide(rightArr)
  }

  if (leftArr.length === 2) {
    leftArr = leftArr[0] > leftArr[1] ? [leftArr[1], leftArr[0]] : leftArr
  }

  if (rightArr.length === 2) {
    rightArr = rightArr[0] > rightArr[1] ? [rightArr[1], rightArr[0]] :
      rightArr
  }
  return mergeSort(leftArr, rightArr)

}

const mergeSort = (leftArr, rightArr) => {
  let sortedArray = [], remainingArray = rightArr
  for (let i = 0; i < leftArr.length; i++) {
    rightRemaining = []
    for (j = 0; j < remainingArray.length; j++) {
      if (leftArr[i] >= remainingArray[j]) {
        sortedArray.push(remainingArray[j])
      } else {
        rightRemaining.push(remainingArray[j])
      }
    }
    sortedArray.push(leftArr[i])
    remainingArray = rightRemaining
  }
  return sortedArray.concat(remainingArray)
}

console.log(divide([6, 5, 3, 1, 8, 7, 2, 4]))
