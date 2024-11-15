
function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

// Function to validate the Personal Information form
function validateFormPersonal(event) {
  event.preventDefault(); 


  document.querySelectorAll(".error").forEach(error => error.textContent = "");

  let isValid = true;

  // Validate Full Name 
  const fullName = document.getElementById("fullName").value;
  if (fullName.trim() === "") {
    showError("fullNameError", "Full Name is required.");
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    showError("emailError", "Please enter a valid email address.");
    isValid = false;
  }

  // Validate Phone Number
  const phone = document.getElementById("phone-input").value;
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  if (!phonePattern.test(phone)) {
    showError("phoneError", "Please enter a valid phone number (123-456-7890).");
    isValid = false;
  }

  // Validate Address
  const address = document.getElementById("street-address").value;
  if (address.trim() === "") {
    showError("addressError", "Please enter a valid address.");
    isValid = false;
  }

  return isValid;
}








// Function to validate the Experiences form
function validateFormExperiences(event) {
  event.preventDefault(); 

  document.querySelectorAll(".error").forEach(error => error.textContent = "");

  let isValid = true;

  const jobName = document.getElementById("experienceName").value;
  if (jobName.trim() === "") {
    showError("experienceNameError", "Job Name is required.");
    isValid = false;
  }


  const companyName = document.getElementById("companyName").value;
  if (companyName.trim() === "") {
    showError("companyNameError", "Company Name is required.");
    isValid = false;
  }

  const experienceDescription = document.getElementById("editor").value;
  if (experienceDescription.trim() === "") {
    showError("experienceDescriptionError", "Description is required.");
    isValid = false;
  }

  return isValid;
}










function validateFormEducation(event) {
  event.preventDefault(); 


  document.querySelectorAll(".error").forEach(error => error.textContent = "");

  let isValid = true;


  const schoolName = document.getElementById("shcoolname").value;
  if (schoolName.trim() === "") {
    showError("schoolNameError", "School Name is required.");
    isValid = false;
  }

  const majorName = document.getElementById("majorname").value;
  if (majorName.trim() === "") {
    showError("majorNameError", "Major is required.");
    isValid = false;
  }

 
  const degree = document.getElementById("degree").value;
  if (degree === "Choose degree") {
    showError("degreeError", "Please select a degree.");
    isValid = false;
  }

  return isValid;
}

// Function to validate the certificats form
function validateFormcertificats(event) {
  event.preventDefault(); 

  document.querySelectorAll(".error").forEach(error => error.textContent = "");

  let isValid = true;

  const certificatName = document.getElementById("certificat-name").value;
  if (certificatName.trim() === "") {
    showError("certificatNameError", "At least one skill is required.");
    isValid = false;
  }

  if (isValid) {
    document.querySelectorAll("#section").submit();
  }

  return isValid;
}



// Function to validate the Skills form
function validateFormSkill(event) {
  event.preventDefault(); 

  document.querySelectorAll(".error").forEach(error => error.textContent = "");

  let isValid = true;

  const skillName = document.getElementById("skillName").value;
  if (skillName.trim() === "") {
    showError("skillNameError", "At least one skill is required.");
    isValid = false;
  }

  if (isValid) {
    document.querySelectorAll("#section").submit();
  }

  return isValid;
}



// Function to validate the langauges form
function validateFormlangauages(event) {
  event.preventDefault(); 

  document.querySelectorAll(".error").forEach(error => error.textContent = "");

  let isValid = true;

  const languageName = document.getElementById("language").value;
  if (languageName.trim() === "") {
    showError("langaugeNameError", "At least one language is required.");
    isValid = false;
  }
  const languageLevel = document.getElementById("level").value;
   if (languageLevel.trim() === "") {
    showError("levelError", "lavel is required.");
    isValid = false;
  }

  if (isValid) {
    document.querySelectorAll("#section").submit();
  }

  return isValid;
}