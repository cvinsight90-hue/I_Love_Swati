// Welcome Screen Interaction
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContent = document.getElementById("mainContent");

welcomeScreen.addEventListener("click", function () {
  welcomeScreen.classList.add("hidden");
  setTimeout(() => {
    mainContent.classList.add("active");
  }, 800);
});

// Envelope Letter Interaction
const envelope = document.getElementById("envelope");

envelope.addEventListener("click", function () {
  envelope.classList.toggle("open");
});

// Quiz Functionality
let currentQuestion = 1;
const quizQuestions = document.querySelectorAll(".quiz-question");
const quizResult = document.querySelector(".quiz-result");

document.querySelectorAll(".quiz-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (this.classList.contains("correct")) {
      // Correct answer - show next question or result
      const currentQ = document.querySelector(".quiz-question.active");
      currentQ.classList.remove("active");

      currentQuestion++;

      if (currentQuestion <= quizQuestions.length) {
        quizQuestions[currentQuestion - 1].classList.add("active");
      } else {
        // Show result
        quizResult.classList.add("active");
      }
    } else {
      // Wrong answer - shake animation
      this.style.animation = "shake 0.5s";
      setTimeout(() => {
        this.style.animation = "";
      }, 500);
    }
  });
});

// Shake animation for wrong answers
const style = document.createElement("style");
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Countdown Timer
// Change this date to your special day (Year, Month-1, Day, Hour, Minute, Second)
// Example: new Date(2024, 0, 15, 10, 30, 0) = January 15, 2024, 10:30 AM
const specialDate = new Date(2025, 10, 2, 7, 30, 0); // Change this to your actual date

function updateCountdown() {
  const now = new Date();
  const difference = now - specialDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Secret Modal
const secretBtn = document.getElementById("secretBtn");
const secretModal = document.getElementById("secretModal");
const modalClose = document.querySelector(".modal-close");

secretBtn.addEventListener("click", function () {
  secretModal.classList.add("active");
});

modalClose.addEventListener("click", function () {
  secretModal.classList.remove("active");
});

// Close modal when clicking outside
secretModal.addEventListener("click", function (e) {
  if (e.target === secretModal) {
    secretModal.classList.remove("active");
  }
});

// Smooth Scroll for better experience
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Parallax Effect for Hero Section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero-content");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    hero.style.opacity = 1 - scrolled / 500;
  }
});

// Intersection Observer for Animations on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 1s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Photo Card Hover Effect with 3D Tilt
document.querySelectorAll(".photo-card").forEach((card) => {
  card.addEventListener("mousemove", function (e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  });
});

// Reason Cards Animation on Hover
document.querySelectorAll(".reason-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const icon = this.querySelector(".reason-icon");
    icon.style.transform = "scale(1.3) rotate(360deg)";
    icon.style.transition = "transform 0.6s ease";
  });

  card.addEventListener("mouseleave", function () {
    const icon = this.querySelector(".reason-icon");
    icon.style.transform = "scale(1) rotate(0deg)";
  });
});

// Create floating hearts on click
document.addEventListener("click", function (e) {
  // Don't create hearts for button clicks
  if (e.target.tagName === "BUTTON") return;

  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.fontSize = "2rem";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "9999";
  heart.style.animation = "floatUp 2s ease-out forwards";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
});

// Add floatUp animation
const floatUpStyle = document.createElement("style");
floatUpStyle.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(1.5);
        }
    }
`;
document.head.appendChild(floatUpStyle);

// Random love quotes that appear on scroll
const loveQuotes = [
  "Every love story is beautiful, but ours is my favorite ❤️",
  "You are my today and all of my tomorrows 💕",
  "In you, I've found the love of my life and my closest friend 💑",
  "You make my heart smile 😊",
  "I love you more than yesterday, less than tomorrow 💝",
];

let lastScrollTop = 0;
let quoteTimeout;

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Check if scrolling down significantly (reduced frequency - now every 1200px)
  if (scrollTop > lastScrollTop + 1200) {
    clearTimeout(quoteTimeout);
    quoteTimeout = setTimeout(() => {
      showRandomQuote();
    }, 800);
    lastScrollTop = scrollTop;
  } else if (scrollTop < lastScrollTop - 1200) {
    lastScrollTop = scrollTop;
  }
});

function showRandomQuote() {
  const existingQuote = document.querySelector(".floating-quote");
  if (existingQuote) return; // Don't show if one is already visible

  const quote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
  const quoteElement = document.createElement("div");
  quoteElement.className = "floating-quote";
  quoteElement.textContent = quote;
  quoteElement.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.95);
        color: #f5576c;
        padding: 30px 40px;
        border-radius: 20px;
        font-size: 1.3rem;
        font-family: 'Dancing Script', cursive;
        z-index: 1500;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        animation: quoteAppear 3s ease-in-out forwards;
        pointer-events: none;
        max-width: 80%;
        text-align: center;
    `;

  document.body.appendChild(quoteElement);

  setTimeout(() => {
    quoteElement.remove();
  }, 3000);
}

// Add quote animation
const quoteStyle = document.createElement("style");
quoteStyle.textContent = `
    @keyframes quoteAppear {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        80% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
    }
`;
document.head.appendChild(quoteStyle);

// Easter egg: Konami code (↑ ↑ ↓ ↓ ← → ← → B A)
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

document.addEventListener("keydown", function (e) {
  konamiCode.push(e.key);
  konamiCode.splice(
    -konamiSequence.length - 1,
    konamiCode.length - konamiSequence.length
  );

  if (
    konamiCode.join("").toLowerCase() === konamiSequence.join("").toLowerCase()
  ) {
    triggerEasterEgg();
  }
});

function triggerEasterEgg() {
  // Create a shower of hearts
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = "-50px";
      heart.style.fontSize = Math.random() * 3 + 1 + "rem";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "9999";
      heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, i * 100);
  }

  // Show special message
  const easterEggMsg = document.createElement("div");
  easterEggMsg.textContent =
    "🎉 You found the secret! You are as amazing as you are curious! 🎉";
  easterEggMsg.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        padding: 20px 40px;
        border-radius: 50px;
        font-size: 1.2rem;
        z-index: 10000;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        animation: slideDown 0.5s ease-out;
    `;

  document.body.appendChild(easterEggMsg);

  setTimeout(() => {
    easterEggMsg.style.animation = "slideUp 0.5s ease-out forwards";
    setTimeout(() => easterEggMsg.remove(), 500);
  }, 4000);
}

// Add fall animation for easter egg
const fallStyle = document.createElement("style");
fallStyle.textContent = `
    @keyframes fall {
        to {
            top: 100vh;
            transform: rotate(360deg);
        }
    }
    
    @keyframes slideDown {
        from {
            top: -100px;
            opacity: 0;
        }
        to {
            top: 20px;
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            top: 20px;
            opacity: 1;
        }
        to {
            top: -100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(fallStyle);

console.log(
  "%c❤️ Made with Love for Mannat/Swati/Manorma ❤️",
  "font-size: 20px; color: #f5576c; font-weight: bold;"
);
console.log(
  "%cTry the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A",
  "font-size: 14px; color: #667eea;"
);
