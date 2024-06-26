//     Get items in html 


const btn = document.getElementById("btn");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

//       time
//       start
let timeon
let interval= setInterval(()=>{
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let insert = minutes < 10 ? minutes  = "0" + minutes : minutes;
const seconds = date.getSeconds();
const amPm = hours >= 12 ? "AM" : "PM";
if (hours > 12) {
  hours = hours - 12;
}
let insert2 = hours < 10  ? hours  = "0" + hours : hours;
return timeon = `${insert2}:${insert}:${seconds} ${amPm}`;
},1000)

//   End
  
//    date start

 const date2 = new Date();
 const year = date2.getFullYear();
 const month = date2.getMonth() + 1;
 const day = date2.getDate();
 const daty3 = date2.getDay()
 const dateon = `${day} ${month} ${year}` 

//    days

let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

//    month name

let monthName = ["January", 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', "November",'December']

//   Create messages

let index = 0;
const arr = [
  "how can i help you",
  "what ?",
  "Okay",
  "Okay",
];

//     Working on button 
//           start

btn.addEventListener("click", btn2);
btn.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    btn2();
  }
});
input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    btn2();
  }
});
function btn2() {
  let mess = input.value.toLowerCase();
  let slit = mess.split(" ")
  let tiem =  slit.indexOf('time')
  let full =  slit.indexOf("full")
  let deat =  slit.indexOf('date')
  //    how are you
  let h = slit.indexOf('how')
  let a = slit.indexOf('are')
  let y = slit.indexOf('you')
  //   what are you doing
  let w = slit.indexOf('what')
  let d = slit.indexOf('doing')
  //    month
  let m = slit.indexOf("month")
  //  make friend
  let f = slit.indexOf('friend')
  let c = slit.indexOf('can')
//   day name
let dn = slit.indexOf('day')
  
  messages.innerHTML += `<div class="messages-container" id="messages-container">${mess}</div>`;
  if(tiem != -1 ){
  setTimeout(()=>{
    messages.innerHTML += `<div class="messages-container" id="messages-container">${timeon}</div>`;
  },800)
  }else if (deat != -1 && full != -1){
    setTimeout(()=>{
      messages.innerHTML += `<div class="messages-container" id="messages-container">${dateon}</div>`;
    },800)
  }else if(h != -1 && a != -1 && y != -1){
    setTimeout(()=>{
      messages.innerHTML += `<div class="messages-container" id="messages-container">i am fine and you</div>`;
    },800)
  }else if(w != -1 && a != -1 && y != -1 && d != -1){
    setTimeout(()=>{
      messages.innerHTML += `<div class="messages-container" id="messages-container">nothing and you</div>`;
    },800)
  }else if (f != -1 && c != -1){
    setTimeout(()=>{
      messages.innerHTML += `<div class="messages-container" id="messages-container">yes of course</div>`;
    },800)
  }else if(m != -1){
      setTimeout(()=>{
        messages.innerHTML += `<div class="messages-container" id="messages-container">${monthName[month-1]}</div>`;
      },800)
  }else if(deat != -1){
    setTimeout(()=>{
      messages.innerHTML += `<div class="messages-container" id="messages-container">${day}</div>`;
    },800)
  }else if(dn != -1){
    setTimeout(()=>{
      messages.innerHTML += `<div class="messages-container" id="messages-container">${days[daty3-1]}</div>`;
    },800)
  }
  else{
    setTimeout(() => {
      messages.innerHTML += `<div class="messages-container" id="messages-container">${arr[index]}</div>`;
      if (index === arr.length - 1) {
        index = 0;
      }
      ++index;
    }, 800);
  }
  input.value = "";
}

//       End
