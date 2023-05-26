function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // Update active button styling
    var buttons = document.querySelectorAll('nav button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    var selectedButton = document.querySelector('nav button[data-section="' + sectionId + '"]');
    selectedButton.classList.add('active');
}

function toggleSideBar() {
    var sidebar = document.getElementById('sidebar');
    var sidebarElements = document.getElementById('sidebar-elements');
    var overlay = document.querySelector('.overlay');
  
    sidebar.classList.toggle('sidebar-open');
    sidebarElements.classList.toggle('sidebar-elements-open');
  
    if (sidebar.classList.contains('sidebar-open')) {
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);
      }
    } else {
      if (overlay) {
        overlay.remove();
      }
    }
  }
  


