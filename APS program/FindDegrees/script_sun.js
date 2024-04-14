const SunData = {

"Stellenbosch University (SUN)": [
{
degree: "BCom (Management Sciences)",
requirements: {
"NSC average": 75 ,
"Mathematics": 70 
}
},
{
degree: "BCom (Economic Sciences)",
requirements: {
"NSC average": 75 ,
"Mathematics": 70 
}
},
{
degree: "BCom (Industrial Psychology)",
requirements: {
"NSC average": 75 ,
"Mathematics": 70 
}
},
{
degree: "BCom (Financial Accounting)",
requirements: {
"NSC average": 75 ,
"Mathematics": 70 
}
},
{
degree: "BCom (Management Accounting)",
requirements: {
"NSC average": 75 ,
"Mathematics": 70 
}
},
{
degree: "BCom (Actuarial Science)",
requirements: {
"NSC average": 85 ,
"Mathematics": 80 
}
},
{
degree: "BCom (International Business)",
requirements: {
"NSC average": 85 ,
"Mathematics": 75 
}
},
{
degree: "BCom (Mathematical Sciences)",
requirements: {
"NSC average": 75 ,
"Mathematics": 80 
}
},
{
degree: "BDatSci",
requirements: {
"NSC average": null,
"Mathematics": null
}
},
{
degree: "Bsc ENG Degrees (a)",
requirements: {
"NSC average": 70 ,
"Mathematics": 70 ,
"Physical Sciences": 60 
}
}
] } ; 

// Function to add a subject
function addSubject() {
    if (subjectCounter >= 6) {
        alert("You can only select up to 6 subjects.");
        return;
    }
    subjectCounter++;
    
    const subjectContainer = document.createElement("div");
    subjectContainer.classList.add("subject-wrapper");

    const subjectDiv = document.createElement("div");
    subjectDiv.classList.add("subject-container");

    const select = document.createElement("select");
    select.classList.add("subject");
    select.id = "subjects" + subjectCounter;
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Select a subject";
    select.appendChild(option);
    const subjects = ["Economics", "Physical Sciences", "Life Sciences", "Agricultural Sciences", "Business Studies", "Accounting", "History", "Geography", "Religious Studies", "English Home Language", "English First Additional Language", "Afrikaans Huistaal", "Afrikaans Eerste Additionele Taal", "Sesotho Home Language", "Siswati Home Language", "Setswana Home Language", "isiZulu Home Language", "isiXhosa Home Language", "isiNdebele Home Language", "Sepedi Home Language", "Xitsonga Home Language", "Tshivenda Home Language", "Mathematics", "Mathematical Literacy", "Life Orientation"];

    subjects.forEach(function(subject) {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        select.appendChild(option);
    });

select.value = "Mathematics "; 
    subjectDiv.appendChild(select);

    const input = document.createElement("input");
    input.type = "number";
    input.classList.add("percentage-input");
    input.id = "percentage" + subjectCounter;
    input.min = "0";
    input.max = "100";
    input.placeholder = " ";
    input.style.width = "50px";

     input.value = "75";

    subjectDiv.appendChild(input);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() { deleteSubject(this); };
    subjectDiv.appendChild(deleteButton);

    subjectContainer.appendChild(subjectDiv);
    document.getElementById("subject-container").appendChild(subjectContainer);
}

// Function to delete a subject
function deleteSubject(button) {
    const subjectContainer = button.parentNode.parentNode;
    subjectContainer.remove();
    subjectCounter--;
}



subjectCounter = 0;

// Function to display eligible degrees based on user inputs
//let subjectCounter = 1;

