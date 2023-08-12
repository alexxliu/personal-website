document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth",
      block: "center"
    });
  });
});


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
  

