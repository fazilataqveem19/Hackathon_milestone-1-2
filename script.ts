// Function to add a new Work Experience field
function addNewWEField(): void {
    // Create a new textarea element
    const newNode: HTMLTextAreaElement = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");

    // Get references to the existing elements
    const weOb: HTMLElement | null = document.getElementById("we");
    const weAddButtonOb: HTMLElement | null = document.getElementById("weAddButton");

    // Insert the new node before the add button if elements are found
    if (weOb && weAddButtonOb) {
        weOb.insertBefore(newNode, weAddButtonOb);
    } else {
        console.error("Element not found for Work Experience");
    }
}

// Function to add a new Academic Qualification field
function addNewAQField(): void {
    console.log("Add Academic Qualification button clicked"); // Debugging message

    // Create a new textarea element
    const newNode: HTMLTextAreaElement = document.createElement("textarea");
    newNode.classList.add("form-control", "aqField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");

    // Get references to the existing elements
    const aqOb: HTMLElement | null = document.getElementById("aq");
    const aqAddButtonOb: HTMLElement | null = document.getElementById("aqAddButton");

    // Insert the new node before the add button if elements are found
    if (aqOb && aqAddButtonOb) {
        aqOb.insertBefore(newNode, aqAddButtonOb);
    } else {
        console.error("Element not found for Academic Qualification");
    }
}

// Function to add a new Skills field
function addNewSkillsField(): void {
    // Create a new textarea element
    const newNode: HTMLTextAreaElement = document.createElement("textarea");
    newNode.classList.add("form-control", "skillField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");

    // Get references to the existing elements
    const skillsOb: HTMLElement | null = document.getElementById("skills");
    const skillsAddButtonOb: HTMLElement | null = document.getElementById("skillsAddButton");

    // Insert the new node before the add button if elements are found
    if (skillsOb && skillsAddButtonOb) {
        skillsOb.insertBefore(newNode, skillsAddButtonOb);
    } else {
        console.error("Element not found for Skills");
    }
}
