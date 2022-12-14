const username = document.getElementById("username");
const password = document.getElementById("password");
const accountType = document.getElementById("account-type");
const form = document.getElementById("form");

const sendStudentData = async () => {
  const data = {
    user: username.value,
    pass: password.value,
  };
  const dataWeAreSending = await fetch(
    "https://musicly-scheduler.herokuapp.com/signin/student-sign-in",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const json = await dataWeAreSending.json();
  if (json.message == "Please enter username and password.") {
    alert("Please enter a Username and Password");
  } else if (json.message == "That username is incorrect.") {
    alert("Please enter a registered username.");
  } else if (json.message == "That password is incorrect.") {
    alert("Incorrect password.");
  } else {
    window.location.href =
      "https://musicly-scheduler.herokuapp.com/student/home";
  }
};

const sendInstructorData = async () => {
  const data = {
    user: username.value,
    pass: password.value,
  };
  const dataWeAreSending = await fetch(
    "https://musicly-scheduler.herokuapp.com/signin/instructor-sign-in",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const json = await dataWeAreSending.json();
  if (json.message == "Please enter username and password.") {
    alert("Please enter a Username and Password");
  } else if (json.message == "That username is incorrect.") {
    alert("Please enter a registered username.");
  } else if (json.message == "That password is incorrect.") {
    alert("Incorrect password.");
  } else {
    window.location.href =
      "https://musicly-scheduler.herokuapp.com/instructor/home";
  }
};

form.addEventListener("submit", (e) => {
  console.log("click");
  if (accountType.value == "Student") {
    e.preventDefault();
    sendStudentData();
  } else if (accountType.value == "Instructor") {
    e.preventDefault();
    sendInstructorData();
  }
});

// Collapsable NavBar Fucntions
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("menu-button").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("menu-button").style.marginLeft = "0";
}
