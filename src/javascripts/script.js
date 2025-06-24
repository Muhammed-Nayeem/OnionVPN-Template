//Mobile Menu Toggler:
const mobileMenuDialog = document.getElementById("navbar-dialog");
const toggleMenuHandler = () => {
  mobileMenuDialog.classList.toggle("hidden");
};

//Time: Year
let currYear = document.getElementById("current-year");
const currentYear = () => {
  let date = new Date();
  currYear.innerText = date.getFullYear();
};

//Initialize Swiper
const swiper = new Swiper(".testimonial-swiper",  {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

//Testimonial Data:
const testimonials = [
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    comment:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. RedOnionVPN always the best",
    image: "../Images/user1.png",
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: 4.5,
    comment:
      "I like it because I like to travel far and still can connect with high speed.",
    image: "../Images/user2.png",
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: 4.5,
    comment:
      "This is very unusual for my business that currently requires a virtual private network that has high security.",
    image: "../Images/user3.png",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5.0,
    comment:
      "The best VPN service I've ever used. Perfect for remote work and accessing region-locked content. Highly recommended!",
    image: "../Images/user1.png",
  },
  {
    name: "Sarah Williams",
    location: "London, UK",
    rating: 4.8,
    comment:
      "Excellent service with great speeds. I use it daily for both work and streaming. The customer support is outstanding.",
    image: "../Images/user2.png",
  },
  {
    name: "Alex Rodriguez",
    location: "Madrid, Spain",
    rating: 4.7,
    comment:
      "Been using it for 6 months now. The connection is stable and secure. Perfect for my online banking and business needs.",
    image: "../Images/user3.png",
  },
  {
    name: "Emma Thompson",
    location: "Sydney, Australia",
    rating: 4.9,
    comment:
      "Amazing VPN service with fantastic global coverage. Never had any issues with speed or connectivity. Worth every penny!",
    image: "../Images/user1.png",
  },
];

//Generate Testimonials Slides:
const generateTestimonials = () => {
  let swiperWrapper = document.querySelector(".swiper-wrapper");
  testimonials.forEach((testimonial) => {
    let slideDiv = document.createElement("div");
    slideDiv.className = "swiper-slide";
    slideDiv.innerHTML = `
    <div class="border border-primaryText rounded-lg px-10 py-8 flex flex-col justify-between gap-6">
      <div class=" flex justify-between items-center gap-4">
        <div class="flex items-center gap-4">
          <img class="w-12 h-12 rounded-full" src="${testimonial?.image}" alt="user" />
          <div class="flex flex-col gap-1">
            <h4 class="text-lg text-headingText">${testimonial?.name}</h4>
            <p class="text-base text-subheadingText">${testimonial?.location}</p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-base font-medium text-headingText">${testimonial?.rating}</span>
          <i class="fa-solid fa-star text-yellow-500 text-base font-medium"></i>
        </div>
      </div>
      <div class="mt-2">
        <p class="text-base text-subheadingText">${testimonial?.comment}</p>
      </div>
    </div>
    `;
    swiperWrapper.appendChild(slideDiv);
  });
};

currentYear();
document.addEventListener("DOMContentLoaded", generateTestimonials);
