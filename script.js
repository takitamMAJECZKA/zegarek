
let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hour = document.getElementById('hour');

let sec_nums = document.querySelectorAll('.sec-num'); 
let min_nums = document.querySelectorAll('.min-num'); 
let hour_nums = document.querySelectorAll('.hour-num'); 

let dayElem = document.querySelector('#day')
let monthElem = document.querySelector('#month')
let yearElem = document.querySelector('#year')

window.onload = start();


function start(){
    updateTime()
    updateDate()
}

function updateTime(){
    let time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();

    sec.style.transform = `rotate(${seconds * (360/60)}deg)`;
    min.style.transform = `rotate(${minutes * (360/60)}deg)`;
    hour.style.transform = `rotate(${hours * (360/12)}deg)`;

    for(elem of sec_nums){
        elem.style.transform = `rotate(${-seconds * (360/60)}deg`
        elem.innerHTML = seconds;
    }
    for(elem of min_nums){
        elem.style.transform = `rotate(${-minutes * (360/60)}deg`
        elem.innerHTML = minutes;
    }
    for(elem of hour_nums){
        elem.style.transform = `rotate(${-hours * (360/12)}deg`
        elem.innerHTML = hours;
    }
    setTimeout(updateTime, 1000);
}


function updateDate(){
    let date = new Date;
    let month
    let dayslong
    switch(date.getMonth()){
        case 0:
            month = 'Styczeń'
            dayslong = 31 
            break;
        case 1:
            month = 'Luty'
            if (date.getFullYear()%4 == 0){
                dayslong = 29
            }else{
                dayslong = 28
            }
            break;
        case 2:
            month = 'Marzec'
            dayslong = 31
            break;
        case 3:
            month = 'Kwiecień'
            dayslong = 30
            break;
        case 4:
            month = 'Maj'
            dayslong = 31
            break;
        case 5:
            month = 'Czerwiec'
            dayslong = 30
            break;
        case 6:
            month = 'Lipec'
            dayslong = 31
            break;
        case 7:
            month = 'Sierpień'
            dayslong = 31
            break;
        case 8:
            month = 'Wrzesień'
            dayslong = 30
            break;
        case 9:
            month = 'Październik'
            dayslong = 31
            break;
        case 10:
            month = 'Listopad'
            dayslong = 30
            break;
        case 11:
            month = 'Grudzień'
            dayslong = 31
            break;
    }
    dayElem.innerHTML = `${date.getDate()} `
    monthElem.innerHTML = `${month} `
    yearElem.innerHTML = `${date.getFullYear()}`
    dayElem.style.color = `rgba(0, 0, 0, ${1 - (date.getHours()-1)/24})`
    monthElem.style.color = `rgba(0, 0, 0,  ${1 - (date.getDate()-1)/dayslong})`
    yearElem.style.color = `rgba(0, 0, 0, ${1 - (date.getMonth()-1)/12})`
    setTimeout(updateDate, 1000)
}