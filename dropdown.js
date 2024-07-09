         document.addEventListener('DOMContentLoaded', (event) => {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');
  
  dropdownToggle.addEventListener('click', () => {
      dropdown.classList.toggle('show');
  });

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
      if (!event.target.matches('.dropdown-toggle')) {
          if (dropdown.classList.contains('show')) {
              dropdown.classList.remove('show');
          }
      }
  }
});
