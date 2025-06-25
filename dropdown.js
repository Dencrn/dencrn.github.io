function toggleDropdown(id) {
  const menu = document.getElementById(id);
  if (!menu) return;
  const isShown = menu.classList.contains('show');
  
  // Close all dropdowns first
  document.querySelectorAll('.dropdown-content').forEach(dropdown => {
    dropdown.classList.remove('show');
  });

  // Toggle the clicked dropdown
  if (!isShown) {
    menu.classList.add('show');
  }
}

// Close dropdowns when clicking outside
window.addEventListener("click", function(event) {
  if (!event.target.matches('.dropbtn')) {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
      dropdown.classList.remove('show');
    });
  }
});
