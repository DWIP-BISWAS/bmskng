
// Hamburger menu toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const quickLinks = document.querySelector('.quick-links');

hamburgerMenu.addEventListener('click', () => {
  quickLinks.classList.toggle('show');
});

// News and notices slider
const newsSlider = document.querySelector('.news-box');
const newsItems = document.querySelectorAll('.news-item');

let currentNewsItem = 0;

// Demo notices
const noticeData = [
  { title: 'Notice 1', description: 'This is notice 1' },
  { title: 'Notice 2', description: 'This is notice 2' },
  { title: 'Notice 3', description: 'This is notice 3' },
  { title: 'Notice 4', description: 'This is notice 4' },
  { title: 'Notice 5', description: 'This is notice 5' },
  { title: 'Notice 6', description: 'This is notice 6' },
  { title: 'Notice 7', description: 'This is notice 7' },
  { title: 'Notice 8', description: 'This is notice 8' },
  { title: 'Notice 9', description: 'This is notice 9' },
  { title: 'Notice 10', description: 'This is notice 10' },
];

noticeData.forEach((notice) => {
  const newsItem = document.createElement('div');
  newsItem.classList.add('news-item');
  newsItem.innerHTML = `
    <h3>${notice.title}</h3>
    <p>${notice.description}</p>
  `;
  newsSlider.appendChild(newsItem);
  newsItems = document.querySelectorAll('.news-item');
});

setInterval(() => {
  newsItems[currentNewsItem].classList.remove('active');
  currentNewsItem = (currentNewsItem + 1) % newsItems.length;
  newsItems[currentNewsItem].classList.add('active');
}, 5000);

// Happy birthday section
const happyBirthdaySection = document.querySelector('.happy-birthday');
const birthdayList = document.querySelector('.birthday-list');

// Demo students with birthday dates
const birthdayData = [
  { name: 'John Doe', class: '10th', image: '(link unavailable)', birthday: '2024-10-28' },
  { name: 'Jane Doe', class: '12th', image: '(link unavailable)', birthday: '2024-11-05' },
  { name: 'Bob Smith', class: '9th', image: '(link unavailable)', birthday: '2024-10-12' },
  { name: 'Alice Johnson', class: '11th', image: '(link unavailable)', birthday: '2024-09-25' },
  { name: 'Mike Brown', class: '10th', image: '(link unavailable)', birthday: '2024-11-15' },
  { name: 'Emily Davis', class: '12th', image: '(link unavailable)', birthday: '2024-10-22' },
  { name: 'David Lee', class: '9th', image: '(link unavailable)', birthday: '2024-11-01' },
  { name: 'Sarah Taylor', class: '11th', image: '(link unavailable)', birthday: '2024-09-30' },
  { name: 'Kevin White', class: '10th', image: '(link unavailable)', birthday: '2024-10-18' },
  { name: 'Olivia Martin', class: '12th', image: '(link unavailable)', birthday: '2024-11-20' },
];

const today = new Date();
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();

birthdayData.forEach((birthday) => {
  const birthdayDate = birthday.birthday.split('-');
  const birthdayMonth = birthdayDate[1];
  const birthdayDay = birthdayDate[2];

  if (currentMonth === parseInt(birthdayMonth) && currentDay === parseInt(birthdayDay)) {
    const birthdayItem = document.createElement('li');
    birthdayItem.innerHTML = `
      <img src="${birthday.image}" alt="${birthday.name}">
      <span>${birthday.name}</span>
      <span>${birthday.class}</span>
    `;
    birthdayList.appendChild(birthdayItem);
  }
});

// Photo gallery slider
const photoGallery = document.querySelector('.photo-gallery');
const photoItems = document.querySelectorAll('.photo-item');

let currentPhotoItem = 0;

setInterval(() => {
  photoItems[currentPhotoItem].classList.remove('active');
  currentPhotoItem = (currentPhotoItem + 1) % photoItems.length;
  photoItems[currentPhotoItem].classList.add('active');
}, 3000);

// Google Maps integration (using iframe)
const mapElement = document.getElementById('map');

mapElement.innerHTML = `
  <iframe
  src="(link unavailable)?..."
  frameborder="0"
  style="border:0;"
  allowfullscreen=""
  aria-hidden="false"
  tabindex="0"
  ></iframe>
`;
