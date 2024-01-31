document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav a').forEach(function (link) {
      link.addEventListener('click', function (event) {
          // Clear the education content before showing
          document.getElementById('education-content').innerHTML = "";

          if (event.currentTarget.getAttribute('href') === '#education') {
              animateEducationContent();
          }
      });
  });
});

function animateEducationContent() {
  var educationContent = document.getElementById('education-content');
  var educationText = [
      { level: "# - 10", institution: "Nagarjun Valley Academy", percentage: "100%" },
      { level: "11-12", institution: "Southwestern State College", percentage: "95%" },
      { level: "Btech'26", institution: "NIT KKR", percentage: "8+" }
  ];

  // Create a table element
  var table = document.createElement('table');

  // Create table header
  var thead = document.createElement('thead');
  var headerRow = document.createElement('tr');
  var headers = ['Level', 'Institution Name', '%/GPA'];

  headers.forEach(function (headerText) {
      var th = document.createElement('th');
      th.appendChild(document.createTextNode(headerText));
      headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement('tbody');

  educationText.forEach(function (educationItem) {
      var row = document.createElement('tr');

      Object.values(educationItem).forEach(function (value) {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode(value));
          row.appendChild(td);
      });

      tbody.appendChild(row);
  });

  table.appendChild(tbody);
  educationContent.appendChild(table);
}
