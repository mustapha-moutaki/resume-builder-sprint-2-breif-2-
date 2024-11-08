
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click",() => {
currentActive++;
if (currentActive > circles.length) currentActive = circles.length;
update();

});

prev.addEventListener("click", () => {
currentActive--;
if (currentActive < 1) currentActive = 1;
update();
});

const update = () => {
circles.forEach((circle, index) => {
if (index < currentActive) circle.classList.add("active");
else circle.classList.remove("active");
});
const actives = document.querySelectorAll(".active");
progress.style.width =
((actives.length - 1) / (circles.length - 1)) * 100 + "%";
if (currentActive === 1) prev.disabled = true;
else if (currentActive === circles.length) next.disabled = true;
else {
prev.disabled = false;
next.disabled = false;
}
};

//nitialize Quill editor
const quil = new Quill('.edit', {
    theme:'snow'
});
const quill = new Quill('.editor', {
  theme: 'snow'
});


//main
let sideMain = document.getElementById("sideMain");
let menuIcon = document.getElementById("menuIcon");
// menuIcon.style.display = 'none';
// sideMain.addEventListener('click', function() {
//     this.style.backgroundColor = 'red';   
//     this.style.display = 'none';
//     menuIcon.style.display ='block'         
// });




// Select the necessary DOM elements
const addEmailButton = document.getElementById('addEmail');
const emailFieldsContainer = document.getElementById('emailFields');

// Function to add a new email input field
function addEmailField() {
    // Create a new div container for the email input field
    const newFieldContainer = document.createElement('div');
    newFieldContainer.className = 'field-container';

    // Create the input field
    const newEmailInput = document.createElement('input');
    newEmailInput.type = 'email';
    newEmailInput.name = 'email[]';
    newEmailInput.placeholder = 'Enter your email';
    newEmailInput.required = true; // Make it required

    // Create the remove button
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove-btn';
    removeButton.innerText = 'Remove';
    
    // Add an event listener to remove the field
    removeButton.onclick = function() {
        emailFieldsContainer.removeChild(newFieldContainer);
    };

    // Append the input field and button to the container
    newFieldContainer.appendChild(newEmailInput);
    newFieldContainer.appendChild(removeButton);

    // Append the new field container to the email fields section
    emailFieldsContainer.appendChild(newFieldContainer);
}

// Attach the event handler to the button
addEmailButton.onclick = addEmailField;