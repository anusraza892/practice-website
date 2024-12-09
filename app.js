// // Function to handle email form submission
// document.querySelector('form').addEventListener('submit', function(event) {
//     const emailInput = document.querySelector('input[type="email"]');
//     const email = emailInput.value;

//     if (validateEmail(email)) {
//         alert('Thank you for subscribing with ' + email);
//         emailInput.value = '';
//     } else {
//         alert('Please enter a valid email address.');
//     }
//     event.preventDefault();  // Prevent form from refreshing the page
// });

// // Email validation function
// function validateEmail(email) {
//     const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return re.test(email);
// }

// // Highlight active navigation link
// document.querySelectorAll('nav a').forEach(link => {
//     link.addEventListener('click', () => {
//         document.querySelectorAll('nav a').forEach(navItem => navItem.classList.remove('active'));
//         link.classList.add('active');
//     });
// });

// // Simple Scroll Effect for Main Content
// document.addEventListener('scroll', () => {
//     const header = document.querySelector('header');
//     if (window.scrollY > 50) {
//         header.style.backgroundColor = '#1a1a1a';
//     } else {
//         header.style.backgroundColor = 'transparent';
//     }
// });




// Function to handle email form submission
document.querySelector('form').addEventListener('submit', function(event) {
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (validateEmail(email)) {
        alert('Thank you for subscribing with ' + email);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
    event.preventDefault();  // Prevent form from refreshing the page
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Highlight active navigation link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('nav a').forEach(navItem => navItem.classList.remove('active'));
        link.classList.add('active');
    });
});

// Simple Scroll Effect for Main Content
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#1a1a1a';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// Function to check user sign-in status and update the button text
function updateButton() {
    const getStartedButton = document.querySelector('.get-started');
    const isSignedIn = localStorage.getItem('signedIn');

    if (isSignedIn === 'true') {
        getStartedButton.textContent = 'Create Post';
        getStartedButton.parentElement.href = './pages3/index.html';  // Ensure proper link
    } else {
        getStartedButton.textContent = 'Get Started';
        getStartedButton.parentElement.href = './pages1/signup.html';
    }
}

// Call this function when the page loads
updateButton();
