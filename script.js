// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Background Music
  const bgMusic = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");
  let isMusicPlaying = false;

  if (bgMusic && musicToggle) {
    bgMusic.volume = 0.8; // Set volume to 30%

    // Music toggle button
    musicToggle.addEventListener("click", function () {
      if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.classList.add("muted");
        musicToggle.querySelector(".music-icon").textContent = "🔇";
        isMusicPlaying = false;
      } else {
        bgMusic.play().catch((e) => console.log("Audio play prevented:", e));
        musicToggle.classList.remove("muted");
        musicToggle.querySelector(".music-icon").textContent = "🎵";
        isMusicPlaying = true;
      }
    });

    // Try to play music when welcome screen is clicked
    const welcomeScreen = document.getElementById("welcomeScreen");
    if (welcomeScreen) {
      welcomeScreen.addEventListener(
        "click",
        function () {
          if (!isMusicPlaying) {
            bgMusic
              .play()
              .then(() => {
                isMusicPlaying = true;
                musicToggle.classList.remove("muted");
              })
              .catch((e) => console.log("Audio play prevented:", e));
          }
        },
        { once: true }
      );
    }
  }

  // Welcome Screen Interaction
  const welcomeScreen = document.getElementById("welcomeScreen");
  const mainContent = document.getElementById("mainContent");

  if (welcomeScreen && mainContent) {
    welcomeScreen.addEventListener("click", function () {
      welcomeScreen.classList.add("hidden");
      setTimeout(() => {
        mainContent.classList.add("active");
      }, 800);
    });
  }

  // Envelope Letter Interaction
  const envelope = document.getElementById("envelope");

  if (envelope) {
    envelope.addEventListener("click", function () {
      envelope.classList.toggle("open");
    });
  }

  // Propose Day Interaction
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const proposeResult = document.getElementById("proposeResult");
  const heartsFalling = document.getElementById("heartsFalling");

  if (yesBtn && noBtn) {
    yesBtn.addEventListener("click", function () {
      proposeResult.innerHTML =
        "🎉 Yay! You made me the happiest person alive! 💕";
      proposeResult.classList.add("show");

      // Create falling hearts
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          createFallingHeart();
        }, i * 100);
      }

      // Hide buttons
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    });

    noBtn.addEventListener("click", function () {
      // Make the No button run away
      const x = Math.random() * (window.innerWidth - 200);
      const y = Math.random() * (window.innerHeight - 100);

      noBtn.style.position = "fixed";
      noBtn.style.left = x + "px";
      noBtn.style.top = y + "px";

      proposeResult.innerHTML =
        '😊 The "No" button is shy... try clicking "Yes" instead! 💕';
      proposeResult.classList.add("show");
    });
  }

  function createFallingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = "-50px";
    heart.style.fontSize = Math.random() * 2 + 1 + "rem";
    heart.style.animation = "fall 3s linear forwards";
    heart.style.pointerEvents = "none";

    if (heartsFalling) {
      heartsFalling.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 3000);
    }
  }

  // Chocolate Day Interaction
  document.querySelectorAll(".chocolate-piece").forEach((chocolate) => {
    chocolate.addEventListener("click", function () {
      if (!this.classList.contains("eaten")) {
        const message = this.getAttribute("data-message");

        // Show message
        const messageBox = document.createElement("div");
        messageBox.textContent = message;
        messageBox.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 255, 255, 0.95);
                color: #333;
                padding: 30px 40px;
                border-radius: 20px;
                font-size: 1.3rem;
                z-index: 2000;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                animation: fadeIn 0.3s ease;
                max-width: 80%;
                text-align: center;
            `;

        document.body.appendChild(messageBox);

        // Mark as eaten
        this.classList.add("eaten");

        setTimeout(() => {
          messageBox.style.animation = "fadeOut 0.3s ease";
          setTimeout(() => messageBox.remove(), 300);
        }, 2500);
      }
    });
  });

  // Teddy Day Interaction
  const teddyBear = document.getElementById("teddyBear");
  const hugTeddyBtn = document.getElementById("hugTeddyBtn");

  if (hugTeddyBtn && teddyBear) {
    hugTeddyBtn.addEventListener("click", function () {
      teddyBear.classList.add("hugged");

      const hugMessage = document.createElement("div");
      hugMessage.innerHTML =
        "🤗 *Teddy hugs you back* 💕<br>Sending you all the warmth and love!";
      hugMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 107, 157, 0.95);
            color: white;
            padding: 30px 40px;
            border-radius: 20px;
            font-size: 1.4rem;
            z-index: 2000;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            animation: fadeIn 0.3s ease;
            text-align: center;
        `;

      document.body.appendChild(hugMessage);

      setTimeout(() => {
        teddyBear.classList.remove("hugged");
        hugMessage.style.animation = "fadeOut 0.3s ease";
        setTimeout(() => hugMessage.remove(), 300);
      }, 2000);
    });
  }

  // Hug Day Interaction
  const startHugBtn = document.getElementById("startHugBtn");
  const hugFigures = document.getElementById("hugFigures");

  if (startHugBtn && hugFigures) {
    startHugBtn.addEventListener("click", function () {
      hugFigures.classList.add("hugging");
      startHugBtn.textContent = "🤗 Hugging... 💕";

      setTimeout(() => {
        hugFigures.classList.remove("hugging");
        startHugBtn.textContent = "Click for a Virtual Hug! 💕";

        const hugMessage = document.createElement("div");
        hugMessage.innerHTML =
          "💕 *Warm Hug Sent* 💕<br>Wishing I could hug you for real!";
        hugMessage.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 131, 176, 0.95);
                color: white;
                padding: 30px 40px;
                border-radius: 20px;
                font-size: 1.4rem;
                z-index: 2000;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                animation: fadeIn 0.3s ease;
                text-align: center;
            `;

        document.body.appendChild(hugMessage);

        setTimeout(() => {
          hugMessage.style.animation = "fadeOut 0.3s ease";
          setTimeout(() => hugMessage.remove(), 300);
        }, 2000);
      }, 2000);
    });
  }

  // Kiss Day Interaction
  const sendKissBtn = document.getElementById("sendKissBtn");

  if (sendKissBtn) {
    sendKissBtn.addEventListener("click", function () {
      // Create flying kiss animation
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          const kiss = document.createElement("div");
          kiss.innerHTML = "💋";
          kiss.style.cssText = `
                    position: fixed;
                    left: 50%;
                    top: 50%;
                    font-size: 2rem;
                    z-index: 2000;
                    pointer-events: none;
                    animation: flyKiss 2s ease-out forwards;
                `;

          const angle = (Math.PI * 2 * i) / 20;
          kiss.style.setProperty("--angle", angle + "rad");

          document.body.appendChild(kiss);

          setTimeout(() => kiss.remove(), 2000);
        }, i * 50);
      }

      const kissMessage = document.createElement("div");
      kissMessage.innerHTML = "💋 Kisses sent with love! 💋<br>Catch them all!";
      kissMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(238, 9, 121, 0.95);
            color: white;
            padding: 30px 40px;
            border-radius: 20px;
            font-size: 1.4rem;
            z-index: 2001;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            animation: fadeIn 0.3s ease;
            text-align: center;
        `;

      document.body.appendChild(kissMessage);

      setTimeout(() => {
        kissMessage.style.animation = "fadeOut 0.3s ease";
        setTimeout(() => kissMessage.remove(), 300);
      }, 2500);
    });
  }

  // Add flyKiss animation
  const kissStyle = document.createElement("style");
  kissStyle.textContent = `
    @keyframes flyKiss {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(
                calc(-50% + cos(var(--angle)) * 300px),
                calc(-50% + sin(var(--angle)) * 300px)
            ) scale(1.5);
            opacity: 0;
        }
    }
`;
  document.head.appendChild(kissStyle);

  // Valentine's Day Celebration
  const celebrateBtn = document.getElementById("celebrateBtn");
  const heartExplosion = document.getElementById("heartExplosion");

  if (celebrateBtn && heartExplosion) {
    celebrateBtn.addEventListener("click", function () {
      // Create massive heart explosion
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          const heart = document.createElement("div");
          heart.innerHTML = "❤️";
          heart.style.cssText = `
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    font-size: ${Math.random() * 3 + 1}rem;
                    animation: explodeHeart ${
                      Math.random() * 2 + 2
                    }s ease-out forwards;
                    pointer-events: none;
                `;

          const angle = (Math.PI * 2 * i) / 50;
          const distance = Math.random() * 300 + 200;
          heart.style.setProperty("--angle", angle + "rad");
          heart.style.setProperty("--distance", distance + "px");

          heartExplosion.appendChild(heart);

          setTimeout(() => heart.remove(), 4000);
        }, i * 30);
      }

      celebrateBtn.textContent = "🎉 Celebrating Our Love! 🎉";
      celebrateBtn.style.animation = "pulse 1s ease-in-out infinite";
    });
  }

  // Add explodeHeart animation
  const explodeStyle = document.createElement("style");
  explodeStyle.textContent = `
    @keyframes explodeHeart {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translate(
                calc(-50% + cos(var(--angle)) * var(--distance)),
                calc(-50% + sin(var(--angle)) * var(--distance))
            ) scale(1.5) rotate(720deg);
            opacity: 0;
        }
    }
`;
  document.head.appendChild(explodeStyle);

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
      konamiCode.join("").toLowerCase() ===
      konamiSequence.join("").toLowerCase()
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
        heart.style.animation = `fall ${
          Math.random() * 3 + 2
        }s linear forwards`;

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
}); // End of DOMContentLoaded
