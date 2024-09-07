// Function to add a new Work Experience field
function addNewWEField() {
    // Create a new textarea element
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");
    // Get references to the existing elements
    var weOb = document.getElementById("we");
    var weAddButtonOb = document.getElementById("weAddButton");
    // Insert the new node before the add button if elements are found
    if (weOb && weAddButtonOb) {
        weOb.insertBefore(newNode, weAddButtonOb);
    }
    else {
        console.error("Element not found for Work Experience");
    }
}
// Function to add a new Academic Qualification field
function addNewAQField() {
    console.log("Add Academic Qualification button clicked"); // Debugging message
    // Create a new textarea element
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "aqField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");
    // Get references to the existing elements
    var aqOb = document.getElementById("aq");
    var aqAddButtonOb = document.getElementById("aqAddButton");
    // Insert the new node before the add button if elements are found
    if (aqOb && aqAddButtonOb) {
        aqOb.insertBefore(newNode, aqAddButtonOb);
    }
    else {
        console.error("Element not found for Academic Qualification");
    }
}
// Function to add a new Skills field
function addNewSkillsField() {
    console.log("Add Skills button clicked"); // Debugging message
    // Create a new textarea element
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "skillField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");
    // Get references to the existing elements
    var skillsOb = document.getElementById("skills");
    var skillsAddButtonOb = document.getElementById("skillsAddButton");
    // Insert the new node before the add button if elements are found
    if (skillsOb && skillsAddButtonOb) {
        skillsOb.insertBefore(newNode, skillsAddButtonOb);
    }
    else {
        console.error("Element not found for Skills");
    }
}
