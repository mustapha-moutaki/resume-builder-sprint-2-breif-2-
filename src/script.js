// Initial count value
let count = 1;

const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
let prev = document.querySelectorAll(".prev");
let next = document.querySelectorAll(".btnNext");
let counter = 0;
// Set up the "prev" button to go to the previous section when clicked
prev.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (count > 1) {
      // Ensure count doesn't go below 1
      count--; 
    
    counter = counter - 16

      // progress.style.width = `${(count * 14.2857143)}%`; // incrementing the progress
      progress.style.width = `${counter}%`; 
      display(); 
    } else {
      alert("You are already at the first section.");
    }
  });
});

// Set up the "Next" button to go to the next section when clicked


next.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault(); 
    let allValid = false;
//all Valid equal the input or form inputs that contain
    switch (count) {
      case 1:
        allValid = validateFormPersonal(event); 
        break;
      case 2:
        allValid = validateFormExperiences(event); 
        break;
      case 3:
        allValid = validateFormEducation(event); 
        break;
      case 4:
        allValid = validateFormcertificats(event);
        break;
      case 5:
        allValid = validateFormSkill(event);
        break;
      case 6:
        allValid = validateFormlangauages(event); 
        break;
      default:
        alert("No more sections to navigate.");
    }

    if (allValid) {
      if (count < 7) {
        count++;
        counter += 16.2; // Update progress bar and add 16 to counter
        progress.style.width = `${counter}%`;
        display(); // Update the visible section
      } else {
        alert("You've completed the form!");
      }
    } else {
      console.log("Please fill in all required fields.");
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
let profilePictureData;
function loadFile(event) {
  const reader = new FileReader();
  reader.onload = function () {
    profilePictureData = reader.result; //  data URL
    document.getElementById("preview_img").src = profilePictureData; //    
    var imgElement = document.getElementById("preview_img");

    imgElement.style.objectFit = "cover"; // Ensures the image fills the container without distorting
    imgElement.style.width = "100px";
    imgElement.style.height = "100px";
    imgElement.style.overflow = "hidden";
  };
  reader.readAsDataURL(event.target.files[0]);
}
// Fixing images storage end

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
let addSkillsContainer = document.getElementById("addskillsCountainer");

//----------------------------skills infos end------------------------------------------

//----------------------------language infos  ------------------------------------------
let language = document.getElementById("language");
let level = document.getElementById("level");

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
let experiences = [];
// Experience add
let formCounter = 1; // Keep track of the form number
function addForm1(event) {
  event.preventDefault();

  const jobName = document.getElementById("experienceName").value;
  const experienceDescription = document.getElementById("editor").value;
  const startDateEx = document.getElementById("Start-date-exp").value;
  const endDateEx = document.getElementById("End-date-exp").value;
  if (jobName && experienceDescription && startDateEx && endDateEx) {
    
    
    experiences.push(jobName)
    experiences.push(experienceDescription)
    experiences.push(startDateEx)
    experiences.push(endDateEx)
  }
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
let educations = []
function addForm2(event) {
  event.preventDefault();
  const schoolName = document.getElementById("shcoolname").value;
  const majorName = document.getElementById("majorname").value;
  const degree = document.getElementById("degree").value;
  const startDateedu = document.getElementById("start-date-edu").value;
  const endDateedu = document.getElementById("end-date-edu").value;
if(schoolName && majorName && degree){
  educations.push(schoolName)
  educations.push(majorName)
  educations.push(degree)
  educations.push(startDateedu)
  educations.push(endDateedu)
}
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
let certificats = [];
function addForm3(event) {
  event.preventDefault();

  const certificateName = document.getElementById("certificat-name").value;
  const certificateDate = document.getElementById("Start-date-cer").value;
  // let certificatNom = document.querySelectorAll('.certificatName').value;
  if (certificateName && certificateDate) {
    certificats.push(certificateName)
    certificats.push(certificateDate)
  }

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

let skills = [];
// Skills add
function addForm4(event) {
  event.preventDefault();

  // Ensure skillName exists and has the correct value
  const skillInput = document.getElementById("skillName").value; // Assuming you have this input field in your HTML

  if (skillInput) {
    skills.push(skillInput)
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    formContainer.innerHTML = `
        <div class="flex border-solid border-2 border-sky-500 p-2 rounded-md mt-2 items-center justify-between">
            <div class="flex">
                <p class="mr-2">${skillInput}</p>
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
  console.log(skills)
}

// Languages add
let languages = [];
function addForm5(event) {
  event.preventDefault();

  // Ensure both language and level inputs exist and have correct values
  const languageInput = document.getElementById("language").value; // Assuming you have this input field in your HTML
  const levelInput = document.getElementById("level").value; // Assuming you have this input field in your HTML
  
  if (languageInput && levelInput) {
    languages.push(languageInput);
    languages.push(levelInput);
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    formContainer.innerHTML = `
        <div class="flex border-solid border-2 border-sky-500 p-2 rounded-md mt-2 items-center justify-between">
            <div class="flex">
                <p class="mr-2">${languageInput} - ${levelInput}</p>
            </div>
            <div onclick="removeForm5(this)">
                <i class="fa-solid fa-trash text-rose-500"></i>
            </div>
        </div>`;

    document.getElementById("displayElement5").appendChild(formContainer);
    languageInput.value = ""; // Clear the language input after adding
    levelInput.value = ""; // Clear the level input after adding

    // resumeData.push(personalSection);
    localStorage.setItem("resume", JSON.stringify(resumeData));
  } else {
    alert("Please enter both language and level.");
  }
}

// Remove language
function removeForm5(button) {
  button.parentElement.remove();
}


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

  //----------------------------certificats infos end------------------------------------------

  //----------------------------skills infos  ------------------------------------------
  let skillName = document.getElementById("skillName").value;

  //----------------------------skills infos end------------------------------------------

  //----------------------------language infos  ------------------------------------------
  // for(let i =0; i<language.length;i+3){
        // arr[i].innerHTML = "<h1>hello world</h1>"
  // }
  let language = document.getElementById("language").value;
  let level = document.getElementById("level").value;
  
  let radioselected = document.querySelector(
    'input[name="default-radio"]:checked'
  ).value;
  
  downloadBtn.style.display = "block";
  downloadBtn.style.width = "200px";

  if (radioselected == "classic cv") {
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    formContainer.innerHTML = `
        
    <main class="font-jost hyphens-manual overflow-hidden h-">
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
                    <a href="
            " class="group">
                      <span
                        class="mr-2 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Portfolio:
                     
                    </a>
                  </li>
                  <li
                    class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                  >
                   
                  </li>

                  <li
                    class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                  >
                    < href="" class="group">
                      <span
                        class="mr-8 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Email:
                      </span>
		    
            
                      <span
                        class="inline-block font-normal text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black"
                      >
                      ${email}
                        ↗
                      </span>
                    
                  </li>
                  <li
                    class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                  >
                    <a>
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
        
        <!-- school --------------------------------------------------------------------------->
        <section class="mt-2 border-b-2 break-inside-avoid">
            <header>
                <h1
                    class="text-lg font-semibold text-gray-700 leading-snugish"
                >
              
               
            </header>
            <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
            <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
            ${skills.map(skill => `<li>${skill}</li>`).join('')}
               
            </ul>
        </section>
        <!--school 2--------------------------------------------------------------------------------------------->
        <section class="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
            <header>
               
            </header>
            <h1>Education
            </h1>
            <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
            ${educations.map(education => `<li>${education}</li>`).join('')}
            </ul>
        </section>

        <!--school 3 --------------------------------------------------------------------------------->
        <section class="pb-4 mt-4 mb-4 break-inside-avoid">
            <header>
                <h3
                    class="flex-grow text-lg font-semibold text-gray-700 leading-snugish"
                >
                    
                </h3>
                
            </header>
            <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
            ${certificats.map(certificat => `<li>${certificat}</li>`).join('')}
            </ul>
                        Skills:
                  <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
            ${skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </section>
    </section>
</section>

            <!--Begin certificats ----------------------------------------------------------------------------------------------------->
            <section class="pb-6 mt-0 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
              <!-- To keep in the same column -->
              <section class="break-inside-avoid">
                <h2
                  class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
                >
                  certificats
                </h2>
                <section class="mb-0 break-inside-avoid">
                  <section class="mt-1 last:pb-1">
										 <ul class=" -mb-1 font-bold leading-relaxed text-md -mr-1.6">
                     
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
                ${experiences.map(experience => `<li>${experience}</li>`).join('')}
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
        <!-- languages  -->
        <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
           
            <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
             ${languages.map(language => `<li>${language}</li>`).join('')}
            </ul>
        </section>
     
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
    // document.getElementById("fileInput").addEventListener("change", loadFile);

    document.getElementById("doc2").appendChild(formContainer);
  } else if (radioselected == "modernCv") {
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    formContainer.innerHTML = `
       <div class="cv-container w-custom-2480 h-custom-3508" id = "cvcontainer">
        <div class="left-column">
        <img class="h-20 bg-black" title="Profile Picture" src="${profilePictureData}" />
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
            ${skills.map(skill => `<li>${skill}</li> <hr>`).join('')}
            </ul>
          </div>
          <div class="section">
            <h2>Langues</h2>
            ${languages.map(language => `<li>${language}</li>`).join('')}
            </p>
          </div>
          <div class="section">
           
            <p>
             
            </p>
          </div>
        </div>
        <div class="right-column">
          <div class="header">
           <!--here you have to complete----------------->
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
            <div>
           ${experiences.map(experience => `<li>${experience}</li>`).join('')}
              </div>
           
            <div class="section">
              <h2>education <br><span class="text-blue">& courses</span></h2>
              <div>
           ${educations.map(education => `<li>${education}</li>`).join('')}
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



//html to pdf print and download
let cvDiv = document.querySelector("#doc2");
let btndwlond = document.querySelector("#downloadBtn")
btndwlond.addEventListener("click", async function () {

  const filename = "my-cv.pdf";

  const options = {
    margin: 0,
    filename: filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 1 },
    // jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    jsPDF:   { unit: 'px', format: [2480, 3508], orientation: 'portrait' } //le width and height of the pdf or page A4
  };
  try {
    await html2pdf().set(options).from(cvDiv).save();
  } catch (error) {
    console.error("false:", error.message);
  }
});