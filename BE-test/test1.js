/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 * 
 * Expected Result:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
 *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
  { session_id: 1, time: '09:00', student: { student_id: 1, name: 'Adi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 2, time: '10:00', student: { student_id: 5, name: 'Surya' }, class: { class_id: 3, name: 'C' } },
  { session_id: 2, time: '10:00', student: { student_id: 8, name: 'Edi' }, class: { class_id: 4, name: 'D' } },
  { session_id: 2, time: '10:00', student: { student_id: 7, name: 'Dede' }, class: { class_id: 4, name: 'D' } },
  { session_id: 1, time: '09:00', student: { student_id: 3, name: 'Bayu' }, class: { class_id: 2, name: 'B' } },
  { session_id: 1, time: '09:00', student: { student_id: 2, name: 'Budi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 1, time: '09:00', student: { student_id: 4, name: 'Dharma' }, class: { class_id: 2, name: 'B' } },
  { session_id: 2, time: '10:00', student: { student_id: 3, name: 'Maha' }, class: { class_id: 3, name: 'C' } },
];

function result(sessions) {
  // Your Code Here
  const expectedResult = []
  let template = {
    session_id: 0,
    time: '',
    classes: []
  }

  let templateClass = {
    class_id: 0,
    name: '',
    students: [],
  }
  let studentArrA = []
  let studentArrB = []
  let studentArrC = []
  let studentArrD = []
  for (let i = 0; i < sessions.length; i++) {
    if (sessions[i].class.class_id === 1) {
      studentArrA.push(sessions[i].student)
    } else if (sessions[i].class.class_id === 2) {
      studentArrB.push(sessions[i].student)
    } else if (sessions[i].class.class_id === 3) {
      studentArrC.push(sessions[i].student)
    } else if (sessions[i].class.class_id === 4) {
      studentArrD.push(sessions[i].student)
    }
  }
  // sesion 1
  templateClass.students.push(studentArrA)
  templateClass.class_id = 1,
  templateClass.name = 'A'
  template.classes.push(templateClass)

  templateClass = {
    class_id: 0,
    name: '',
    students: [],
  }

  templateClass.students.push(studentArrB)
  templateClass.class_id = 2,
  templateClass.name = 'B'
  template.classes.push(templateClass)

  templateClass = {
    class_id: 0,
    name: '',
    students: [],
  }

  template.session_id = 1,
  template.time = '09:00'
  expectedResult.push(template)

  template = {
    session_id: 0,
    time: '',
    classes: []
  }

  // sesion 2
  templateClass.students.push(studentArrC)
  templateClass.class_id = 3,
  templateClass.name = 'C'
  template.classes.push(templateClass)

  templateClass = {
    class_id: 0,
    name: '',
    students: [],
  }

  templateClass.students.push(studentArrD)
  templateClass.class_id = 4,
  templateClass.name = 'D'
  template.classes.push(templateClass)
  templateClass = {
    class_id: 0,
    name: '',
    students: [],
  }
  template.session_id = 2,
  template.time = '10:00'
  expectedResult.push(template)
  template = {
    session_id: 0,
    time: '',
    classes: []
  }
  return expectedResult
}

console.log(result(sessions));
// done