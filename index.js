const alarmName = document.getElementById('alarmName');
const alarmTime = document.getElementById('alarmTime');
const alarmButton = document.getElementById('alarmButton');
let h,m,s,ah,am,as,animate;
let GlobalDate = new Date();


function init(){
    h = GlobalDate.getHours();
    m = GlobalDate.getMinutes();
    s = GlobalDate.getSeconds();
    clock();
}

function clock(){
    s++;
    if(s === 60){
        s = 0;
        m++;
        if(m === 60){
            m = 0;
            h++;
            if(h === 24){
                h = 0;
            }
        }
    }
    addZero('sec', s);
    addZero('min', m);
    addZero('hr', h);
    if (h === ah && m === am && s == as){
        console.log('alaaarm');
    }
    animate=setTimeout(clock,1000);

}

function addZero(id, val){
    if(val < 10){
        val = '0' + val;
    }

    document.getElementById(id).innerHTML = val ;
}

init();


function setTime() {
    if (document.getElementById('inputTime').value.length == 0){
        return ;
    }
    const valueSplitted = document.getElementById('inputTime').value.split(':');
    h = +valueSplitted[0];
    m = +valueSplitted[1];
    s = 0;
}

function setAlarm() {
    if (alarmTime.value.length == 0 && alarmName.value.length == 0){
        return ;
    }
    const alarmValue = alarmName.value;
    const valueSplitted = alarmTime.value.split(':');

    ah = +valueSplitted[0];
    am = +valueSplitted[1];
    as = '00';



}