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