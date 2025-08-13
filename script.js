// ===== GALLERY LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    caption.textContent = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// ===== NEWSLETTER POPUP =====
const newsletterPopup = document.getElementById('newsletter-popup');
const closePopupBtn = document.querySelector('.close-popup');

window.addEventListener('load', () => {
  setTimeout(() => {
    newsletterPopup.style.display = 'flex';
  }, 3000);
});

closePopupBtn.addEventListener('click', () => {
  newsletterPopup.style.display = 'none';
});

// ===== REVIEW FORM SUBMISSION =====
const reviewForm = document.getElementById('review-form');
reviewForm.addEventListener('submit', e => {
  e.preventDefault(); // Prevent page reload
  const name = reviewForm.name.value;
  const rating = reviewForm.rating.value;
  const message = reviewForm.message.value;

  // Create new review card dynamically
  const newReview = document.createElement('div');
  newReview.classList.add('review-card');
  newReview.innerHTML = `<p>"${message}"</p><strong>- ${name} (${rating}⭐)</strong>`;

  document.querySelector('.reviews').appendChild(newReview);

  alert("Thank you for your review!");
  reviewForm.reset(); // Clear the form
});

// ===== OPTIONAL: Newsletter form alert =====
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', e => {
  // e.preventDefault(); // optional, remove to actually submit
  alert("Thank you for subscribing!");
});