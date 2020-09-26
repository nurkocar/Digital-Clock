setInterval(startTime, 1000);
function startTime(){
    var today = new Date();
    // US English uses 12-hour time with AM/PM
    document.getElementById('digitalClock').innerHTML = today.toLocaleTimeString('en-US');
    // This is for the date
    document.getElementById("date").innerHTML = today.toLocaleDateString();
}