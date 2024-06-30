function Day() {
    const date = new Date();
    let dayOfTheWeek = new Array(7);
    dayOfTheWeek[0] = "Sunday"
    dayOfTheWeek[1] = "Monday"
    dayOfTheWeek[2] = "Tuesday"
    dayOfTheWeek[3] = "Wednesday"
    dayOfTheWeek[4] = "Thursday"
    dayOfTheWeek[5] = "Friday"
    dayOfTheWeek[6] = "Saturday"
    document.querySelector("[data-testid='currentDay']").innerHTML = dayOfTheWeek[date.getDay()];
}
Day();

function currentTimeUTC() {
    let d = new Date();
    let utcTime = d.toUTCString();
    document.querySelector("[data-testid='currentTimeUTC']").innerHTML = utcTime;
}
currentTimeUTC();
setInterval(currentTimeUTC, 1000);