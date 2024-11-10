// Initial count value
let count = 1;

const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
let prev = document.querySelectorAll(".prev");
let next = document.querySelectorAll(".btnNext");

// Set up the "prev" button to go to the previous section when clicked
prev.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        if (count > 1) {  // Ensure count doesn't go below 1
            count--;  // Decrement the counter
            progress.style.width = `${count * 14.2857143}%`;  // Update progress bar
            display();  // Update the section display
        } else {
            alert("You are already at the first section.");
        }
    });
});

// Set up the "Next" button to go to the next section when clicked
next.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();  // no loading for the page 
        if (count < 7) {
            count++;       // adding in the counter
            progress.style.width = `${count * 14.2857143}%`;  // incrementing the progress
            display();     // update the section and showing the next one
        } else {
            alert("You've reached the limit");  // alert if counter more than 7
        }
    });
});



//nitialize Quill editor for des styling
const quil = new Quill('.edit', {
    theme:'snow'
});
const quill = new Quill('.editor', {
  theme: 'snow'
});

// addEmailButton.onclick = addEmailField;

// uplading photo in form 
// var loadFile = function(event) {
            
//     var input = event.target;
//     var file = input.files[0];
//     var type = file.type;

//    var output = document.getElementById('preview_img');


//     output.src = URL.createObjectURL(event.target.files[0]);
//     output.onload = function() {
//         URL.revokeObjectURL(output.src) // free memory
//     }
// };

function loadFile(event) {
    var reader = new FileReader();
    reader.onload = function() {
      var imgElement = document.getElementById('preview_img');
      imgElement.src = reader.result;  // Update the image source to the uploaded image
  
      // Ensure the image maintains the same size as the container
      imgElement.style.objectFit = 'cover';  // Ensures the image fills the container without distorting
      imgElement.style.width = '100px';
      imgElement.style.height = '100px';
      imgElement.style.overflow = 'hidden';
    }
    reader.readAsDataURL(event.target.files[0]);  // Read the uploaded file as a data URL
  }
// end of photo upload


// Get all sections by their IDs or classes
let allSections = document.querySelectorAll(".sectionInfos");
let personalInfosSection = document.getElementById("personalInfosSection");
let experiencesSection = document.getElementById("experiencesSection");
let educationSection = document.getElementById("educationSection");
let certificatsSection = document.getElementById("certificatsSection");
let skillsSection = document.getElementById("skillsSection");
let languagesSection = document.getElementById("languagesSection");
let downloadSection = document.getElementById("downloadSection");

// Function to display the correct section based on count
function display() {
    
    // Hide all sections first
    allSections.forEach((section) => {
        section.style.display = "none";
    });
  
    // Display the section corresponding to the current count
    switch (count) {
        case 1:
            personalInfosSection.style.display = 'block';
            break;
        case 2:
            experiencesSection.style.display = 'block';
            break;
        case 3:
            educationSection.style.display = 'block';
            break;
        case 4:
            certificatsSection.style.display = 'block';
            break;
        case 5:
            skillsSection.style.display = 'block';
            break;
        case 6:
            languagesSection.style.display = 'block';
            break;
        case 7:
            downloadSection.style.display = 'block';
            break;
        default:
            alert("You have completed the form");
            // Prevents going past the last section
            break;
    }
}

// Initial display to show the first section
display();



//----------------------------personal infos------------------------------------------
let profilePercture = document.getElementById("profilePic"); // for file input
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let adress = document.getElementById("street-address");
let phoneNumber = document.getElementById("phone-input");
let summary = quill  // or quill.getText() for plain text
//----------------------------personal infos end------------------------------------------



//----------------------------experience infos------------------------------------------
let jobName = document.getElementById("experienceName");
let companyName = document.getElementById("companyName");
let startDateEx = document.getElementById("Start-date-exp");
let endDateEx = document.getElementById("End-date-exp");
// let exDescription = document.getElementById("editor").value;//need to fix
//----------------------------experience infos end------------------------------------------



//----------------------------education infos------------------------------------------
let schoolName = document.getElementById("shcoolname");
let majorName = document.getElementById("majorname");
let degree = document.getElementById("degree");
let startDateEdu = document.getElementById("start-date-edu");
let endDateEdu = document.getElementById("end-date-edu");
//----------------------------education infos end------------------------------------------


//----------------------------certificats infos------------------------------------------
let certificatName = document.getElementById("certificat-name");
let StartDateCer = document.getElementById("Start-date-cer");
let endDateCe = document.getElementById("end-date-cer");
let addCertificatCountainer = document.getElementById("addCertificatCountainer");
let dateCertificatCountainer = document.getElementById("dateCertificatContainer");//showing date
let deletecertificat = document.getElementById("deleteCertificat");//delete certificat
//----------------------------certificats infos end------------------------------------------


