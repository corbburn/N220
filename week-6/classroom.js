const classroom = {
  students: [],
  name: "Ty's Class",
  showStudents() {
    document.getElementById("students").innerHTML = "";
    for (let i = 0; i < this.students.length; i++) {
      const studentName = this.students[i];
      document.getElementById("students").innerHTML += studentName + "<br />";
    }
  },
  maxStudents: 2,
};

function addNewStudent() {
  const currentStudents = classroom.students.length;
  if (currentStudents >= classroom.maxStudents) {
    console.log("No seats available");
  } else {
    classroom.students.push(document.getElementById("studentName").value);
    classroom.showStudents();
  }
}
