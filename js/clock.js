let name = prompt("Adınız nedir?")

var date = new Date();
var day = date.getDay();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

if(hour < 10){
    hour = "0" + hour; 
}else{
    hour;
}

if(minute < 10){
    minute = "0" + minute; 
}else{
    minute;
}

if(second < 10){
    second = "0" + second; 
}else{
    second;
}

switch (day) {
    case 0:
      day = "Pazar";
      break;
    case 1:
      day = "Pazartesi";
      break;
    case 2:
       day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
    case 7:
      day = "Pazar";
  }

let getname = document.querySelector("#myName")
getname.innerHTML = (name)

let info = document.querySelector("#myClock")
info.innerHTML = `${hour}:${minute}:${second} ${day}`;