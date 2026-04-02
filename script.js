function showLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('signupForm').classList.remove('active');
    document.querySelectorAll('.toggle-btn')[0].classList.add('active');
    document.querySelectorAll('.toggle-btn')[1].classList.remove('active');
    clearMessages();
}

function showSignup() {
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    document.querySelectorAll('.toggle-btn')[1].classList.add('active');
    document.querySelectorAll('.toggle-btn')[0].classList.remove('active');
    clearMessages();
}

function clearMessages() {
    document.getElementById('loginMessage').textContent = '';
    document.getElementById('signupMessage').textContent = '';
    document.getElementById('loginMessage').className = 'message';
    document.getElementById('signupMessage').className = 'message';
}

// Login form handler

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const msg = document.getElementById('loginMessage');
    
    // Simple validation demo (no database)
    msg.textContent = 'Login successful! (Demo only - no database)';
    msg.className = 'message success';
    
    // Clear form after 2 seconds
    setTimeout(() => {
        this.reset();
        clearMessages();
    }, 2000);
});

// Signup form handler
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const msg = document.getElementById('signupMessage');
    
    // Simple validation demo (no database)
    msg.textContent = 'Account created! (Demo only - no database)';
    msg.className = 'message success';
    
    // Clear form after 2 seconds
    setTimeout(() => {
        this.reset();
        clearMessages();
    }, 2000);
});
