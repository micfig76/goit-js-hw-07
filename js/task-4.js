const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = loginForm.querySelector('[name="email"]'); 

  const passwordInput = loginForm.querySelector('[name="password"]');

  const formData = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  if (!formData.email || !formData.password) {
    alert('All form fields must be filled.');
    return;
  }

  console.log('Form data:', formData);

  return formData;

loginForm.reset();
});