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

// Initialize Quill editor for des styling
const quil = new Quill('.edit', {
    theme: 'snow'
});
const quill = new Quill('.editor', {
    theme: 'snow'
});

// Uploading photo in form 
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
let exDescription = quill;//need to fix
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
downloadBtn.style.display = 'none';//button downlaod










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

let submitit = submitSection6.addEventListener('click', function() {
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
    }
    resumeData.push(personalSection);
    localStorage.setItem('resume', JSON.stringify(resumeData));
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
    const skillInput = document.getElementById("skillName");  // Assuming you have this input field in your HTML
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
        skillInput.value = "";  // Clear the input after adding the skill
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
    const languageInput = document.getElementById("language");  // Assuming you have this input field in your HTML
    const levelInput = document.getElementById("level");  // Assuming you have this input field in your HTML
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
        languageInput.value = "";  // Clear the language input after adding
        levelInput.value = "";  // Clear the level input after adding

        resumeData.push(personalSection);
    localStorage.setItem('resume', JSON.stringify(resumeData));


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

 let creatcv = document.getElementById('createresumebtn');
 creatcv.style.display = 'none';

//    resumeData.personalSection;
let profilePercture = document.getElementById("profilePic").value; // for file input
let fullName = document.getElementById("fullName").value;
let email = document.getElementById("email").value;
let adress = document.getElementById("street-address").value;
let phoneNumber = document.getElementById("phone-input").value;
let summary = quill.getText()  // or quill.getText() for plain text
//----------------------------personal infos end------------------------------------------



//----------------------------experience infos------------------------------------------
let jobName = document.getElementById("experienceName").value;
let companyName = document.getElementById("companyName").value;
let startDateEx = document.getElementById("Start-date-exp").value;
let endDateEx = document.getElementById("End-date-exp").value;
let exDescription = quill.getText();//need to fix
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

   let radioselected = document.querySelector('input[name="default-radio"]:checked').value;
console.log(radioselected)
       downloadBtn.style.display = 'block';
       downloadBtn.style.width = '200px';
       
       if(radioselected == 'classic cv'){
          
            
        const formContainer = document.createElement("div");
        formContainer.className = "form-container";
        formContainer.innerHTML = `
        <div id="inner">
          
            <div id="hd">
              <div class="yui-gc">
                <div class="yui-u first">
                  <h1>${fullName}</h1>
                  <h2>${jobName}</h2>
                </div>
        
                <div class="yui-u">
                  <div class="contact-info">
                    
                    <h3><a href="mailto:name@yourdomain.com">${email}</a></h3>
                    <h3>${phoneNumber}</h3>
                  </div><!--// .contact-info -->
                </div>
              </div><!--// .yui-gc -->
            </div><!--// hd -->
        
            <div id="bd">
              <div id="yui-main">
                <div class="yui-b">
        
                  <div class="yui-gf">
                    <div class="yui-u first">
                      <h2>Profile</h2>
                    </div>
                    <div class="yui-u">
                      <p class="enlarge">
                      ${summary}
                      </p>
                    </div>
                  </div><!--// .yui-gf -->
        
                  <div class="yui-gf">
                    <div class="yui-u first">
                      <h2>Skills</h2>
                    </div>
                    <div class="yui-u">
        
                        <div class="talent">
                          <h2>${skillName}</h2>
                          <p>Assertively exploit wireless initiatives rather than synergistic core competencies.	</p>
                        </div>
        
                        <div class="talent">
                          <h2>${skillName}</h2>
                          <p>Credibly streamline mission-critical value with multifunctional functionalities.	 </p>
                        </div>
        
                        <div class="talent">
                          <h2>Project Direction</h2>
                          <p>Proven ability to lead and manage a wide variety of design and development projects in team and independent situations.</p>
                        </div>
                    </div>
                  </div><!--// .yui-gf -->
        
                  <div class="yui-gf">
                    <div class="yui-u first">
                      <h2>Technical</h2>
                    </div>
                    <div class="yui-u">
                      <ul class="talent">
                        <li>XHTML</li>
                        <li>CSS</li>
                        <li class="last">Javascript</li>
                      </ul>
        
                      <ul class="talent">
                        <li>Jquery</li>
                        <li>PHP</li>
                        <li class="last">CVS / Subversion</li>
                      </ul>
        
                      <ul class="talent">
                        <li>OS X</li>
                        <li>Windows XP/Vista</li>
                        <li class="last">Linux</li>
                      </ul>
                    </div>
                  </div><!--// .yui-gf-->
        
                  <div class="yui-gf">
          
                    <div class="yui-u first">
                      <h2>Experience</h2>
                    </div><!--// .yui-u -->
        
                    <div class="yui-u">
        
                      <div class="job">
                        <h2>${companyName}k</h2>
                        <h3>${jobName}</h3>
                        <h4>${startDateEx} - ${endDateEx}</h4>
                        <p>${exDescription}</p>
                      </div>
        
                      <div class="job">
                        <h2>${companyName}k</h2>
                        <h3>${jobName}</h3>
                        <h4>${startDateEx} - ${endDateEx}</h4>
                        <p>${exDescription}</p>
                      </div>
        
                      <div class="job">
                        <h2>${companyName}k</h2>
                        <h3>${jobName}</h3>
                        <h4>${startDateEx} - ${endDateEx}</h4>
                        <p>${exDescription}</p>
                      </div>
        
        
                      <div class="job last">
                        <h2>${companyName}k</h2>
                        <h3>${jobName}</h3>
                        <h4>${startDateEx} - ${endDateEx}</h4>
                        <p>${exDescription}</p>
                      </div>
        
                    </div><!--// .yui-u -->
                  </div><!--// .yui-gf -->
        
        
                  <div class="yui-gf last">
                    <div class="yui-u first">
                      <h2>Education</h2>
                    </div>
                    <div class="yui-u">
                      <h2>${schoolName}  |${startDateEdu}-${endDateEdu}</h2>
                      <h3>${majorName}&mdash; <strong>${degree}</strong> </h3>
                    </div>
                  </div><!--// .yui-gf -->
        
        
                </div><!--// .yui-b -->
              </div><!--// yui-main -->
            </div><!--// bd -->
        
            <div id="ft">
              <p>Jonathan Doe &mdash; <a href="mailto:name@yourdomain.com">name@yourdomain.com</a> &mdash; (313) - 867-5309</p>
            </div><!--// footer -->
        
          </div><!-- // inner -->
        `;

        document.getElementById("doc2").appendChild(formContainer);

       }else if(radioselected == 'modernCv'){
           
            
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
       }else{
           alert("please choose a template")
       }



   
    
}

// Remove language
function removeForm5(button) {
    button.parentElement.remove();
}
