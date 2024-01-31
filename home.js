document.addEventListener('DOMContentLoaded', function () {
  // Check if the current section is Home
  var homeSection = document.getElementById('home');
  if (homeSection) {
      animateHomeContent();
  }
});

function animateHomeContent() {
  var options = {
      strings: [
          "Greetings and warm wishes!",
          "I'm Alan KC, a researcher and rapper from Kathmandu.",
          "Currently immersed in studies at NIT KKR.",
          "Known for my inquisitive nature, I blend academia with artistry.",
          "Join me on this unique journey where research meets rhythm, and curiosity finds its voice.",
          "Welcome to my world."
      ],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 30, // backspacing speed in milliseconds
      backDelay: 1000, // delay before starting to backspace
      loop: false, // do not loop the animation
      showCursor: false // hide the cursor
  };

  var typed = new Typed('#home-content', options);
}
