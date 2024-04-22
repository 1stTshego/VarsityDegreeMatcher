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
}

// Function to delete a subject
function deleteSubject(button) {
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

