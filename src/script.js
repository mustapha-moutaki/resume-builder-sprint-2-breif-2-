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
    if (count > 1) {
      // Ensure count doesn't go below 1
      count--; // Decrement the counter
      progress.style.width = `${count * 14.2857143}%`; // Update progress bar
      display(); // Update the section display
    } else {
      alert("You are already at the first section.");
    }
  });
});

// Set up the "Next" button to go to the next section when clicked
next.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault(); // no loading for the page
    if (count < 7) {
      count++; // adding in the counter
      progress.style.width = `${count * 14.2857143}%`; // incrementing the progress
      display(); // update the section and showing the next one
    } else {
      alert("You've reached the limit"); // alert if counter more than 7
    }
  });
});

// Initialize Quill editor for des styling
const quil = new Quill(".edit", {
  theme: "snow",
});
const quill = new Quill(".editor", {
  theme: "snow",
});

// Uploading photo in form
function loadFile(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var imgElement = document.getElementById("preview_img");
    var iamgepro = (imgElement.src = reader.result); // Update the image source to the uploaded image

    // Ensure the image maintains the same size as the container
    imgElement.style.objectFit = "cover"; // Ensures the image fills the container without distorting
    imgElement.style.width = "100px";
    imgElement.style.height = "100px";
    imgElement.style.overflow = "hidden";
  };
  reader.readAsDataURL(event.target.files[0]); // Read the uploaded file as a data URL
}

//----------------------------personal infos------------------------------------------
let profilePercture = document.getElementById("profilePic"); // for file input
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let adress = document.getElementById("street-address");
let phoneNumber = document.getElementById("phone-input");
let summary = quill; // or quill.getText() for plain text
//----------------------------personal infos end------------------------------------------

//----------------------------experience infos------------------------------------------
let jobName = document.getElementById("experienceName");
let companyName = document.getElementById("companyName");
let startDateEx = document.getElementById("Start-date-exp");
let endDateEx = document.getElementById("End-date-exp");
let exDescription = quill; //need to fix
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
let addCertificatCountainer = document.getElementById(
  "addCertificatCountainer"
);
let dateCertificatCountainer = document.getElementById(
  "dateCertificatContainer"
); //showing date
let deletecertificat = document.getElementById("deleteCertificat"); //delete certificat
//----------------------------certificats infos end------------------------------------------

//----------------------------skills infos  ------------------------------------------
let skillName = document.getElementById("skillName");
// let deleteSkill = document.getElementById("delete-skill");//to delete a skillS
// let addNewSkill = document.getElementById("add-skill");//add a skill
let addSkillsContainer = document.getElementById("addskillsCountainer");

//----------------------------skills infos end------------------------------------------

//----------------------------language infos  ------------------------------------------
let language = document.getElementById("language");
let level = document.getElementById("level");
// let deleteLanguage = document.getElementById("deleteLanguag");
// let addLanguageContainer = document.getElementById("addLanguageContainer");

//----------------------------language infos end------------------------------------------

let downloadBtn = document.getElementById("downloadBtnCountainer");
downloadBtn.style.display = "none"; //button downlaod

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
      personalInfosSection.style.display = "block";
      break;
    case 2:
      experiencesSection.style.display = "block";
      break;
    case 3:
      educationSection.style.display = "block";
      break;
    case 4:
      certificatsSection.style.display = "block";
      break;
    case 5:
      skillsSection.style.display = "block";
      break;
    case 6:
      languagesSection.style.display = "block";
      break;
    case 7:
      downloadSection.style.display = "block";
      break;
    default:
      alert("You have completed the form");
      break;
  }
}

// Initial display to show the first section
display();

// Stocking data
let resumeData;
if (localStorage.resume != null) {
  resumeData = JSON.parse(localStorage.resume);
} else {
  resumeData = [];
}

