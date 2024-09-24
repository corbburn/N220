const course = {
  courseNumber: "N220",
  courseTitle: "Introduction to Media Application Development",
  totalSeats: 20,
  enrolledStudents: 18,
  getAvailibility() {
    return this.totalSeats > this.enrolledStudents;
  },
};
console.log(course);
console.log(`Enrolled Students: ${course.enrolledStudents}`);
console.log(`N220 Open: ${course.getAvailibility()}`);
course.enrolledStudents += 2;
console.log(`Enrolled Students: ${course.enrolledStudents}`);
console.log(`N220 Open: ${course.getAvailibility()}`);

var tacocat = "wednesday";
function IUPUIWebsite() {
  console.log(window.tacocat);
  console.log(`Inner Width: ${window.innerWidth}`);
  console.log(`Outer Width: ${window.outerWidth}`);

  console.log(window.location);
}

function printPage() {
  window.print();
}

document.getElementById("dpDetails").innerHTML += course.courseTitle;
course.courseTitle;

document.querySelector("#domain").innerHTML += "Hi";

const updatePTag = document.getElementById("update");

console.log(updatePTag.querySelector("#delete"));

console.log(String(100), length, 100);
console.log(String(100).includes("2"), 100);
console.log("100".replace("0", "2"), 100);
console.log("1,2,3,4".split(","));
console.log((123).trim());
