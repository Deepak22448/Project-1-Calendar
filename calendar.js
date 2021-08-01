let dt = new Date();

function calendar() {
  dt.setDate(1);

  let day = dt.getDay();

  let month = [
    "January ",
    "February ",
    "March ",
    "April ",
    "May ",
    "June ",
    "July ",
    "August ",
    "September ",
    "October ",
    "November ",
    "December ",
  ];
  //dates of last month..
  let prevDates = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  //end date of current month..
  let endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();

  let currentMonth = dt.getFullYear() + month[dt.getMonth()];
  document.getElementsByClassName("current-month")[0].innerHTML = currentMonth;

  var cells = "";
  for (let i = day; i > 0; i--) {
    cells += "<div class ='prev-date-cells'>" + (prevDates - i + 1) + "</div>";
  }
  for (let j = 1; j <= endDate; j++) {
    cells += "<div>" + j + "</div>";
  }

  document.getElementsByClassName("dates")[0].innerHTML = cells;
}

function changeMonth(para) {
  if (para == "next") {
    dt.setMonth(dt.getMonth() + 1);
  } else if (para == "prev") {
    dt.setMonth(dt.getMonth() - 1);
  }
  calendar();
}
