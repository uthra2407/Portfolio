// Smooth scroll on navigation click
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      const targetSelector = link.getAttribute('href');
  
      // Skip if href is just "#"
      if (targetSelector === '#') return;
  
      const target = document.querySelector(targetSelector);
  
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`No target section found for ${targetSelector}`);
      }
    });
  });
  
  // Dark/Light Mode Toggle
  const toggleBtn = document.getElementById('theme-toggle');
  
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  
    // Optional: change icon/text on button
    if (document.body.classList.contains('light-mode')) {
      toggleBtn.innerHTML = '🌙 Dark Mode';
    } else {
      toggleBtn.innerHTML = '🔆 Light Mode';
    }
  });
  