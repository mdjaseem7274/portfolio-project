// ==========================================
// A. THEME CONTROLLER (CLASS METHOD)
// ==========================================
const modeToggler = document.getElementById('themeSwitcher');
const appContainer = document.body;

modeToggler.addEventListener('click', function() {
    appContainer.classList.toggle('dark-mode-active');
    
    // Change button text dynamically based on class state
    if (appContainer.classList.contains('dark-mode-active')) {
        modeToggler.textContent = '☀️ Light Theme';
    } else {
        modeToggler.textContent = '🌓 Switch Theme';
    }
});


// ==========================================
// B. BIOGRAPHY EXPANDER MECHANISM
// ==========================================
const viewMoreBtn = document.getElementById('expandBioBtn');
const bioExtension = document.getElementById('longBio');

viewMoreBtn.addEventListener('click', function() {
    if (bioExtension.classList.contains('hidden-content')) {
        bioExtension.classList.remove('hidden-content');
        viewMoreBtn.textContent = 'Read Less';
    } else {
        bioExtension.classList.add('hidden-content');
        viewMoreBtn.textContent = 'Read More';
    }
});


// ==========================================
// C. INTERACTIVE INPUT VALIDATOR
// ==========================================
const clientForm = document.getElementById('contactFormValidation');
const feedbackBox = document.getElementById('validationFeedback');

clientForm.addEventListener('submit', function(pageEvent) {
    // Halting form submission to run checks
    pageEvent.preventDefault();

    const userName = document.getElementById('name').value.trim();
    const userEmail = document.getElementById('email').value.trim();
    const userMsg = document.getElementById('message').value.trim();

    // Clear previous dynamic warnings
    feedbackBox.innerText = "";

    // Sequential String Validation Checks
    if (userName.length === 0) {
        feedbackBox.innerText = "⚠️ Attention: Full name field is mandatory.";
        return;
    }

    if (userEmail.length === 0) {
        feedbackBox.innerText = "⚠️ Attention: Please fill out your email address.";
        return;
    }

    // Checking email structure using string indexes
    if (userEmail.indexOf('@') === -1 || userEmail.indexOf('.') === -1) {
        feedbackBox.innerText = "⚠️ Attention: This doesn't look like a valid email configuration.";
        return;
    }

    if (userMsg.length === 0) {
        feedbackBox.innerText = "⚠️ Attention: Empty messages cannot be processed.";
        return;
    }

    // Success response
    alert(`Success! Message received from ${userName}.`);
    clientForm.reset();
});