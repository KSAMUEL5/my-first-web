


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

    // Handle reviews
    const rateForm = document.getElementById('rateForm');
    const reviewsContainer = document.getElementById('reviews');

    // Load existing reviews from localStorage
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    function displayReviews() {
      reviewsContainer.innerHTML = '';
      if (reviews.length === 0) {
        reviewsContainer.innerHTML = '<p>No reviews yet.</p>';
        return;
      }
      reviews.forEach((rev, index) => {
        const div = document.createElement('div');
        div.className = 'review';
        div.setAttribute('data-index', index);

        // stars in red
        const stars = '★'.repeat(rev.stars) + '☆'.repeat(5 - rev.stars);
        div.innerHTML = `
          <div class="stars" aria-label="${rev.stars} out of 5 stars">${stars}</div>
          <strong>${rev.name}</strong>
          <p>${rev.review}</p>
          <div class="actions">
            <button class="edit-btn" aria-label="Edit review by ${rev.name}">Edit</button>
            <button class="delete-btn" aria-label="Delete review by ${rev.name}">Delete</button>
          </div>
        `;

        reviewsContainer.appendChild(div);
      });
    }

    function saveReviews() {
      localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    rateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = rateForm.name.value.trim();
      const stars = parseInt(rateForm.stars.value);
      const review = rateForm.review.value.trim();

      if (!name || !stars || !review) {
        alert('Please fill out all fields.');
        return;
      }

      // Add new review
      reviews.push({ name, stars, review });
      saveReviews();
      displayReviews();
      rateForm.reset();
    });

    reviewsContainer.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('delete-btn')) {
        const reviewDiv = target.closest('.review');
        const index = parseInt(reviewDiv.getAttribute('data-index'));
        if (confirm('Are you sure you want to delete this review?')) {
          reviews.splice(index, 1);
          saveReviews();
          displayReviews();
        }
      } else if (target.classList.contains('edit-btn')) {
        const reviewDiv = target.closest('.review');
        const index = parseInt(reviewDiv.getAttribute('data-index'));
        const rev = reviews[index];

        // Prompt for new values
        const newName = prompt('Edit name:', rev.name);
        if (newName === null) return; // Cancelled
        const newStars = prompt('Edit stars (1-5):', rev.stars);
        if (newStars === null) return;
        const newReview = prompt('Edit review:', rev.review);
        if (newReview === null) return;

        // Validate inputs
        const starsNum = parseInt(newStars);
        if (!newName.trim() || !newReview.trim() || isNaN(starsNum) || starsNum < 1 || starsNum > 5) {
          alert('Invalid input. Please try editing again.');
          return;
        }

        reviews[index] = {
          name: newName.trim(),
          stars: starsNum,
          review: newReview.trim(),
        };
        saveReviews();
        displayReviews();
      }
    });

    displayReviews();

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





