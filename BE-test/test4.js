/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j + 1]
        numbers[j + 1] = numbers[j]
        numbers[j] = temp
      }
    }
  }
  let missingNumber = 0
  let temp = 0
  for (let i = 0; i < numbers.length; i++) {
    if (i !== numbers[i]) {
      if (temp+i !== numbers[i]) missingNumber = i 
    }
  }
  return missingNumber
}

console.log(result(numbers));
// done
