// Mutation observer to watch for changes in YouTube's DOM
function observeChanges(selector, callback) {
    const targetNode = document.body;
    const config = { childList: true, subtree: true };
    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        callback(element);
      }
    });
    observer.observe(targetNode, config);
  }
  
  // Function to hide or show elements
  let isHidden = true; // Elements are hidden by default
  
  function toggleDistractions() {
    const suggestions = document.querySelector('#secondary'); // Sidebar suggestions
    const endScreen = document.querySelector('.ytp-endscreen-content'); // End screen suggestions
    const recommendedSection = document.querySelector('#primary #contents'); // Home recommended videos
  
    if (isHidden) {
      // Show elements
      if (suggestions) suggestions.style.display = 'block';
      if (endScreen) endScreen.style.display = 'block';
      if (recommendedSection) recommendedSection.style.display = 'block';
      isHidden = false;
      toggleButton.innerText = 'Turn Off';  // Set button text to "Off" when distractions are visible
      console.log("Distractions shown.");
    } else {
      // Hide elements
      if (suggestions) suggestions.style.display = 'none';
      if (endScreen) endScreen.style.display = 'none';
      if (recommendedSection) recommendedSection.style.display = 'none';
      isHidden = true;
      toggleButton.innerText = 'Turn On';  // Set button text to "On" when distractions are hidden
      console.log("Distractions hidden.");
    }
  }
  
  // Initial hiding of elements
  function hideDistractions() {
    const suggestions = document.querySelector('#secondary'); // Sidebar suggestions
    const endScreen = document.querySelector('.ytp-endscreen-content'); // End screen suggestions
    const recommendedSection = document.querySelector('#primary #contents'); // Home recommended videos
  
    if (suggestions) suggestions.style.display = 'none';
    if (endScreen) endScreen.style.display = 'none';
    if (recommendedSection) recommendedSection.style.display = 'none';
    isHidden = true;
    toggleButton.innerText = 'Turn On';  // Set button text to "On" initially
  }
  
  // Add a button to toggle distractions
  let toggleButton = document.createElement('button');
  toggleButton.innerText = 'Turn On';  // Initialize the button with "On"
  toggleButton.style.position = 'fixed';
  toggleButton.style.top = '10px';
  toggleButton.style.right = '10px';
  toggleButton.style.zIndex = '10000'; // Ensure it's on top of other elements
  toggleButton.onclick = toggleDistractions;
  document.body.appendChild(toggleButton);
  console.log("Toggle button added.");
  
  // Observe changes for sidebar suggestions
  observeChanges('#secondary', (element) => {
    if (isHidden) element.style.display = 'none';
  });
  
  // Observe changes for end-screen suggestions
  observeChanges('.ytp-endscreen-content', (element) => {
    if (isHidden) element.style.display = 'none';
  });
  
  // Observe changes for recommended videos on the homepage
  observeChanges('#primary #contents', (element) => {
    if (isHidden) element.style.display = 'none';
  });
  
  // Initially hide distractions when the page loads
  hideDistractions();
  