const UWCData = {
"University of Western Cape (UWC)": [
{
degree: "BSc Sport and Exercise Science",
requirements: {
"UWC points": 33,
"English Home Language": 4,
"Another Language": 3,
"Maths": 4,
"Life Sciences": 4
}
},
{
degree: "BSc Occupational Therapy",
requirements: {
"UWC points": 33,
"English Home Language": 4,
"Another Language": 3,
"Maths": 3,
"Life Sciences": 4
}
},
{
degree: "BSc Physiotherapy",
requirements: {
"UWC points": 39,
"Another Language": 3,
"Maths": 4,
"Life Sciences": 4,
"Physical Sciences": 4
}
},
{
degree: "B Nursing",
requirements: {
"UWC points": 30,
"Another Language": 3,
"Maths": 4,
"Life Sciences": 4
}
},
{
degree: "BAdmin",
requirements: {
"Maths": 3,
"English Home Language": 4,
"Another Language": 3
}
},
{
degree: "BCom",
requirements: {
"Maths": 4,
"English Home Language": 4,
"Another Language": 3
}
},
{
degree: "BCom (Financial Accounting)",
requirements: {
"Maths": 4,
"English Home Language": 4,
"Another Language": 3
}
},
{
degree: "BCom IS (Information Systems)",
requirements: {
"Maths": 4,
"English Home Language": 4,
"Another Language": 3
}
},
{
degree: "BCom Accounting",
requirements: {
"Maths": 4,
"English Home Language": 4,
"Another Language": 3,
"Accounting": 5
}
},
{
degree: "BCom (4 Year Stream)",
requirements: {
"English Home Language": 3,
"Another Language": 3,
"Maths": 2,
"UWC points": 32
}
},
{
degree: "BCom Accounting (4 Year Stream)",
requirements: {
"English Home Language": 3,
"Another Language": 3,
"Maths": 3,
"Accounting": 4,
"UWC points": 32
}
},
{
degree: "BSc Environmental and Water Science",
requirements: {
"UWC points": 33,
"Maths": 4,
"Physical Sciences or Life Sciences": 4
}
},
{
degree: "BSc Biotechnology",
requirements: {
"UWC points": 33,
"Maths": 4,
"Physical Sciences or Life Sciences": 4
}
},
{
degree: "BSc Biodiversity and Conservation Biology",
requirements: {
"UWC points": 33,
"Maths": 4,
"Physical Sciences or Life Sciences": 4
}
},
{
degree: "BSc Medical Bioscience",
requirements: {
"UWC points": 33,
"Maths": 4,
"Life Sciences": 4
}
},
{
degree: "BSc Chemical Sciences",
requirements: {
"UWC points": 33,
"Maths": 4,
"Physical Sciences": 4
}
},
{
degree: "BSc Applied Geology",
requirements: {
"UWC points": 33,
"Maths": 4,
"Physical Sciences": 4
}
},
{
degree: "BSc Physical Science",
requirements: {
"UWC points": 33,
"Maths": 5,
"Physical Sciences": 4
}
},
{
degree: "BSc Mathematical & Statistical Science",
requirements: {
"UWC points": 33,
"Maths": 5,
"Physical Sciences or Life Sciences or Information Technology": 4
}
},
{
degree: "BSc Computer Science",
requirements: {
"UWC points": 33,
"Maths": 5,
"Physical Sciences or Life Sciences or Information Technology": 4
}
},
{
degree: "Bachelor of Pharmacy",
requirements: {
"UWC points": 38,
"Maths": 4,
"Physical Sciences": 4,
"Life Sciences": 4
}
},
{
degree: "Bachelor of Dental Surgery (BDS)",
requirements: {
"UWC points": 40,
"Maths": 4,
"Physical Sciences": 4,
"Life Sciences": 4
}
},
{
degree: "Bachelor of Oral Health (BOH)",
requirements: {
"UWC points": 27,
"Maths": 3,
"Life Sciences": 4
}
},
{
degree: "Bachelor of Laws (LLB) (4yr Prog)",
requirements: {
"UWC points": 37,
"Maths": 3,
"English Home Language": 4,
"Another Language": 3
}
},
{
degree: "B Com Law",
requirements: {
"UWC points": 30,
"English Home Language": 4,
"Another Language": 3,
"Maths": 4
}
},
{
degree: "Bachelor of Arts in Law - BA (Law) (3yr Prog)",
requirements: {
"UWC points": 37,
"Maths": 3,
"English Home Language": 4,
"Another Language": 3
}
}
]
};

let subjectCounter = 0;

