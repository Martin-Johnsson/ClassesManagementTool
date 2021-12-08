let getData = async (URL) => {
  let response = await fetch(URL);
  let data = await response.json();
  return data;
};
async function theData() {
  let students = await getData("https://api.mocki.io/v2/01047e91/students");
  //let schools = await getData("https://api.mocki.io/v2/01047e91/schools");

  let list = document.getElementById("listDiv");

  students.forEach((student) => {
    let profileCard = document.createElement("div");
    profileCard.style.border = "2px solid black";
    profileCard.style.margin = "0 0 5px 0";

    let studentName = document.createElement("p");
    studentName.textContent = `Namn: ${student.firstName} ${student.lastName}`;
    profileCard.appendChild(studentName);

    let studentAge = document.createElement("p");
    studentAge.textContent = `Ålder: ${student.age}`;
    profileCard.appendChild(studentAge);

    let studentHobbies = document.createElement("p");
    studentHobbies.textContent = `Hobbys: ${student.hobbies}`;
    profileCard.appendChild(studentHobbies);

    let studentProgramme = document.createElement("p");
    studentProgramme.textContent = `Program eleven vill gå: ${student.programme}`;
    profileCard.appendChild(studentProgramme);

    list.appendChild(profileCard);
  });

  let button = document.querySelector("button");
  let programmeRadio = document.querySelectorAll(
    "input[name='programmeRadio']"
  );
  console.log(programmeRadio);

  button.addEventListener("click", () => {
    listDiv.innerHTML = "";
    let programme;
    programmeRadio.forEach((input) => {
      if (input.checked) {
        programme = input.value;
      }
    });

    let filterProgramme = students.filter(
      (students) => students.programme === programme
    );
    filterProgramme.forEach((student) => {
      console.log("student");

      let profileCard = document.createElement("div");
      profileCard.style.border = "2px solid black";
      profileCard.style.margin = "0 0 5px 0";
      let studentName = document.createElement("p");
      studentName.textContent = `Namn: ${student.firstName} ${student.lastName}`;
      profileCard.appendChild(studentName);
      let studentProgramme = document.createElement("p");
      studentProgramme.textContent = `Program eleven vill gå: ${student.programme}`;
      profileCard.appendChild(studentProgramme);
      list.appendChild(profileCard);
    });
  });
}
theData();