//----------------------------skills infos  ------------------------------------------
let skillName = document.getElementById("skill-name");
let deleteSkill = document.getElementById("delete-skill");//to delete a skillS
let addNewSkill = document.getElementById("add-skill");//add a skill
let addSkillsContainer = document.getElementById("addskillsCountainer");

//----------------------------skills infos end------------------------------------------


//----------------------------language infos  ------------------------------------------
let language = document.getElementById("language-name");
let level = document.getElementById("level");
let deleteLanguage = document.getElementById("deleteLanguag");
let addLanguageContainer = document.getElementById("addLanguageContainer");

//----------------------------language infos end------------------------------------------



//------------------------------section buttons-------------------------------------------
let submitSection1 = document.getElementById('submitSection1');
let prevSection1 = document.getElementById('prevSection1');

let submitSection2 = document.getElementById('submitSection2');
let prevSection2 = document.getElementById('prevSection2');

let submitSection3 = document.getElementById('submitSection3');
let prevSection3 = document.getElementById('prevSection3');

let submitSection4 = document.getElementById('submitSection4');
let prevSection4 = document.getElementById('prevSection4');

let submitSection5 = document.getElementById('submitSection5');
let prevSection5 = document.getElementById('prevSection5');

let submitSection6 = document.getElementById('submitSection6');
let prevSection6 = document.getElementById('prevSection6');

let download = document.getElementById('downloadBtn');
//------------------------------section buttons end-------------------------------------------




//stocking data
let resumeData;
if(localStorage.resume != null){
    resumeData = JSON.parse(localStorage.resume)
}else{
    resumeData = [];
}
let personalData = [];
let experienceData = [];
let educationData = [];
let certificatData = [];
let skillsData = [];
let languagesData = [];

submitSection1.addEventListener('click', function(){

    let personalSection = {
        image : profilePercture.files[0],
        fullName : fullName.value,
        email : email.value,
        adress : adress.value,
        phoneNumber : phoneNumber.value,
        summary : summary.getText(),
    }
    personalData.push(personalSection);
    resumeData.push(personalData)
    // localStorage.setItem('resume', JSON.stringify(resumeData))
});
submitSection2.addEventListener('click', function(){
    let experienceSection = {
        jobName : jobName.value,
        companyName : companyName.value,
        startExperience : startDateEx.value,
        endExperience : endDateEx.value,
        // experienceDescription : exDescription.value,
        // addExperience : addExperience.value
    }
    experienceData.push(experienceSection)
    resumeData.push(experienceData)
    // localStorage.setItem('resume', JSON.stringify(resumeData))
});

submitSection3.addEventListener('click', function(){
    let educationSection = {
        schoolName : schoolName.value,
        majorName : majorName.value,
        startEducation : startDateEdu.value,
        endEducation : endDateEdu.value,
        degree : degree.value
    }
    educationData.push(educationSection);
    resumeData.push(educationData)
    // localStorage.setItem('resume', JSON.stringify(resumeData))
})


submitSection4.addEventListener('click', function(){
    let certificatsSection = {
        certificatName : certificatName.value,
        StartDateCer : StartDateCer.value,
        endDateCe : endDateCe.value,
        CertificatCountainer : addCertificatCountainer.value,
        dateCertificatCountainer : dateCertificatCountainer.value
    }
    certificatData.push(certificatsSection);
    resumeData.push(certificatData);
    // localStorage.setItem('resume', JSON.stringify(resumeData))
})


submitSection5.addEventListener('click', function(){
    let skillsSection = {
        skillName : skillName.value,
        deleteSkill : deleteSkill.value,
        addSkill : addNewSkill.value,
        addSkillsToCountainer : addSkillsContainer.value
    }
    skillsData.push(skillsSection);
    resumeData.push(skillsData);
    // localStorage.setItem('resume', JSON.stringify(resumeData))
});


submitSection6.addEventListener('click', function(){
    let languagesSection = {
        language : language.value,
        level : level.value,
        deleteLanguage : deleteLanguage.value,
        addLanguageContainer : addLanguageContainer.value
    }
    languagesData.push(languagesSection);
    resumeData.push(languagesData);
    // localStorage.setItem('resume', JSON.stringify(resumeData))
});


// download.addEventListener('click', function(){

//     let resume = JSON.parse(localStorage.getItem('resume'));
// })