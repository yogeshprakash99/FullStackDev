var classRoster = []

function addName()
{
    var giveName = prompt("Please enter a Name");
    classRoster.push(giveName);
}
function removeName()
{
    var delName = prompt("Enter name to delete");
    var index = classRoster.indexOf(delName);
    classRoster.splice(index,1);
}
function displayNames()
{
    console.log(classRoster)
}

var start = prompt("Would you like to start the roster web app? y/n");
var request = "empty";

if (start === "y") {
  while (request !== "quit") {
    request = prompt("Please select an action: add, remove, display, or quit.")
    if (request === "add") {
      addName();
    }else if (request === "display") {
      displayNames();
    }else if (request == "remove") {
      removeName();
    }
  }
}
alert("Thanks for using the Web App! Please refresh the page to start over.")