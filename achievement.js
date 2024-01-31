// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelectorAll('nav a').forEach(function (link) {
//     link.addEventListener('click', function (event) {
//       if (event.currentTarget.getAttribute('href') === '#achievements') {
//         // Use Typed.js for achievements animation
//         animateAchievementsContent();
//       }
//     });
//   });
// });

// function animateAchievementsContent() {
//   var achievementsContent = document.getElementById('achievements-content');
//   var achievementsText = [
//     "Won two times district level speech competition organized by BLODAN and Red Cross Society.",
//     "Excellence Award winner 3 times at Nagarjun Valley Academy.",
//     "First Prize at Inter School English Essay Writing Competition Organized By PABSON.",
//     "Got rewarded $1000 from Meta Company for finding a security vulnerability.",
//     "Featured on Top Facebook page RONB.",
//     "Featured in Facebook Hall Of Fame.",
//     "Table Tennis Winner in Junior, Senior, and Inter School Competition.",
//     "Won the Inter house Drama Competition.",
//     "Full Ride Scholarship By Indian Government For B. Tech.",
//     "Many more...(will update later)."
//   ];

//   var currentIndex = 0;

//   function showNextAchievement() {
//     achievementsContent.innerHTML += "<p>" + achievementsText[currentIndex] + "</p>";
//     currentIndex++;

//     if (currentIndex < achievementsText.length) {
//       setTimeout(showNextAchievement, 1000); // Change the delay (in milliseconds) as needed
//     }
//   }

//   showNextAchievement();
// }
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav a').forEach(function (link) {
      link.addEventListener('click', function (event) {
          // Clear the achievements content before showing
          document.getElementById('achievements-content').innerHTML = "";

          if (event.currentTarget.getAttribute('href') === '#achievements') {
              animateAchievementsContent();
          }
      });
  });
});

function animateAchievementsContent() {
  var achievementsContent = document.getElementById('achievements-content');
  var achievementsText = [
      "Won two times district level speech competition organized by BLODAN and Red Cross Society.",
      "Excellence Award winner 3 times at Nagarjun Valley Academy.",
      "First Prize at Inter School English Essay Writing Competition Organized By PABSON.",
      "Got rewarded $1000 from Meta Company for finding a security vulnerability.",
      "Featured on Top Facebook page RONB.",
      "Featured in Facebook Hall Of Fame.",
      "Table Tennis Winner in Junior, Senior, and Inter School Competition.",
      "Won the Inter house Drama Competition.",
      "Full Ride Scholarship By Indian Government For B. Tech.",
      "Many more...(will update later)."
  ];

  var currentIndex = 0;

  function showNextAchievement() {
      achievementsContent.innerHTML += "<p>" + achievementsText[currentIndex] + "</p>";
      currentIndex++;

      if (currentIndex < achievementsText.length) {
          setTimeout(showNextAchievement, 1000);
      }
  }

  showNextAchievement();
}
