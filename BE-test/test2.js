/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j] > data[j + 1]) {
        const temp = data[j + 1]
        data[j + 1] = data[j]
        data[j] = temp
      }
    }
  }
  const uniqueData = new Set(data)
  const resultArray = [...uniqueData]
  return resultArray
}

console.log(result(data));
//done
