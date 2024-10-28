// Slider
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[n].classList.add('active');
}

// Automatic slide transition
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000); // Change the interval as needed

// User interaction (e.g., swiping)
// ...

// Birthday Wishes
function checkBirthdays() {
  const today = new Date();
  const birthdayList = [
    { name: 'Student 1', birthDate: '2008-10-28' },
    // Add 9 more students
  ];

  const birthdayMessages = birthdayList.filter(student => {
    const birthDate = new Date(student.birthDate);
    return birthDate.getMonth() === today.getMonth() && birthDate.getDate() === today.getDate();
  }).map(student => {
    return `<div class="birthday-message">
        <img src="student1.jpg" alt="Student 1">
        <h3>Happy Birthday, ${student.name}!</h3>
    </div>`;
  });

  const birthdayContainer = document.querySelector('.birthday-list');
  birthdayContainer.innerHTML = birthdayMessages.join('');
}

checkBirthdays(); // Check for birthdays on page load
