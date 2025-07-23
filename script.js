window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');
  const current = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if(link.getAttribute('href') === current){
      link.classList.add('active');
    }
  });
});

const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !email || !subject || !message){
      alert('Please fill out all fields!');
      return;
    }

    alert('Thanks for reaching out! This is a demo form.');
    form.reset();

  });
}