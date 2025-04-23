window.addEventListener("load", () => {
    // Preloader and Dark Mode Logic
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
  
    const body = document.body;
    const toggle = document.getElementById("toggleDark");
    if (!toggle) return;
  
    if (localStorage.getItem("dark-mode") === "enabled") {
      body.classList.add("dark");
      toggle.innerText = "☀️";
    } else {
      toggle.innerText = "🌙";
    }
  
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      const isDark = body.classList.contains("dark");
      toggle.innerText = isDark ? "☀️" : "🌙";
      localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
    });
    
    // Testimonial Carousel Logic
    const track = document.getElementById("carouselTrack");
    const slider = document.getElementById("sliderControl");
    const cards = track.querySelectorAll(".testimonial-card");
  
    let index = 0;
    const totalCards = cards.length;
  
    // Update carousel on slider input
    function updateCarousel() {
      const cardWidth = cards[0].offsetWidth; // Get width of one card
      const offset = index % totalCards;
  
      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${offset * (cardWidth + 32)}px)`; // Adjust for margin
  
      cards.forEach((card, i) => {
        card.classList.remove("active");
        if (i === offset) {
          card.classList.add("active");
        }
      });
  
      slider.value = offset;
    }
  
    // Handle slider input (manual control)
    slider.addEventListener("input", () => {
      index = parseInt(slider.value);
      updateCarousel();
    });
  
    // Autoplay the carousel every 3 seconds
    setInterval(() => {
      index = (index + 1) % totalCards;
      updateCarousel();
    }, 3000);
  
    updateCarousel();
  });
  
  window.addEventListener("load", () => {
    const toggle = document.getElementById("toggleDark");
    const body = document.body;
  
    // Load dark mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
      body.classList.add("dark");
      toggle.innerText = "☀️ Light Mode";
    } else {
      toggle.innerText = "🌙 Dark Mode";
    }
  
    // Toggle dark mode and save preference
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      const isDark = body.classList.contains("dark");
      toggle.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
      localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
    });
  });
  