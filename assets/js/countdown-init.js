/**
 * SQAI 2026 Conference Countdown Timer Initializer
 * 
 * This script is a backup to ensure the countdown is properly initialized
 * even if the main script loads after the DOM or in different environments.
 */

// Try to initialize the countdown after page loads
document.addEventListener('DOMContentLoaded', function() {
  if (window.initSQAICountdown && !window.sqaiCountdownActive) {
    setTimeout(function() {
      window.initSQAICountdown();
      console.log('Countdown init from DOMContentLoaded');
    }, 1000);
  }
});

// Also try when the page is fully loaded
window.addEventListener('load', function() {
  if (window.initSQAICountdown && !window.sqaiCountdownActive) {
    window.initSQAICountdown();
    console.log('Countdown init from window.load');
  }
});

// Final fallback with longer delay
setTimeout(function() {
  if (window.initSQAICountdown && !window.sqaiCountdownActive) {
    window.initSQAICountdown();
    console.log('Countdown init from delayed fallback');
  }
}, 3000);
