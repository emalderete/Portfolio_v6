const clock_container = document.querySelector('#clock');

function getTheTime(){
    const time = new Date();
    var time_hours = time.getHours();
    var time_minutes = time.getMinutes();

    if(time_hours < 10) {
        time_hours = '0' + time_hours;
    }

    if(time_minutes < 10) {
        time_minutes = '0' + time_minutes;
    }

    console.log('Actualización cada segundo');

    clock_container.innerHTML = `<h2>${time_hours}<span class="clock__seconds">:</span>${time_minutes}</h2>`;
}

getTheTime();

setInterval(getTheTime, 1000);