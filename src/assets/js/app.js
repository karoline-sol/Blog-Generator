// Basic script to confirm the site loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Static site loaded successfully!');
  
  // Optional: add a simple dynamic effect
  const header = document.querySelector('header');
  header.addEventListener('mouseover', () => {
    header.style.background = '#222';
  });
  header.addEventListener('mouseout', () => {
    header.style.background = '#111';
  });
});
