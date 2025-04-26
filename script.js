// Get references to the forms
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// --- Functions for index.html (Login/Signup Page) ---

function toggleForm(formType) {
  if (loginForm && signupForm) { // Check if elements exist (only run on index.html)
    if (formType === 'login') {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
    } else if (formType === 'signup') {
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
    }
  }
}

// Check hash on page load for index.html
document.addEventListener('DOMContentLoaded', () => {
    // Only run this part if we are on index.html (check if loginForm exists)
    if (loginForm) {
        const hash = window.location.hash;
        if (hash === '#signup') {
            toggleForm('signup');
        } else {
            // Default to login or if hash is #login
            toggleForm('login');
        }
        // Clean the hash from the URL bar
        // history.replaceState(null, null, ' '); // Optional: removes #login / #signup
    }
});


// --- Navigation Functions (Used by both pages) ---

function navigateHome() {
  window.location.href = 'home.html';
}

function navigateToLogin() {
  // Navigate to index.html and signal to show the login form
  window.location.href = 'index.html#login';
}

function navigateToSignup() {
  // Navigate to index.html and signal to show the signup form
  window.location.href = 'index.html#signup';
}

// --- Functions for home.html ---

function selectStandard(standard) {
  console.log(`Selected Standard: ${standard}`);
  // Placeholder action: show an alert
  alert(`You clicked on ${standard}th Standard. Feature coming soon!`);

  // **LATER**: Replace the alert with actual navigation or content loading logic
  // For example:
  // window.location.href = `/standards/${standard}`; // Navigate to a new page
  // loadStandardContent(standard); // Load content dynamically on the same page
}