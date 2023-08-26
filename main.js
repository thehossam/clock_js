
let hour = document.getElementById("hour");
let munets = document.getElementById("munet");
let sec = document.getElementById("sec");

setInterval(()=> {
let newTime = new Date();

  hour.innerHTML = newTime.getHours();
  munets.innerHTML = newTime.getMinutes();
  sec.innerHTML = newTime.getSeconds();
},1000);
