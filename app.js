countdown = ()=> {
  const finalDate = new Date('1 january, 2022, 00:00:0000').getTime();
  const currentDate = new Date().getTime();
  const gap = finalDate - currentDate;

  const second = 1000;
  const minute = second*60;
  const hour = minute*60;
  const day = hour*24;

  const realDays = document.querySelector('.day').innerHTML = Math.floor(gap/day);
  const realHour = document.querySelector('.hour').innerHTML = Math.floor((gap%day)/hour);
  const realMin = document.querySelector('.min').innerHTML = Math.floor((gap%hour)/minute);
  const realSec = document.querySelector('.sec').innerHTML = Math.floor((gap%minute)/second);

}

setInterval(countdown, 1000);