let submitit = submitSection6.addEventListener("click", function () {
  let personalSection = {
    image: profilePercture.files[0],
    fullName: fullName.value,
    email: email.value,
    adress: adress.value,
    phoneNumber: phoneNumber.value,
    summary: quill.root.innerHTML,

    jobName: jobName.value,
    companyName: companyName.value,
    startExperience: startDateEx.value,
    endExperience: endDateEx.value,
    experienceDescription: quill.root.innerHTML,

    schoolName: schoolName.value,
    majorName: majorName.value,
    startEducation: startDateEdu.value,
    endEducation: endDateEdu.value,
    degree: degree.value,

    certificatName: certificatName.value,
    StartDateCer: StartDateCer.value,
    endDateCe: endDateCe.value,

    skillName: skillName.value,

    language: language.value,
    level: level.value,
  };
  resumeData.push(personalSection);
  localStorage.setItem("resume", JSON.stringify(resumeData));
});


// Experience add
let formCounter = 1; // Keep track of the form number
function addForm1(event) {
  event.preventDefault();
  const jobName = document.getElementById("experienceName").value;
  const formContainer = document.createElement("div");
  formContainer.className = "form-container";
  formContainer.innerHTML = `
        <div class="flex border-solid border-2 border-sky-500 p-2 rounded-md mt-2 items-center justify-between">
            <div class="flex">
                <p class="mr-2">${jobName}</p>
            </div>
            <div onclick="removeForm1(this)">
                <i class="fa-solid fa-trash text-rose-500"></i>
            </div>
        </div>`;
  document.getElementById("displayElement").appendChild(formContainer);
}

function removeForm1(button) {
  button.parentElement.remove();
}

// Education add
function addForm2(event) {
  event.preventDefault();
  const schoolName = document.getElementById("shcoolname").value;
  const majorName = document.getElementById("majorname").value;
  const degree = document.getElementById("degree").value;

  const formContainer = document.createElement("div");
  formContainer.className = "form-container";
  formContainer.innerHTML = `
        <div class="flex border-solid border-2 border-sky-500 p-2 rounded-md mt-2 items-center justify-between">
            <div class="flex">
                <p class="mr-2">${schoolName}</p>
                <p class="mr-2">${majorName}</p>
                <p class="mr-2">${degree}</p>
            </div>
            <div onclick="removeForm2(this)">
                <i class="fa-solid fa-trash text-rose-500"></i>
            </div>
        </div>`;
  document.getElementById("displayElement2").appendChild(formContainer);
}

function removeForm2(button) {
  button.parentElement.remove();
}

// Certificate add
function addForm3(event) {
  event.preventDefault();

  const certificateName = document.getElementById("certificat-name").value;
  const certificateDate = document.getElementById("Start-date-cer").value;

  const formContainer = document.createElement("div");
  formContainer.className = "form-container";
  formContainer.innerHTML = `
        <div class="flex border-solid border-2 border-sky-500 p-2 rounded-md mt-2 items-center justify-between">
            <div class="flex">
                <p class="mr-2">${certificateName}</p>
                <p class="mr-2">${certificateDate}</p>
            </div>
            <div onclick="removeForm3(this)">
                <i class="fa-solid fa-trash text-rose-500"></i>
            </div>
        </div>`;
  document.getElementById("displayElement3").appendChild(formContainer);
}

function removeForm3(button) {
  button.parentElement.remove();
}

// Skills add
function addForm4(event) {
  event.preventDefault();

  // Ensure skillName exists and has the correct value
  const skillInput = document.getElementById("skillName"); // Assuming you have this input field in your HTML
  if (skillInput && skillInput.value) {
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    formContainer.innerHTML = `
        <div class="flex border-solid border-2 border-sky-500 p-2 rounded-md mt-2 items-center justify-between">
            <div class="flex">
                <p class="mr-2">${skillInput.value}</p>
            </div>
            <div onclick="removeForm4(this)">
                <i class="fa-solid fa-trash text-rose-500"></i>
            </div>
        </div>`;

    document.getElementById("displayElement4").appendChild(formContainer);
    skillInput.value = ""; // Clear the input after adding the skill
  } else {
    alert("Please enter a skill.");
  }
}

// Remove skill
function removeForm4(button) {
  button.parentElement.remove();
}

// Languages add

