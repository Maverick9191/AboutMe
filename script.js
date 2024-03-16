// Toggle project description

const toggleButtons = document.querySelectorAll('.toggle-description');

 

toggleButtons.forEach(button => {

  button.addEventListener('click', () => {

    const projectDescription = button.previousElementSibling;

    projectDescription.style.display = projectDescription.style.display === 'none' ? 'block' : 'none';

  });

});

 

// Form validation

const form = document.querySelector('form');

 

form.addEventListener('submit', (event) => {

  const nameInput = document.getElementById('name');

  const emailInput = document.getElementById('email');

  const messageInput = document.getElementById('message');

 

  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {

    event.preventDefault();

    alert('Please fill in all fields.');

  }

});