function addSubject() {
  if (subjectCounter >= 7) {
      alert("You can only select up to 7 subjects.");
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
  
  // Define categories
  const categories = {
      "Language 1": ["English Home Language", "Afrikaans Huistaal", "Sesotho Home Language", "Siswati Home Language", "Setswana Home Language", "isiZulu Home Language", "isiXhosa Home Language", "isiNdebele Home Language", "Sepedi Home Language", "Xitsonga Home Language", "Tshivenda Home Language"],
      "Language 2": ["English First Additional Language", "Afrikaans Eerste Additionele Taal"],
      "Maths": ["Mathematics", "Mathematical Literacy", "Technical Mathematics"],
      "LO": ["Life Orientation"],
      "Subject 5": ["Computer Applications Technology","Economics", "Physical Sciences", "Life Sciences", "Agricultural Sciences", "Business Studies", "Accounting", "Information Technology","History", "Geography", "Religious Studies", "History", "Tourism"],
      "Subject 6": ["Computer Applications Technology","Economics", "Physical Sciences", "Life Sciences", "Agricultural Sciences", "Business Studies", "Accounting", "Information Technology","History", "Geography", "Religious Studies", "History", "Tourism"],
      "Subject 7": ["Computer Applications Technology","Economics", "Physical Sciences", "Life Sciences", "Agricultural Sciences", "Business Studies", "Accounting", "Information Technology","History", "Geography", "Religious Studies", "History", "Tourism"],
  };
  
  // Populate select options based on categories
  for (const category in categories) {
      const optgroup = document.createElement("optgroup");
      optgroup.label = category;
      categories[category].forEach(subject => {
          const option = document.createElement("option");
          option.value = subject;
          option.textContent = subject;
          optgroup.appendChild(option);
      });
      select.appendChild(optgroup);
  }

  subjectDiv.appendChild(select);

  const input = document.createElement("input");
  input.type = "number";
  input.classList.add("percentage-input");
  input.id = "percentage" + subjectCounter;
  input.min = "0";
  input.max = "100";
  input.placeholder = "%";
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
  const subjectContainer = button.closest('.subject-wrapper');
  subjectContainer.remove();
  subjectCounter--;
}

function displayEligibleDegreesUWC() {
    // Get the selected subjects and percentages from the form
    const selectedSubjects = [];
    const subjectElements = document.querySelectorAll('.subject');
    subjectElements.forEach(select => {
        if (select.value !== "") {
            selectedSubjects.push(select.value);
        }
    });

    const percentageInputs = document.querySelectorAll('.percentage-input');
    const percentages = Array.from(percentageInputs).map(input => parseInt(input.value));

    // Get the UWC points from the form
    const uwcPointsInput = document.getElementById('uwc-points');
    const uwcPoints = parseInt(uwcPointsInput.value);

    // Initialize an array to store eligible degrees
    let eligibleDegrees = [];

    // Iterate through each degree in the UWCData
    UWCData["University of Western Cape (UWC)"].forEach(degree => {
        // Flag to track if all subject requirements are met
        let allSubjectsMet = true;

        // Check if each subject requirement is met
        Object.keys(degree.requirements).forEach(subject => {
            if (subject === "UWC points") {
                if (uwcPoints < degree.requirements[subject]) {
                    allSubjectsMet = false;
                }
            } else {
                // Check individual subject requirements if needed
                let subjectIndex = selectedSubjects.indexOf(subject);
                if (subjectIndex !== -1) {
                    let subjectPercentage = percentages[subjectIndex];
                    if (subjectPercentage < degree.requirements[subject]) {
                        allSubjectsMet = false;
                    }
                } else {
                    allSubjectsMet = false;
                }
            }
        });

        // If all subject requirements are met, add the degree to eligibleDegrees
        if (allSubjectsMet) {
            eligibleDegrees.push(degree);
        }
    });

    // Display the eligible degrees on the screen
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<h2>Eligible Degrees at University of Western Cape (UWC):</h2>";
    if (eligibleDegrees.length > 0) {
        let list = document.createElement('ul');
        eligibleDegrees.forEach(degree => {
            let listItem = document.createElement('li');
            let link = document.createElement('a');
            link.textContent = degree.degree;
            listItem.appendChild(link);
            list.appendChild(listItem);
        });
        resultsDiv.appendChild(list);
    } else {
        resultsDiv.innerHTML += "<p>No degrees found matching your criteria.</p>";
    }
}



function calculateUWCPoints(percentages) {
    const uwcLevels = {
        "90-100%": 8,
        "80-89%": 7,
        "70-79%": 6,
        "60-69%": 5,
        "50-59%": 4,
        "40-49%": 3,
        "30-39%": 2,
        "20-29%": 1,
        "<20%": 0
    };

    let totalUWCPoints = 0;

    for (const percentage in percentages) {
        const level = calculateLevel(percentages[percentage]);
        const uwcLevel = uwcLevels[percentage];
        totalUWCPoints += uwcLevel;
    }

    return totalUWCPoints;
}

function calculateLevel(percentage) {
    if (percentage >= 90) return 8;
    else if (percentage >= 80) return 7;
    else if (percentage >= 70) return 6;
    else if (percentage >= 60) return 5;
    else if (percentage >= 50) return 4;
    else if (percentage >= 40) return 3;
    else if (percentage >= 30) return 2;
    else if (percentage >= 20) return 1;
    else return 0;
}

