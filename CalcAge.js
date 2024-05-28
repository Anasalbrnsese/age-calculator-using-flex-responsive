document.getElementById("born").addEventListener("click", function () {
  var birthDay = parseInt(document.getElementById("day").value);
  var birthMonth = parseInt(document.getElementById("month").value);
  var birthYear = parseInt(document.getElementById("year").value);

  var today = new Date();
  var currentYear = today.getFullYear();
  var currentMonth = today.getMonth() + 1; // Adding 1 because January is 0-indexed
  var currentDay = today.getDate();

  let isValid = true;

  // Validate year
  if (isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
    setError(document.getElementById("year"), 'Provide a valid year');
    isValid = false;
  } else {
    setSuccess(document.getElementById("year"));
  }

  // Validate month
  if (isNaN(birthMonth) || birthMonth < 1 || birthMonth > 12) {
    setError(document.getElementById("month"), 'Provide a valid month');
    isValid = false;
  } else {
    setSuccess(document.getElementById("month"));
  }

  // Validate day
  const daysInMonth = new Date(birthYear, birthMonth, 0).getDate();
  if (isNaN(birthDay) || birthDay < 1 || birthDay > daysInMonth) {
    setError(document.getElementById("day"), 'Provide a valid day');
    isValid = false;
  } else {
    setSuccess(document.getElementById("day"));
  }

  if (isValid) {
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
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};
