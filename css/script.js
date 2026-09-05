document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Contact Form Handler (Simulated Email Trigger)
  const contactForm = document.getElementById('logisticsContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const alertBox = document.getElementById('formAlert');
      alertBox.classList.remove('d-none');
      contactForm.reset();
      
      setTimeout(() => {
        alertBox.classList.add('d-none');
      }, 5000);
    });
  }

  // 2. Dynamic Year Update in Footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});