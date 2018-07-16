//Employees JS
  var xhr = new XMLHttpRequest();
  // Check ready state
  xhr.onreadystatechange(function() {
    if (xhr.Status === 200 && xhr.readyState === 4) {
      // Parse data
      var employees = JSON.parse(xhr.responseText);
      // Begin HTML
      var employeeStatus = '<ul class="bulleted">';
      // For loop
      for (i = 0; i < employees.length; i++) {
        if (employees[i].inoffice === true) {
          employeeStatus += '<li class="in">';
        } else {
          employeeStatus += '<li class="out">';
        }
        // Add name and end single employee
        employeeStatus += employees[i].name;
        employeeStatus += '</li>';
      } // End loop
      employeeStatus += '</ul>';
      // Add HTML to Div
      document.getElementById('employeeList').innerHTML = employeeStatus;
    }
  });

  // Init request
  xhr.open('GET', '../data/employees.json');
  // Send Request
  xhr.send();
//------------

//Employee JQ
  // Ready Function
  $(document).ready(function() {
    // Parse
    $.getJSON('path', function(response) {
      // Begin HTML
      var employeeStatus = '<ul class="bulleted">';
      // For loop
      $.each(response, function(index, employee) {
        if (employee.inoffice === true) {
          employeeStatus += '<li class="in">';
        } else {
          employeeStatus += '<li class="out">';
        }
        // Add name and end single employee
        employeeStatus += employee.name + '</li>';
      }); //End loop
      //End HTML
      employeeStatus += '</ul>';
      // Place in Div
      $('#employeeList').html(employeeStatus);
    });
  });
//---------
