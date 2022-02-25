//Remained on the secondary education certificate exams (BAC)
//1000 milliseconds =1 Second

let countDownDate = new Date('June 20,2022 23:59:59').getTime();

let counter = setInterval(()=>{
    //Get Date Now
    let DateNow = new Date().getTime();
    let date = new Date();

    //Find the Date Between Now And  Countdown Date
    let DateDiff = countDownDate - DateNow;
    //Get Time units
    let Days = Math.floor(DateDiff / (1000 * 60 * 60 * 24 ) )
    let hours = Math.floor (DateDiff % (1000 * 60 * 60 * 24 ) /(1000 * 60 * 60))
    let minuntes =  Math.floor( DateDiff % (1000 * 60 * 60  ) /(1000 * 60))
    let seceods =  Math.floor( DateDiff % (1000 * 60  ) /(1000))
    // let allTime =  Days  +' : '+hours + ' : ' + minuntes + ' : ' + seceods
document.getElementById("days").innerHTML = Days  < 10 ?`0${Days}`: Days 
document.getElementById("hours").innerHTML = hours  < 10 ?`0${hours}`: hours   
document.getElementById("minuntes").innerHTML =  minuntes < 10 ?`0${minuntes}`: minuntes
document.getElementById("seconds").innerHTML = seceods < 10 ?`0${seceods}`: seceods; 
    document.getElementById("date").innerHTML = date
},1000)

