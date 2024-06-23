const clock_container = document.querySelector('#clock');

function getTheTime(){
    const date = new Date();
    const options = {
        timeZone : 'America/Argentina/Buenos_Aires',
        hour : 'numeric',
        minute : 'numeric',
        hour12 : false
    }
    const formatter = new Intl.DateTimeFormat('es-AR', options);
    const time = formatter.formatToParts(date);
    console.log(time);

    if(time[0] < 10) {
        time_hours = '0' + time_hours;
    }

    if(time[2] < 10) {
        time_minutes = '0' + time_minutes;
    }

    clock_container.innerHTML = `<h2>${time[0].value}<span class="clock__seconds">${time[1].value}</span>${time[2].value}</h2><h5>Argentina time</h5>`;
}

getTheTime();

setInterval(getTheTime, 1000);