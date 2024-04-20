document.getElementById("born").addEventListener("click", function () {
  var birthDay = parseInt(document.getElementById("day").value);
  var birthMonth = parseInt(document.getElementById("month").value);
  var birthYear = parseInt(document.getElementById("year").value);

  var today = new Date();
  var currentYear = today.getFullYear();
  var currentMonth = today.getMonth() + 1; // Adding 1 because January is 0-indexed
  var currentDay = today.getDate();

  var ageYears = currentYear - birthYear;
  var ageMonths = currentMonth - birthMonth;
  var ageDays = currentDay - birthDay;

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }
  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(currentYear, currentMonth, 0).getDate();
  }
  document.querySelector(".Year").innerText = ageYears + "";
  document.querySelector(".Month").innerText = ageMonths + "";
  document.querySelector(".Day").innerText = ageDays + "";
});
