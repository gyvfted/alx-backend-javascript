export default function getStudentIdsSum(students) {
  return students.reduce((age, student) => age + student.id, 0);
}
