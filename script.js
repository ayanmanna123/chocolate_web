 // Countdown Timer for Special Offers
function startCountdown() {
    const endDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now
    const timerInterval = setInterval(function() {
      const now = new Date().getTime();
      const timeLeft = endDate - now;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      // Update the countdown display
      document.getElementById("days").textContent = days < 10 ? "0" + days : days;
      document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
      document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
      document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
  
      // If the countdown is over, clear the interval
      if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").textContent = "EXPIRED";
      }
    }, 1000);
  }
  
  // Start countdown when the page loads
  window.onload = startCountdown;
// JavaScript to autoplay video when it enters the viewport

// JavaScript to autoplay video when it enters the viewport

// Get the video element
const video = document.getElementById('chocolate-video');

// Create an intersection observer to detect when the video is in view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If the video is in view, play it
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause(); // Optionally pause when the video is out of view
    }
  });
}, { threshold: 0.5 }); // 50% of the video must be visible to trigger the action

// Observe the video element
observer.observe(video);

  