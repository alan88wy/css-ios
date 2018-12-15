function getTodaysDate() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var hour = today.getHours();
    var minute = today.getMinutes();

    if (day < 10) {
        day = '0' + day
    }

    if (month < 10) {
        month = '0' + month
    }

    if (hour < 10) {
        hour = '0' + hour
    }

    if (minute < 10) {
        minute = '0' + minute
    }

    today = day + '/' + month + '/' + year + " " + hour + ":" + minute;

    return today
}

// var today = getTodaysDate();
var today = document.getElementById('status-date');
today.innerText = getTodaysDate();
