document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav a').forEach(function (link) {
      link.addEventListener('click', function (event) {
          // Clear the projects content before showing
          document.getElementById('projects-content').innerHTML = "";

          if (event.currentTarget.getAttribute('href') === '#projects') {
              animateProjectsContent();
          }
      });
  });
});

function animateProjectsContent() {
  var projectsContent = document.getElementById('projects-content');
  var projectsText = [
      "Youtube Clone",
      "E-commerce Website",
      "Medicine Adherence Tracker (IOT Team Project)",
      "Education Platform (Web Development Team Project)",
      "Flood Sensor Alarm",
      "Different IOT Projects on Tinker Cad."
  ];

  var currentIndex = 0;

  function showNextProject() {
      projectsContent.innerHTML += "<p>" + projectsText[currentIndex] + "</p>";
      currentIndex++;

      if (currentIndex < projectsText.length) {
          setTimeout(showNextProject, 1000);
      }
  }

  showNextProject();
}
