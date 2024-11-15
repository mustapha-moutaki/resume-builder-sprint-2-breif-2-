# CV Builder Application

An intuitive, multi-step CV builder that allows users to create professional resumes effortlessly. With dynamic fields, customizable templates, and step-by-step guidance, this application makes CV creation simple and efficient.

---

## 📋 Features

### 1. **Step-by-Step Form (Stepper Form) with Validation**
- **Personal Information**: Input fields for full name, profile photo, email, phone number, address, LinkedIn, GitHub, portfolio, etc.
- **Professional Details**: Fields for job title and profile summary.
- **Skills**: Separate sections for technical (hard skills) and soft skills, with dynamic field addition.
- **Languages**: Add languages with proficiency levels dynamically.
- **Hobbies and Interests**: Dynamically add hobbies and interests.
- **Academic Background**: Dynamic forms to add multiple educational qualifications.
- **Work Experience**: Add multiple professional experiences dynamically.
- **Certifications**: Input certification names and associated links dynamically.

### 2. **Progress Tracking**
- A progress bar displays the user's completion status for each step.

### 3. **Customizable CV Templates**
- Two distinct CV designs for users to choose from.
- Real-time preview and customization of the selected template.

### 4. **Save and Resume Later**
- Option to save the created CVs within the app for future editing or reuse.

### 5. **Field Validation**
- Validation rules ensure data accuracy (e.g., email, phone, URLs).

### 6. **Export Options**
- Download the CV as a PDF or print it directly.

---

## 🛠️ Technologies Used
- **HTML5**: Structure of the application.
- **TailwindCSS**: For styling and responsiveness.
- **JavaScript**: For dynamic interactions and DOM manipulation.

---

## 📖 User Stories

### 1. **Create a CV**
- Users can organize their information using a guided step-by-step form.
#### ✅ Acceptance Criteria
- Clear steps are defined for data entry.
- Navigation between steps does not erase entered data.
- Each step corresponds to a specific type of information.

---

### 2. **Step-by-Step Form**
- Users fill out information in clearly segmented steps.
#### ✅ Acceptance Criteria
- Steps are labeled with descriptive names.
- Navigation buttons allow moving forward and backward.
- A progress bar dynamically updates with each step.

---

### 3. **Dynamic Forms**
- Users can dynamically add multiple entries for skills, languages, academic qualifications, work experience, and certifications.
#### ✅ Acceptance Criteria
- Fields can be added or removed without reloading the page.
- Users can manage repetitive information efficiently.

---

### 4. **Field Validation**
- Prevent submission of invalid or incomplete data.
#### ✅ Acceptance Criteria
- Fields are validated based on type (e.g., email, URL).
- Clear error messages guide users to correct mistakes.
- Users cannot proceed to the next step with invalid data.

---

### 5. **Progress Tracking**
- Visual feedback on completion status.
#### ✅ Acceptance Criteria
- Progress bar updates dynamically with user actions.
- Reversing steps updates the progress bar accordingly.

---

### 6. **Customizable CV Templates**
- Users can choose and preview from two distinct CV designs.
#### ✅ Acceptance Criteria
- Real-time preview of the selected template.
- Ability to switch templates before finalizing.

---

### 7. **Download and Print**
- Users can export the finalized CV.
#### ✅ Acceptance Criteria
- Downloadable as a PDF file with consistent formatting.
- Print-ready directly from the application.

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mustapha-moutaki/cv-builder.git
