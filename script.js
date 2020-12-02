// Los Angeles Time
setInterval(function () {
    let date = new Date();
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    let offset = -8;
    let nd = new Date(utc + (3600000 * offset));

    let hr = nd.getHours();
    let min = nd.getMinutes();
    let sec = nd.getSeconds();

    const HOURHAND = document.querySelector("#hour");
    const MINUTEHAND = document.querySelector("#minute");
    const SECONDHAND = document.querySelector("#second");

    let hrPosition = (hr * 360/12) + (min*(360/60)/12);
    let minPosition = (min * 360/60) + (sec * (360/60)/60);
    let secPosition = sec * 360/60;
    HOURHAND.style.transform  = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

// AM/PM feature w/ color change added on
    if (hr >= 12) {
        document.getElementById('la-am-pm').innerHTML = "PM";
        document.getElementById('la-am-pm').style.color = "#000000";
    } else {
        document.getElementById('la-am-pm').innerHTML = "AM";
        document.getElementById('la-am-pm').style.color = "#F8D203";
    };

}, 1000);

// New York Time
setInterval(function () {
    let date = new Date();
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    let offset = -5;
    let nd = new Date(utc + (3600000 * offset));

    let newhr = nd.getHours();
    let newmin = nd.getMinutes();
    let newsec = nd.getSeconds();

    const NEWHOUR = document.querySelector("#nyhour");
    const NEWMINUTE = document.querySelector("#nyminute");
    const NEWSECOND = document.querySelector("#nysecond");

    let newhrPosition = (newhr * 360/12) + (newmin*(360/60)/12);
    let newminPosition = (newmin * 360/60) + (newsec * (360/60)/60);
    let newsecPosition = newsec * 360/60;
    NEWHOUR.style.transform  = "rotate(" + newhrPosition + "deg)";
    NEWMINUTE.style.transform = "rotate(" + newminPosition + "deg)";
    NEWSECOND.style.transform = "rotate(" + newsecPosition + "deg)";

    if (newhr >= 12) {
        document.getElementById('ny-am-pm').innerHTML = "PM";
        document.getElementById('ny-am-pm').style.color = "#000000";
    } else {
        document.getElementById('ny-am-pm').innerHTML = "AM";
        document.getElementById('ny-am-pm').style.color = "#F8D203";
    };

}, 1000);

// Paris Time
setInterval(function () {
    let date = new Date();
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    let offset = +1;
    let nd = new Date(utc + (3600000 * offset));

    let parishr = nd.getHours();
    let parismin = nd.getMinutes();
    let parissec = nd.getSeconds();

    const PARISHOUR = document.querySelector("#paris-hour");
    const PARISMINUTE = document.querySelector("#paris-minute");
    const PARISSECOND = document.querySelector("#paris-second");

    let parishrPosition = (parishr * 360/12) + (parismin*(360/60)/12);
    let parisminPosition = (parismin * 360/60) + (parissec * (360/60)/60);
    let parissecPosition = parissec * 360/60;
    PARISHOUR.style.transform  = "rotate(" + parishrPosition + "deg)";
    PARISMINUTE.style.transform = "rotate(" + parisminPosition + "deg)";
    PARISSECOND.style.transform = "rotate(" + parissecPosition + "deg)";

    if (parishr >= 12) {
        document.getElementById('paris-am-pm').innerHTML = "PM";
        document.getElementById('paris-am-pm').style.color = "#000000";
    } else {
        document.getElementById('paris-am-pm').innerHTML = "AM";
        document.getElementById('paris-am-pm').style.color = "#F8D203";
    };

}, 1000);

// Seoul Time
setInterval(function () {
    let date = new Date();
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    let offset = +9;
    let nd = new Date(utc + (3600000 * offset));

    let seoulhr = nd.getHours();
    let seoulmin = nd.getMinutes();
    let seoulsec = nd.getSeconds();

    const SEOULHOUR = document.querySelector("#seoul-hour");
    const SEOULMINUTE = document.querySelector("#seoul-minute");
    const SEOULSECOND = document.querySelector("#seoul-second");

    let seoulhrPosition = (seoulhr * 360/12) + (seoulmin*(360/60)/12);
    let seoulminPosition = (seoulmin * 360/60) + (seoulsec * (360/60)/60);
    let seoulsecPosition = seoulsec * 360/60;
    SEOULHOUR.style.transform  = "rotate(" + seoulhrPosition + "deg)";
    SEOULMINUTE.style.transform = "rotate(" + seoulminPosition + "deg)";
    SEOULSECOND.style.transform = "rotate(" + seoulsecPosition + "deg)";

    if (seoulhr >= 12) {
        document.getElementById('seoul-am-pm').innerHTML = "PM";
        document.getElementById('seoul-am-pm').style.color = "#000000";
    } else {
        document.getElementById('seoul-am-pm').innerHTML = "AM";
        document.getElementById('seoul-am-pm').style.color = "#F8D203";
    };

}, 1000);