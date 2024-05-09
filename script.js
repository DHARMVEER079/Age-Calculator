document.addEventListener("DOMContentLoaded", function() {
  function CalculateAge() {
      let day = parseInt(document.getElementById("day").value);
      let month = parseInt(document.getElementById("month").value) - 1; // Month starts from 0 (January)
      let year = parseInt(document.getElementById("year").value);

      // Check if any of the inputs are negative or greater than the actual permitted time in month or days
      if (isNaN(day) || isNaN(month) ||isNaN(year)||day < 0 || month < 0 || year < 0||day > 31 || month >11 ) {
          alert("Please enter a valid date.");
          return;
      }
     
      let birthDate = new Date(year, month, day);
      let currentDate = new Date();

      if (birthDate > currentDate) {
          alert("Please enter a valid birthdate.");
          return;
      }

      let ageInMilliseconds = currentDate - birthDate;
      let ageInSeconds = Math.floor(ageInMilliseconds / 1000);
      let ageInMinutes = Math.floor(ageInSeconds / 60);
      let ageInHours = Math.floor(ageInMinutes / 60);
      let ageInDays = Math.floor(ageInHours / 24);

      let years = currentDate.getFullYear() - birthDate.getFullYear();
      let months = currentDate.getMonth() - birthDate.getMonth();
      let days = currentDate.getDate() - birthDate.getDate();

      if (months < 0 || (months === 0 && currentDate.getDate() < birthDate.getDate())) {
          years--;
          months += 12;
      }

      let totalMonths = years * 12 + months;

      result1.innerHTML = `Age: ${years} years ${months} months ${days} days`;
      result2.innerHTML = `or ${totalMonths} months ${days} days`;
      result3.innerHTML = `or ${Math.floor(ageInDays / 7)} weeks ${ageInDays % 7} days`;
      result4.innerHTML = `or ${ageInDays} days`;
      result5.innerHTML = `or ${ageInHours} hours`;
      result6.innerHTML = `or ${ageInMinutes} minutes`;
      result7.innerHTML = `or ${ageInSeconds} seconds`;
  }

  let calculateButton = document.querySelector("button");
  calculateButton.addEventListener("click", CalculateAge);
});