// Function to add a subject
function addSubject() {
    if (subjectCounter >= 6) {
        alert("You can only select up to 6 subjects.");
        return;
    }
    subjectCounter++;
    
    const subjectContainer = document.createElement("div");
    subjectContainer.classList.add("subject-wrapper");

    const subjectDiv = document.createElement("div");
    subjectDiv.classList.add("subject-container");

    const select = document.createElement("select");
    select.classList.add("subject");
    select.id = "subjects" + subjectCounter;
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Select a subject";
    select.appendChild(option);
    const subjects = ["Economics", "Physical Sciences", "Life Sciences", "Agricultural Sciences", "Business Studies", "Accounting", "History", "Geography", "Religious Studies", "English Home Language", "English First Additional Language", "Afrikaans Huistaal", "Afrikaans Eerste Additionele Taal", "Sesotho Home Language", "Siswati Home Language", "Setswana Home Language", "isiZulu Home Language", "isiXhosa Home Language", "isiNdebele Home Language", "Sepedi Home Language", "Xitsonga Home Language", "Tshivenda Home Language", "Mathematics", "Mathematical Literacy", "Life Orientation"];

    subjects.forEach(function(subject) {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        select.appendChild(option);
    });

select.value = "Mathematics "; 
    subjectDiv.appendChild(select);

    const input = document.createElement("input");
    input.type = "number";
    input.classList.add("percentage-input");
    input.id = "percentage" + subjectCounter;
    input.min = "0";
    input.max = "100";
    input.placeholder = " ";
    input.style.width = "50px";

     input.value = "75";

    subjectDiv.appendChild(input);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() { deleteSubject(this); };
    subjectDiv.appendChild(deleteButton);

    subjectContainer.appendChild(subjectDiv);
    document.getElementById("subject-container").appendChild(subjectContainer);
}

// Function to delete a subject
function deleteSubject(button) {
    const subjectContainer = button.parentNode.parentNode;
    subjectContainer.remove();
    subjectCounter--;
}

subjectCounter = 0;

// Function to display eligible degrees based on user inputs
function displayEligibleDegrees() {
    // Get the selected subjects from the form
    const selectedSubjects = [];
    const subjectContainers = document.querySelectorAll('.subject-container');

    // Loop through the subject containers to get selected subjects
    subjectContainers.forEach(subjectContainer => {
        const subjectInput = subjectContainer.querySelector('.subject');
        if (subjectInput.value !== "") {
            selectedSubjects.push(subjectInput.value);
        }
    });

    // Get the percentages and APS from the form
    const percentageInputs = document.querySelectorAll('.percentage-input');
    const percentages = Array.from(percentageInputs).map(input => parseInt(input.value));

    const apsInput = document.getElementById('aps');
    const aps = parseInt(apsInput.value);

    // Initialize an array to store eligible degrees
    let eligibleDegrees = [];

    // Iterate through each degree in the UPData
    SunData["Stellenbosch University (SUN)"].forEach(degree => {
        // Flag to track if all subject requirements are met
        let allSubjectsMet = true;

        // Check if each subject requirement is met
        Object.keys(degree.requirements).forEach(subject => {
            if (subject === "APS") {
                if (aps < degree.requirements[subject]) {
                    allSubjectsMet = false;
                }
            } else {
                let subjectIndex = selectedSubjects.indexOf(subject);
                if (subjectIndex !== -1) {
                    let subjectLevel = calculateLevel(percentages[subjectIndex]);
                    if (subjectLevel < degree.requirements[subject]) {
                        allSubjectsMet = false;
                    }
                } else {
                    allSubjectsMet = false;
                }
            }
        });

        // If all subject requirements are met, add the degree to eligibleDegrees
        if (allSubjectsMet) {
            eligibleDegrees.push(degree.degree);
        }
    });

    // Display the eligible degrees on the screen
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<h2>Eligible Degrees:</h2>";
    if (eligibleDegrees.length > 0) {
        let list = document.createElement('ul');
        eligibleDegrees.forEach(degree => {
            let listItem = document.createElement('li');
            listItem.textContent = degree;
            list.appendChild(listItem);
        });
        resultsDiv.appendChild(list);
    } else {
        resultsDiv.innerHTML += "<p>No degrees found matching your criteria.</p>";
    }
}

// Function to calculate the level based on the percentage
function calculateLevel(percentage) {
    if (percentage >= 80) return 7;
    else if (percentage >= 70) return 6;
    else if (percentage >= 60) return 5;
    else if (percentage >= 50) return 4;
    else if (percentage >= 40) return 3;
    else if (percentage >= 30) return 2;
    else return 1;
}
