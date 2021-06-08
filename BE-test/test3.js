/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  // Your Code Here
  const array = []
  const classes
  for (let i = 0; i < data.length; i++) {
    let temp
    if (data[i].session_name !== null) {
      temp = {
        session_name: data[i].session_name,
        classes: []
      }
    } else {
      temp = {
        classes: []
      }
    }
    const dataClass = []
    const dataStudent = []
    const classData = data[i].classes

    for (let j = 0; j < classData.length; j++) {
      if (classData[j].class_name !== undefined) {
        // dataClass.push({class_name: classData[j].class_name})
        temp.classes.push({ class_name: classData[j].class_name })
      }
      if (classData[j].students[0].student_name !== undefined) {
        // console.log(classData[j].students[0].student_name)
        temp.classes.push({ student_name: classData[j].students[0].student_name })
      }
    }
    // console.log(temp, 'ini class')
    array.push(temp)
  }
  console.log(array[1])
  console.log(array[1].classes[0])
  // console.log(array[1].classes.students)
  // console.log(array[1].classes)
  // console.log(array[1].classes)
  // return array
}

console.log(result(data));
// Expected Result:
// [
//   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
//   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },

// ]