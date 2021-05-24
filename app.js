const body = document.querySelector('#body');
const time = document.querySelector('.time');
const day = document.querySelector('.day');
const displayDate = document.querySelector('.date');
const hourHand = document.querySelector('#hourHand');
const minHand = document.querySelector('#minHand');
const secHand = document.querySelector('#secHand');
const timeZone = document.querySelector('.timeZone');
const btn = document.querySelector('#btn');
const hands = document.querySelectorAll('.handCol');
const digitalClock = document.querySelector('#digitalClock');

var hours,minutes,seconds,month;
var date,hourRotate,minRotate,secRotate;
var darkTheme = false;

function getday(d){
    switch(d){
        case 0  : return `SUNDAY`;            
        case 1  : return `MONDAY`;
        case 2  : return `TUESDAY`;
        case 3  : return `WEDNESDAY`;
        case 4  : return `THURSDAY`;
        case 5  : return `FRIDAY`;
        case 6  : return `SATURDAY`;
    }
}

function getMonths(m){
    switch(m){
        case 0  : return 'Jan';
        case 1  : return 'Feb';
        case 2  : return 'Mar';
        case 3  : return 'Apr';
        case 4  : return 'May';
        case 5  : return 'Jun';
        case 6  : return 'Jul';
        case 7  : return 'Aug';
        case 8  : return 'Sep';
        case 9  : return 'Oct';
        case 10  : return 'Nov';
        case 11  : return 'Dec';
    }
}

function hourFormat(h){
    if(h>12){
        timeZone.innerHTML = 'PM';
        return h - 12;
    }else{
        timeZone.innerHTML = 'AM';
        return h;
    }
}

function timeFormat(k){
    if(k<10){
        return `0`+k;
    }else{
        return k;
    }
}

function updateTime(){
    date = new Date();
    
    hours = date.getHours();
    hours = hourFormat(hours);
    hours = hours > 12 ? hours - 12 : hours;
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    month = date.getMonth();

    hours = timeFormat(hours);
    minutes = timeFormat(minutes);
    seconds = timeFormat(seconds);

    hourRotate = ((hours/12)*360)-90;
    minRotate = ((minutes/60)*360)-90;
    secRotate = ((seconds/60)*360)-90;


    time.innerHTML = `${hours}:${minutes}:${seconds}`;
    day.innerHTML = `${getday(date.getDay())} , ${getMonths(month)}`;
    displayDate.innerHTML = `${date.getDate()}`;
    hourHand.style.transform = `rotate(${hourRotate}deg)`
    minHand.style.transform = `rotate(${minRotate}deg)`
    secHand.style.transform = `rotate(${secRotate}deg)`
}

function changeTheme(){

    if(!darkTheme){
        body.style.backgroundColor = 'black';
        btn.innerHTML = 'Light Mode';
        digitalClock.style.color = 'white';
        displayDate.style.backgroundColor = 'white';
        displayDate.style.color = 'black'
        
        hands.forEach(hand=>{
            hand.style.backgroundColor = 'white';
        });
        
        darkTheme = true;
    }else{
        body.style.backgroundColor = 'white';
        btn.innerHTML = 'Dark Mode';
        digitalClock.style.color = 'black';
        displayDate.style.backgroundColor = 'black';
        displayDate.style.color = 'white'
        
        hands.forEach(hand=>{
            hand.style.backgroundColor = 'black';
        });

        darkTheme = false;
    }

}

setInterval(updateTime,1000);
btn.addEventListener('click',changeTheme);