const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLinks.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLinks.addEventListener('click', () => {
    wrapper.classList.remove('active');
});