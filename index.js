function sendMail() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }
  
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  const params = {
    name: name,
    email: email,
    message: message
  };
  
  const serviceID = 'service_fb6wkkw'; 
  const templateID = 'template_zxaesxg';
  
  emailjs.send(serviceID, templateID, params)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Thank you for contacting us. We will get back to you shortly!');
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    }, function(error) {
      console.log('FAILED...', error);
      alert('There was an error sending your message. Please try again later.');
    });
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateTitle(entry.target);
        observer.unobserve(entry.target);
      }
    });
}
  
const observer = new IntersectionObserver(handleIntersection, {
  root: null, 
  threshold: 0.5 
});
  
const projectTitle = document.getElementById('project-title');
observer.observe(projectTitle);
  
const aboutTitle = document.getElementById('about-title');
observer.observe(aboutTitle);
  
const skillTitle = document.getElementById('skill-title');
observer.observe(skillTitle);

const connect = document.getElementById('contact-title');
observer.observe(connect);

function animateTitle(title) {
  const text = title.innerHTML;
  title.innerHTML = '';
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      title.innerHTML += text.charAt(i);
    }, 200 * i);
  }
}

var myImage = document.getElementById("myImage");
var originalSrc = myImage.src;
var hoverSrc = "assets/draw.png";

myImage.addEventListener("mouseover", function() {
  myImage.src = hoverSrc;
});

myImage.addEventListener("mouseout", function() {
  myImage.src = originalSrc;
});







  