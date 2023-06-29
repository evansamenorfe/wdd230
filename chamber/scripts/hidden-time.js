document.addEventListener('DOMContentLoaded', function() {
    var dateTimeField = document.getElementById('dateTime');
    var currentDateTime = new Date().toISOString().slice(0, 16);
    dateTimeField.value = currentDateTime;
  });