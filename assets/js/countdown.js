/**
 * SQAI 2026 Conference Countdown Timer
 * 
 * This script creates a countdown timer that displays the days, hours, minutes, and seconds
 * remaining until the SQAI 2026 conference begins.
 * 
 * Simplified and robust version to ensure proper operation in production environments.
 */

(function() {
  // Global variable to track initialization state
  window.sqaiCountdownActive = false;
  
  // Main initialization function
  function initCountdown() {
    // Prevent duplicate initialization
    if (window.sqaiCountdownActive) return;
    
    // Check if the countdown elements exist on this page
    const countdownContainer = document.getElementById('countdown-container');
    if (!countdownContainer) return;
    
    // Setup countdown immediately if DOM is ready
    if (document.readyState === "complete" || document.readyState === "interactive") {
      setupCountdown();
    } else {
      // Otherwise wait for DOM ready
      document.addEventListener('DOMContentLoaded', setupCountdown);
    }
    
    // Listen for custom initialization events
    document.addEventListener('countdown:ready', setupCountdown);
    
    // Fallback initialization after delay
    setTimeout(function() {
      if (!window.sqaiCountdownActive) {
        console.log('Attempting to initialize countdown after delay');
        setupCountdown();
      }
    }, 2000);
  }

  function setupCountdown() {
    // Prevent duplicate initialization
    if (window.sqaiCountdownActive) return;
    
    console.log('Setting up countdown timer');
    
    // Get all required elements
    const daysElement = document.getElementById('countdown-days');
    const hoursElement = document.getElementById('countdown-hours');
    const minutesElement = document.getElementById('countdown-minutes');
    const secondsElement = document.getElementById('countdown-seconds');
    const countdownElement = document.getElementById('countdown-container');
    
    // If any element is missing, log error and return
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement || !countdownElement) {
      console.log('Countdown elements not found on this page');
      return;
    }
    
    // Remove any CSS fallback animation class
    if (secondsElement) {
      secondsElement.classList.remove('js-disabled');
    }
    
    // Target date: June 26, 2026 at 9:00 AM Taipei Time (UTC+8)
    // Note: JavaScript months are 0-based (0=Jan, 1=Feb, ..., 5=Jun)
    // Taipei is UTC+8, so we use UTC+0 at 1:00 AM to represent Taipei's 9:00 AM
    const targetDate = new Date(Date.UTC(2026, 5, 26, 1, 0, 0)); // 2026-06-26 09:00:00 Taipei time
    
    // Function to update the countdown timer
    function updateCountdown() {
      try {
        // Get current time (UTC)
        const now = new Date();
        
        // Calculate remaining time in milliseconds
        const diff = targetDate - now;
        
        // If the countdown is over, show that the conference is in progress
        if (diff <= 0) {
          countdownElement.innerHTML = '<div class="countdown-ended"><h3>SQAI 2026 is Now in Progress!</h3></div>';
          return;
        }
        
        // Calculate days, hours, minutes and seconds
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Format and update display values - use both textContent and innerText for compatibility
        if (daysElement) {
          const dayStr = days.toString().padStart(2, '0');
          daysElement.textContent = dayStr;
          daysElement.innerText = dayStr;
        }
        
        if (hoursElement) {
          const hourStr = hours.toString().padStart(2, '0');
          hoursElement.textContent = hourStr;
          hoursElement.innerText = hourStr;
        }
        
        if (minutesElement) {
          const minStr = minutes.toString().padStart(2, '0');
          minutesElement.textContent = minStr;
          minutesElement.innerText = minStr;
        }
        
        if (secondsElement) {
          const secStr = seconds.toString().padStart(2, '0');
          secondsElement.textContent = secStr;
          secondsElement.innerText = secStr;
        }
        
        // Add animation effect to numbers that change
        if (daysElement) daysElement.classList.add('countdown-animate');
        if (hoursElement) hoursElement.classList.add('countdown-animate');
        if (minutesElement) minutesElement.classList.add('countdown-animate');
        if (secondsElement) secondsElement.classList.add('countdown-animate');
        
        // Remove animation class after it completes so it can be added again
        setTimeout(function() {
          if (daysElement) daysElement.classList.remove('countdown-animate');
          if (hoursElement) hoursElement.classList.remove('countdown-animate');
          if (minutesElement) minutesElement.classList.remove('countdown-animate');
          if (secondsElement) secondsElement.classList.remove('countdown-animate');
        }, 500);
      } catch (error) {
        console.error('Error updating countdown:', error);
      }
    }
    
    // Initial update
    updateCountdown();
    
    // Update every second
    const intervalId = setInterval(updateCountdown, 1000);
    
    // Clear interval when page is unloaded
    window.addEventListener('beforeunload', function() {
      clearInterval(intervalId);
    });
    
    // Mark as initialized
    window.sqaiCountdownActive = true;
    console.log('Countdown timer active');
  }

  // Start initialization
  initCountdown();
  
  // Export global method for manual initialization
  window.initSQAICountdown = initCountdown;
})();