function addForm5(event) {
  event.preventDefault();

  // Ensure both language and level inputs exist and have correct values
  const languageInput = document.getElementById("language"); // Assuming you have this input field in your HTML
  const levelInput = document.getElementById("level"); // Assuming you have this input field in your HTML
  if (languageInput && levelInput && languageInput.value && levelInput.value) {
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    formContainer.innerHTML = `
        <div class="flex border-solid border-2 border-sky-500 p-2 rounded-md mt-2 items-center justify-between">
            <div class="flex">
                <p class="mr-2">${languageInput.value} - ${levelInput.value}</p>
            </div>
            <div onclick="removeForm5(this)">
                <i class="fa-solid fa-trash text-rose-500"></i>
            </div>
        </div>`;

    document.getElementById("displayElement5").appendChild(formContainer);
    languageInput.value = ""; // Clear the language input after adding
    levelInput.value = ""; // Clear the level input after adding

    resumeData.push(personalSection);
    localStorage.setItem("resume", JSON.stringify(resumeData));
  } else {
    alert("Please enter both language and level.");
  }
}

// Remove language
function removeForm5(button) {
  button.parentElement.remove();
}

////testing =================================================

function displayCv(event) {
  event.preventDefault();

  let creatcv = document.getElementById("createresumebtn");
  creatcv.style.display = "none";

  //    resumeData.personalSection;
  let profilePercture = document.getElementById("profilePic").value; // for file input
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let adress = document.getElementById("street-address").value;
  let phoneNumber = document.getElementById("phone-input").value;
  let summary = quill.getText(); // or quill.getText() for plain text
  //----------------------------personal infos end------------------------------------------

  //----------------------------experience infos------------------------------------------
  let jobName = document.getElementById("experienceName").value;
  let companyName = document.getElementById("companyName").value;
  let startDateEx = document.getElementById("Start-date-exp").value;
  let endDateEx = document.getElementById("End-date-exp").value;
  let exDescription = quill.getText(); //need to fix
  //----------------------------experience infos end------------------------------------------

  //----------------------------education infos------------------------------------------
  let schoolName = document.getElementById("shcoolname").value;
  let majorName = document.getElementById("majorname").value;
  let degree = document.getElementById("degree").value;
  let startDateEdu = document.getElementById("start-date-edu").value;
  let endDateEdu = document.getElementById("end-date-edu").value;
  //----------------------------education infos end------------------------------------------

  //----------------------------certificats infos------------------------------------------
  let certificatName = document.getElementById("certificat-name").value;
  let StartDateCer = document.getElementById("Start-date-cer").value;
  let endDateCe = document.getElementById("end-date-cer").value;
  // let addCertificatCountainer = document.getElementById("addCertificatCountainer").value;
  // let dateCertificatCountainer = document.getElementById("dateCertificatContainer").value;//showing date
  // let deletecertificat = document.getElementById("deleteCertificat").value;//delete certificat
  //----------------------------certificats infos end------------------------------------------

  //----------------------------skills infos  ------------------------------------------
  let skillName = document.getElementById("skillName").value;
  // let deleteSkill = document.getElementById("delete-skill");//to delete a skillS
  // let addNewSkill = document.getElementById("add-skill");//add a skill
  // let addSkillsContainer = document.getElementById("addskillsCountainer").value;

  //----------------------------skills infos end------------------------------------------

  //----------------------------language infos  ------------------------------------------
  let language = document.getElementById("language").value;
  let level = document.getElementById("level").value;
  // let deleteLanguage = document.getElementById("deleteLanguag");
  // let addLanguageContainer = document.getElementById("addLanguageContainer");

  //----------------------------language infos end------------------------------------------
  // Ensure both language and level inputs exist and have correct values
  // Assuming you have this input field in your HTML

  //    let radioSelect1 =   document.getElementById('radio1').value;
  //    let radioSelect2 =   document.getElementById('radio2').value;

  let radioselected = document.querySelector(
    'input[name="default-radio"]:checked'
  ).value;
  console.log(radioselected);
  downloadBtn.style.display = "block";
  downloadBtn.style.width = "200px";

  if (radioselected == "classic cv") {
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    formContainer.innerHTML = `
        
    <main class="font-jost hyphens-manual overflow-hidden">
      <!-- Page -------------------------------------------------------------------------------------------------------->
      <section
        class="p-3 my-auto mx-auto max-w-3xl bg-gray-100 rounded-2xl border-4 border-gray-700 sm:p-9 md:p-16 lg:mt-6 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter"
      >
        <!-- Name ---------------------------------------------------------------------------------------------------->
        <header
          class="inline-flex justify-between items-baseline mb-2 w-full align-top border-b-4 border-gray-300"
        >
          <section class="block">
            <h1 class="mb-0 text-5xl font-bold text-gray-700">
              ${fullName}
            </h1>
            <!--Job Title--------------------------------------------------------------------------------------------------------->
            <h2
              class="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish"
            >
            ${jobName}
            </h2>
            <!--Location --------------------------------------------------------------------------------------------------------->

            <h3
              class="m-0 mt-2 ml-2 text-xl font-semibold text-gray-500 leading-snugish"
            >
            ${adress}
            </h3>
          </section>
          <!--   Initials Block         -->
          <section
            class="justify-between px-3 mt-0 mb-5 text-4xl font-black leading-none text-black bg-gray-700 initials-container print:bg-black"
            style="padding-bottom: 1.5rem; padding-top: 1.5rem;"
          >
            <section class="text-center initial">T</section>
            <section class="text-center initial">L</section>
            <section class="text-center initial">H</section>
          </section>
        </header>

        <!-- Column -------------------------------------------------------------------------------------------------->
        <section
          class="col-gap-8 print:col-count-2 print:h-letter-col-full col-fill-balance md:col-count-2 md:h-letter-col-full"
        ><section class="flex-col">
          <!-- Contact Information ------------------------------------------------------------------------------------->
          <section class="pb-2 mt-4 mb-0 first:mt-0">
            <!-- To keep in the same column -------------------------------------------------------------------------->
            <section class="break-inside-avoid">
              <section class="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
                <ul class="pr-7 list-inside">
                  <li
                    class="mt-1 leading-normal text-black text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md print:"
                  >
                    <a href="https://veilmail.io/irish-geoff
            " class="group">
                      <span
                        class="mr-2 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Portfolio:
                      </span>
                      		    https://veilmail.io/irish-geoff
            
                      <span
                        class="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                  <li
                    class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                  >
                    <a href="https://github.com/Thomashighbaugh" class="group">
                      <span
                        class="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Github:
                      </span>
                      what is here
                      <span
                        class="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:"
                      >
                        ↗
                      </span>
                    </a>
                  </li>

                  <li
                    class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                  >
                    <a href="		    https://veilmail.io/irish-geoff" class="group">
                      <span
                        class="mr-8 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Email:
                      </span>
		    https://veilmail.io/irish-geoff
            
                      <span
                        class="inline-block font-normal text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                  <li
                    class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                  >
                    <a href="tel:+15109070654">
                      <span
                        class="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Phone:
                      </span>
                      ${phoneNumber}
                    </a>
                  </li>
                </ul>
              </section>
            </section>
          </section>
          <!--Summary ---------------------------------------------------------------------------------------------------------->
          <section class="pb-2 pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
            <!-- To keep in the same column -->
            <section class="break-inside-avoid">
              <h2
                class="mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal"
              >
                SUMMARY
              </h2>

              <section class="mb-2 break-inside-avoid">
                <p class="mt-2 leading-normal text-gray-700 text-md">
                ${summary}
                </p>
              </section>
            </section>
          </section>
<!--Education -------------------------------------------------------------------------------------------------------->
<section class="pb-0 mt-2 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
    <!-- To keep in the same column -->
    <section class="break-inside-avoid">
        <h2
            class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
        >
            EDUCATION
        </h2>
        <!-- school --------------------------------------------------------------------------->
        <section class="mt-2 border-b-2 break-inside-avoid">
            <header>
                <h3
                    class="text-lg font-semibold text-gray-700 leading-snugish"
                >
                ${schoolName}
                </h3>
                <p class="leading-normal text-gray-500 text-md">
                    ${startDateEdu} &ndash; ${endDateEdu} | ${degree} of ${majorName}
                </p>
            </header>
            <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
                <li>
                    <span
                        class="font-semibold text-md"
                    >
                        Major:
                    </span>
                    ${majorName}
                </li>
                <li>
                    <span
                        class="font-semibold text-md"
                    >
                        Minor:
                    </span>
                    Economics
                </li>
                <li>
                    <span
                        class="font-semibold text-md"
                    >
                        GPA:
                    </span>
                    3.9
                </li>
                <li>
                    <span
                        class="font-semibold text-md"
                    >
                        Skills:
                    </span>
                    ${skillName}, ${skillName}, Critical Thinking, Communication
                </li>
            </ul>
        </section>
        <!--school 2--------------------------------------------------------------------------------------------->
        <section class="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
            <header>
                <h3
                    class="flex-grow text-lg font-semibold text-gray-700 leading-snugish"
                >
                    Las Positas Community College
                </h3>
                <p class="leading-normal text-gray-500 text-md">
                    2018 &ndash; Present | Associate of Science/Continuing
                    Education
                </p>
            </header>
            <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
                <li>
                    <span
                        class="font-semibold text-md"
                    >
                        Major:
                    </span>
                    Computer Science
                </li>
                <li>
                    <span
                        class="font-semibold text-md"
                    >
                        GPA:
                    </span>
                    4.0
                </li>
                <li>
                    <span
                        class="font-semibold text-md"
                    >
                        Skills:
                    </span>
                    Programming, Algorithms, Data Structures, Software Development
                </li>
            </ul>
        </section>

        <!--school 3 --------------------------------------------------------------------------------->
        <section class="pb-4 mt-4 mb-4 break-inside-avoid">
            <header>
                <h3
                    class="flex-grow text-lg font-semibold text-gray-700 leading-snugish"
                >
                    Codify Academy
                </h3>
                <p class="leading-normal text-gray-500 text-md">
                    2018 | Certificate
                </p>
            </header>
            <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
                <li>
                    <span
                        class="font-semibold text-md"
                    >
                        Subject:
                    </span>
                    Front End Development
                </li>
                <li>
                    <span
                        class="font-semibold text-md"
                    >
                        Skills:
                    </span>
                    HTML, CSS, JavaScript, Web Development
                </li>
            </ul>
        </section>
    </section>
</section>

            <!--Begin Skills ----------------------------------------------------------------------------------------------------->
            <section class="pb-6 mt-0 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
              <!-- To keep in the same column -->
              <section class="break-inside-avoid">
                <h2
                  class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
                >
                  SKILLS
                </h2>
                <section class="mb-0 break-inside-avoid">
                  <section class="mt-1 last:pb-1">
										 <ul class="flex flex-wrap -mb-1 font-bold leading-relaxed text-md -mr-1.6">
        <li class="p-1.5 mb-1 leading-relaxed text-black bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            HTML5
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-black bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            CSS3
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-black bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            JavaScript
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-black bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            TypeScript
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-black bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            Node.js
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-black bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            React.js
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-black bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            Python
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-black bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            NoSQL
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-black bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            Postgresql
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-black bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            MongoDB
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-black bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            Linux
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-black bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            AWS
        </li>
											<li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
LLM/AI Prompting
												</li>
<li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
											Web Design
											</li>
<li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">UI/UX</li> <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset"> CI/CD </li>
											<li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset"> Lua </li>
    </ul>
                  </section>
                </section>
                </section>
              </section>

<!--Experience ------------------------------------------------------------------------------------------------------>
<section class="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
    <!-- To keep in the same column ------------------------------------------------------------------------->
    <section class="break-inside-avoid">
        <h2 class="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal">
            EXPERIENCE
        </h2>
        <!--Job 1-->
        <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
                <h3 class="font-semibold text-gray-800 text-md leading-snugish">
                ${jobName}
                </h3>
                <p class="text-sm leading-normal text-gray-500">
                    ${startDateEx} &ndash; ${endDateEx} |
                </p>
            </header>
            <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;
                    </span>
                     ${exDescription}
                </li>
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;
                    </span>
                    Leveraged a range of bleeding edge front-end frameworks like React.js, Nullstack and Vue.js, as well as back-end frameworks such as Node.js and Express, to deliver robust and scalable web solutions.
                </li>
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;
                    </span>
                    Designed and implemented databases using SQL and NoSQL technologies like MySQL, PostgreSQL, MongoDB, and Firebase, optimizing data storage and management.
                </li>
            </ul>
        </section>
        <!-- job 2  -->
        <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
                <h3 class="font-semibold text-gray-800 text-md leading-snugish">
                    Computer Repair Technician
                </h3>
                <p class="text-sm text-gray-500 leading-snugish">
                    Mar 2018 &ndash; Present | Freelance
                </p>
            </header>
            <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;
                    </span>
                    Provided expert computer repair services to individuals and businesses, diagnosing and resolving hardware and software issues effectively.
                </li>
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;
                    </span>
                    Demonstrated proficiency across diverse operating systems (Windows, macOS, Linux) and hardware components, offering tailored solutions, including hardware upgrades, software installations, and malware removal.
                </li>
            </ul>
        </section>
        <!-- job 3 -->
        <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
                <h3 class="font-semibold text-gray-800 text-md leading-snugish">
                    Assistant Manager
                </h3>
                <p class="text-sm text-gray-500 leading-snugish">
                    May 2012 &ndash; Apr 2018 | Pet Food Express
                </p>
            </header>
            <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;
                    </span>
                    Trained and supervised staff in product knowledge, customer engagement, and sales techniques, ensuring a top-notch shopping experience for customers.
                </li>
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;
                    </span>
                    Maintained a pristine and organized store environment, fostering maximum customer satisfaction.
                </li>
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;
                    </span>
                    Demonstrated deep expertise in the pet food industry, including trends, products, and competitors, providing customers with informed recommendations and advice.
                </li>
            </ul>
        </section>
        <!-- cetificats -->
        <section class="mb-2 border-b-0 border-gray-300 break-inside-avoid">
            <header>
                <h3 class="font-semibold text-gray-800 text-md leading-snugish">
                     ${certificatName}
                </h3>
                <p class="text-sm text-gray-500 leading-snugish">
                     ${StartDateCer} &ndash;  ${endDateCe} 
                </p>
            </header>
            <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;
                    </span>
                    Provided high-level administrative support to the small business executive, managing schedules, travel arrangements, and coordinating meetings and events.
                </li>
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;
                    </span>
                    Managed communication on behalf of the executive, including answering phone calls and emails, ensuring timely and professional responses to inquiries and requests.
                </li>
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;
                    </span>
                    Maintained relationships with vendors, clients, and external stakeholders, ensuring professionalism and alignment with the business's values.
                </li>
            </ul>
        </section>
    </section>
</section>


        <!-- end Column -->
      </section>
      <!-- end Page -->
    </main>

`;

    document.getElementById("doc2").appendChild(formContainer);
  } else if (radioselected == "modernCv") {
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    formContainer.innerHTML = `
       <div class="cv-container">
        <div class="left-column">
        <img class="portait" src="" />
          <div class="section">
            
          </div>
          <div class="section">
            <h2>summary</h2>
            <p>
              ${summary}
            </p>         
          </div>
          <div class="section">
            <h2>COMPÉTENCES</h2>
            <ul class="skills">
              <li><i class="icon fas fa-check-circle text-darkblue"></i> <strong>${skillName} &#124; ${skillName}</strong></li>
              <li><i class="icon fas fa-check-circle text-darkblue"></i> <strong>${skillName}</strong></li>
              <li><i class="icon fas fa-check-circle text-darkblue"></i> <strong>${skillName} &#124; ${skillName} &#124; ${skillName}</strong></li>
              <li><i class="icon fas fa-check-circle text-darkblue"></i> <strong>${skillName}</strong></li>
              <li><i class="icon fas fa-check-circle text-darkblue"></i> <strong>${skillName}</strong></li>
              <li><i class="icon fas fa-check-circle text-darkblue"></i> <strong>npm &#124; Webpack</strong></li>
              <li><i class="icon fas fa-check-circle text-darkblue"></i> ${skillName}</li>
              <li><i class="icon fas fa-check-circle text-darkblue"></i> Zend Framework</li>
              <li><i class="icon fas fa-check-circle text-darkblue"></i> MySQL</li>
              <li><i class="icon fas fa-check-circle text-darkblue"></i> Git &#124; Github</li>
            </ul>
          </div>
          <div class="section">
            <h2>Langues</h2>
            <p>${language}    -${level}
            </p>
          </div>
          <div class="section">
            <h2>Centres d'intérêt</h2>
            <p>
              Jeux vidéo, jouer et développer
              <br>
              Musique, écoute et composition
              <br>
              Art en général
              <br>
              Sport
              <br>
              Informatique en général
            </p>
          </div>
        </div>
        <div class="right-column">
          <div class="header">
            <h1><span class="text-blue text-uppercase">${skillName}</span></h1>
            <p>${jobName}</p>
            <ul class="infos">
              <li><i class="icon fas fa-at text-blue"></i> <a href="${email}">${email}</a></li>
              <li><i class="icon fas fa-phone text-blue"></i>${phoneNumber}</li>
              <li><i class="icon fas fa-map-marker-alt text-blue"></i>${adress}</li>
            </ul>
          </div>
          <div class="content">
            <div class="section">
              <h2>Experiences <br><span class="text-blue">professionelles</span></h2>
              <p>
                <strong>${startDateEx} <i class="fas fa-long-arrow-alt-right"></i> ${endDateEx}</strong>
                <br>
                ${jobName}</em>
              </p>
              <ul class="experience-list">
                <li>${exDescription}</li>
                <li>Intégration de templates Photoshop, Illustrator, Sketch, Figma</li>
                <li>Animations CSS / JS</li>
                <li>Responsive design</li>
                <li>UI / UX Design</li>
                <li>Projets sous npm et Webpack</li>
                <li>Collaboration avec d’autres studios graphique (Studio Debie, SOL,…)</li>
                <li>Optimisation des performances</li>
                <li>Développement de templates et de modules réutilisables</li>
                <li>Projets en équipe, utilisation quotidienne de SVN, Git et Github</li>
              </ul>
            </div>
            <div class="section">
              <p>
                <strong>${startDateEdu}</strong>
                <br>
                ${jobName}
              </p>
              <ul class="experience-list">
                <li>${companyName}</li>
                <li>${jobName}r</li>
              </ul>
            </div>
            <div class="section">
              <h2>education <br><span class="text-blue">& courses</span></h2>
              <p>
                <strong>${startDateEx} <i class="fas fa-long-arrow-alt-right"></i>${endDateEx}</strong>
                <br>
                <em>${schoolName}- ${majorName}</em>,${degree}
              </p>
              <p>
                <strong>${startDateEx}</strong>
                <br>
                <em>${schoolName}- ${majorName}</em>,${degree}
              </p>
              <p>
                <strong>${startDateEx} <i class="fas fa-long-arrow-alt-right"></i> ${endDateEx}</strong>
                <br>
                <em>Bachelier en Sciences humaines</em>, Haute École de Liège
              </p>
              <p>
                <strong>2009 <i class="fas fa-long-arrow-alt-right"></i> 2013</strong>
                <br>
                <em>Bachelier en Psychologie</em>, Université de Liège
              </p>
              <p>
                <strong>2002 <i class="fas fa-long-arrow-alt-right"></i> 2009</strong>
                <br>
                <em>CESS</em>, Institut Notre-Dame de Jupille
              </p>
            </div>
            <div class="section">
              <h2>more <br><span class="text-blue">experiences</span></h2>
              <p>
                Permis B, possession d’une voiture
                <br>
                Animateur Scout pendant 6 ans
                <br>
                Brevet d’animateur de Centre de Vacances
              </p>
            </div>
          </div>
        </div>
      </div>
        `;

    document.getElementById("doc2").appendChild(formContainer);
  } else {
    alert("please choose a template");
  }
}

// Remove language
function removeForm5(button) {
  button.parentElement.remove();
}

//html to pdf using pdf.js
function htmlToPdf() {
  const { jsPDF } = window.jsPDF;
  const doc = new jsPDF("p", "mm", "a4");

  const input1 = getElementById("input").value;

  doc.setFont("arial");
  doc.setFontSize(18);
  doc.settextColor(20, 50, 80);
  doc.text("html to pdf live codeing", 10, 20);

  doc.text(`input1: ${input1}`, 80, 60);

  if (image != "") {
    doc.addImage(image, "PNG", 10, 70, 50, 50);
  }
  doc.save("test rormat.pdf");
}
