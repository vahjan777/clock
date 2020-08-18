const time = document.getElementById('time');



function showTime() {
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

showTime()

function setTime() {

    const value = document.getElementById('inputTime').value;
    const valueSplited = value.split(':');


}