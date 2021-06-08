/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  const expectedResult = {}
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      if (expectedResult[word[j]] === undefined) {
        expectedResult[word[j]] = 1
      } else {
        expectedResult[word[j]]++
      }
    }
  }

  let most = -Infinity
  let varKey = ''
  let temp = 0

  for (const key in expectedResult) {
    if (expectedResult[key] == most) {
      varKey += key
    } else if (expectedResult[key] > most) {
      varKey = key
      most = expectedResult[key]
      temp = expectedResult[key]
    }
  }
  return varKey
}

console.log(result(words));
// done