// Function to animate intro heading text
function animateText() {
  const introHeadingText = document.querySelectorAll(".intro-heading-text");
  introHeadingText.forEach((headingText) => {
    setInterval(() => {
      headingText.classList.toggle("text-animation");
    }, 5000);
  });
}

animateText();

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Function to handle scroll event
function handleScroll() {
  const detailWrapper = document.querySelector('.detail-wrapper');
  const detailImage = document.querySelector('.detail-image');
  const detailWrapperRect = detailWrapper.getBoundingClientRect();
  const scrollProgress = (window.innerHeight - detailWrapperRect.top) / window.innerHeight;

  detailWrapper.style.transform = `translateY(${scrollProgress * 50}px)`;
  detailImage.style.transform = `translateY(-${scrollProgress * 50}px)`;
}

// Function to handle text hover
function handleTextHover() {
  const detailText = document.querySelector('.detail-text p');
  if(detailText){
  detailText.addEventListener('mouseover', () => {
    detailText.style.transform = 'perspective(1000px) rotateY(0deg) translateZ(0)';
  });
  
  detailText.addEventListener('mouseout', () => {
    detailText.style.transform = 'perspective(1000px) rotateY(0deg) translateZ(-20px)';
  });
}
}
handleTextHover();

// Event listener for features container click
const featuresContainers = document.querySelectorAll('.features-container');

featuresContainers.forEach((container) => {
  container.addEventListener('click', () => {
    featuresContainers.forEach((c) => c.classList.remove('clicked'));
    container.classList.add('clicked');
  });
});

// Slider functionality
const slider = document.querySelector('.slider');
const sliderItems = document.querySelector('.slider-items');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliderItemWidth = slider.clientWidth;
let currentPosition = 0;
let totalSlides = 2; // Update the total number of slides here

prevButton.addEventListener('click', () => {
  currentPosition = Math.min(currentPosition + sliderItemWidth, 0);
  moveSlider();
});

nextButton.addEventListener('click', () => {
  currentPosition = Math.max(currentPosition - sliderItemWidth, -(sliderItemWidth * (totalSlides - 1)));
  moveSlider();
});

function moveSlider() {
  sliderItems.style.transform = `translateX(${currentPosition}px)`;
}

// Redirect to login page on login link click
document.addEventListener('DOMContentLoaded', () => {
  const loginLink = document.querySelector('.login-link');
  loginLink.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
});

// Candidate Search Functionality
const candidates = [
  { name: "Jiya Dey", location: "New Delhi", jobRole: "Software Engineer" },
  { name: "Jhanvi Garg", location: "Mumbai", jobRole: "UX Designer" },
  { name: "Ria Kapoor", location: "Puducherry", jobRole: "Data Analyst" },
  { name: "Amisha Singh", location: "Chennai", jobRole: "Marketing Manager" },
  { name: "Mithali Devraj", location: "Lucknow", jobRole: "Project Manager" },
  { name: "Sarah Sethi", location: "New Delhi", jobRole: "Sales Representative" },
];

const searchButton = document.getElementById("searchButton");
const locationInput = document.getElementById("locationInput");
const jobRoleInput = document.getElementById("jobRoleInput");
const candidateList = document.getElementById("candidateList");

if(searchButton)
{
searchButton.addEventListener('click', () => {
  const location = locationInput.value.trim().toLowerCase();
  const jobRole = jobRoleInput.value.trim().toLowerCase();

  const filteredCandidates = candidates.filter(candidate =>
    candidate.location.toLowerCase().includes(location) &&
    candidate.jobRole.toLowerCase().includes(jobRole)
  );

  displayCandidates(filteredCandidates);
});
}
function displayCandidates(candidates) {
  candidateList.innerHTML = "";

  if (candidates.length === 0) {
    const noResultMessage = document.createElement("p");
    noResultMessage.textContent = "No candidates found.";
    candidateList.appendChild(noResultMessage);
  } else {
    candidates.forEach(candidate => {
      const candidateItem = document.createElement("div");
      candidateItem.classList.add("candidate-item");
      candidateItem.innerHTML = `
        <p class="name">${candidate.name}</p>
        <p class="location">Location: ${candidate.location}</p>
        <p class="job-role">Job Role: ${candidate.jobRole}</p>
      `;
      candidateList.appendChild(candidateItem);
    });
  }
}
