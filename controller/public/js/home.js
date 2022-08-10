// https://salty-mountain-91433.herokuapp.com/

const signInButton = document.getElementById("signInButton");

signInButton.addEventListener("click", () => {
  window.location.href = "/signin";
});

// function myFunction() {
//   const x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }
// Collapsable NavBar Fucntions
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("menu-button").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("menu-button").style.marginLeft = "0";
}
