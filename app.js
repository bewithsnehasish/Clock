// const button = document.getElementById('stop-button')


function showTime(){
  const currentTime = new Date();
  const time = `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`
  const names = `HOURS&nbsp : &nbspMINUTES&nbsp : &nbspSECONDS`
  document.getElementById('time').innerHTML = `${time}`;
  document.getElementById('nametime').innerHTML = `${names}`
}

let interval = setInterval(showTime,1000)


// button.addEventListener('click',()=>{
//   clearInterval(interval);
// })