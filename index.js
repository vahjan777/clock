function showTime() {
    const alarmClock = document.getElementById('alarmClock');
    let alCl = '<div class="box">';

    let clock = `<div class = 'container'>`;
    let clockContainer = `<div> <h3 id = "time"> </h3>  </div>`;
    let timeMenu = `<div> <p>Start Time</p> <input  id = "inputTime" type = "time"><button id = "setButton" onClick = "timeSet()"> Start </button> </div>`;
    clock = clock + clockContainer + timeMenu + `</div>`;
    
    let alarm = `<div class = 'container'>`;
    let alarmMenu = `<p>Name</p><input><p>time</p><input><button>Create</button>`
    alarm = alarm + alarmMenu + "</div>";

    alCl = alCl + clock + alarm + '</div>';
    alarmClock.innerHTML = alCl;

    const time = document.getElementById('time');
    setInterval(() => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        time.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);

    }, 1000);
    function addZero(time) {
        return (time < 10) ? "0" + time : time;
    }
}
function timeSet() {

    const value = document.getElementById('inputTime').value;
    const valueSplit = value.split(':');
    
    console.log(valueSplit);
}

showTime()