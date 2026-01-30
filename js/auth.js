/**
 * HHA Investigation Report - Authentication Module
 * Session-based authentication for confidential report access
 */

const AUTH_CONFIG = {
    password: 'HHA2026Secure!',
    sessionKey: 'hha_investigation_auth',
    loginPage: 'login.html'
};

/**
 * Check if user is authenticated
 * @returns {boolean} Authentication status
 */
function isAuthenticated() {
    return sessionStorage.getItem(AUTH_CONFIG.sessionKey) === 'true';
}

/**
 * Attempt to log in with password
 * @param {string} password - The password to validate
 * @returns {boolean} Whether login was successful
 */
function login(password) {
    if (password === AUTH_CONFIG.password) {
        sessionStorage.setItem(AUTH_CONFIG.sessionKey, 'true');
        return true;
    }
    return false;
}

/**
 * Log out the current user
 */
function logout() {
    sessionStorage.removeItem(AUTH_CONFIG.sessionKey);
    window.location.href = AUTH_CONFIG.loginPage;
}

/**
 * Require authentication - redirect to login if not authenticated
 * Call this at the top of protected pages
 */
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = AUTH_CONFIG.loginPage;
        return false;
    }
    return true;
}

/**
 * Handle login form submission
 * @param {Event} event - Form submit event
 */
function handleLogin(event) {
    event.preventDefault();

    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('login-error');
    const password = passwordInput.value;

    if (login(password)) {
        // Redirect to dashboard
        window.location.href = 'index.html';
    } else {
        // Show error
        passwordInput.classList.add('error');
        errorElement.classList.add('show');
        errorElement.textContent = 'Incorrect password. Please try again.';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

/**
 * Clear error state when user starts typing
 */
function clearError() {
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('login-error');

    if (passwordInput) {
        passwordInput.classList.remove('error');
    }
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

// Initialize authentication check on page load (for protected pages)
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Skip auth check on login page
    if (currentPage === 'login.html') {
        // If already authenticated, redirect to dashboard
        if (isAuthenticated()) {
            window.location.href = 'index.html';
        }

        // Set up login form handlers
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', handleLogin);
        }

        const passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.addEventListener('input', clearError);
        }
    } else {
        // Protected page - require authentication
        requireAuth();
    }
});
