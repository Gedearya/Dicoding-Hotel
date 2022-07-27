// To show date and time
var dayName = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday";
dayName = dayName.split(" ");
var monthName =
  "January February March April May June July August September October November December";
monthName = monthName.split(" ");
var date = new Date();
var day = date.getDay();
var dates = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
fullDate = dayName[day] + ", " + dates + " " + monthName[month] + " " + year;

function showTime() {
  var a_p = "";
  var today = new Date();
  var curr_hour = today.getHours();
  var curr_minute = today.getMinutes();
  var curr_second = today.getSeconds();
  if (curr_hour < 12) {
    a_p = "AM";
  } else {
    a_p = "PM";
  }
  if (curr_hour == 0) {
    curr_hour = 12;
  }
  if (curr_hour > 12) {
    curr_hour = curr_hour - 12;
  }
  curr_hour = checkTime(curr_hour);
  curr_minute = checkTime(curr_minute);
  curr_second = checkTime(curr_second);
  document.getElementById("clock").innerHTML =
    curr_hour + ":" + curr_minute + ":" + curr_second + " " + a_p;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
setInterval(showTime, 500);
