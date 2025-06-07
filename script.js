


// Dark/Light theme toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Initialize theme from localStorage or default to light
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
      themeIcon.className = 'fa-regular fa-moon';
    }

    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark');
      if (body.classList.contains('dark')) {
        themeIcon.className = 'fa-regular fa-moon';
        localStorage.setItem('theme', 'dark');
      } else {
        themeIcon.className = 'fa-regular fa-sun';
        localStorage.setItem('theme', 'light');
      }
    });


      const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }

    // Simple email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    // Simulate sending message (replace with real API call if needed)
    formMessage.textContent = 'Sending...';
    setTimeout(() => {
      formMessage.textContent = `Thanks, ${name}! Your message has been sent.`;
      contactForm.reset();
    }, 1500);
  });

  
  
  document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Hide navbar when any link is clicked (useful for mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });

  // Optional: Hide mobile menu when screen is resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navbar.classList.remove('active');
    }
  });
});

window.addEventListener('scroll', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.classList.add('hidden');
  }
});





