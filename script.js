document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav a').forEach(function (link) {
      link.addEventListener('click', function (event) {
          if (event.currentTarget.getAttribute('href') === '#contact') {
              var footer = document.querySelector('footer');
              footer.style.display = (footer.style.display === 'none' || footer.style.display === '') ? 'block' : 'none';

              // Use Typed.js for word-by-word animation on contact content
              animateContactContent();
          }
      });
  });
});

function animateContactContent() {
  var options = {
      strings: [
          "<h2>Phone number:</h2><p>+91 XXXXXXXXXX</p>",
          "<h2>Mail:</h2><p>12222008@nitkkr.ac.in</p>",
          "<h2>Address:</h2><p>Thanesar</p>",
          "<h2>Post Box:</h2><p>Hukum Laga 345-FX</p>"
      ],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 30, // backspacing speed in milliseconds
      backDelay: 1000, // delay before starting to backspace
      loop: false, // do not loop the animation
      showCursor: false // hide the cursor
  };

  var typed = new Typed('#contact-content', options);

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
}

}
