
    // Function to calculate the number of days between two dates
    function getDaysBetweenDates(date1, date2) {
      const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
      const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
      return diffDays;
    }

    // Function to handle the page load
    function onPageLoad() {
      const visitTimestamp = localStorage.getItem('visitTimestamp');
      if (visitTimestamp) {
        const lastVisitDate = new Date(visitTimestamp);
        const currentDate = new Date();
        const daysBetweenVisits = getDaysBetweenDates(lastVisitDate, currentDate);
        document.getElementById('daysBetweenVisits').textContent = daysBetweenVisits;
      }
      localStorage.setItem('visitTimestamp', new Date());
    }
