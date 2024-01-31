document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav a').forEach(function (link) {
      link.addEventListener('click', function (event) {
          // Clear the skills content before showing
          document.getElementById('skills-content').innerHTML = "";

          if (event.currentTarget.getAttribute('href') === '#skills') {
              animateSkillsContent();
          }
      });
  });
});

function animateSkillsContent() {
  var skillsContent = document.getElementById('skills-content');
  var skillsText = [
      "HTML, CSS, JS, PHP",
      "C, Java, Python",
      "SQL, Linux",
      "Burp Suite",
      "DSA ,Cross-site scripting" ,
      "Version Control"
  ];

  var currentIndex = 0;

  function showNextSkill() {
      skillsContent.innerHTML += "<p>" + skillsText[currentIndex] + "</p>";
      currentIndex++;

      if (currentIndex < skillsText.length) {
          setTimeout(showNextSkill, 1000);
      }
  }

  showNextSkill();
}
