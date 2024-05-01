// Get the current time from the user's device
var currentTime = new Date();
var h = currentTime.getHours();
var m = currentTime.getMinutes();
var s = currentTime.getSeconds();

// Determine whether it's AM or PM
var diem = "";
if (h == 0) {
    h = 12;
} else if (h > 12) {
    h = h - 12;
    diem = "";
}

// Add leading zeros to hours, minutes, and seconds if needed
if (h < 10) {
    h = "0" + h;
}
if (m < 10) {
    m = "0" + m;
}
if (s < 10) {
    s = "0" + s;
}

// Get the clock container element
var myClock = document.getElementById('clockDisplay');

// Format the time and display it in the clock container
myClock.textContent = h + ":" + m + ":" + s + " " + diem;

// Update the clock every 1000 milliseconds (1 second)
setTimeout(renderTime, 1000);

function renderTime() {
    // Get the current time again
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();

    // Determine whether it's AM or PM
    var diem = "";
    if (h == 0) {
        h = 12;
    } else if (h > 12) {
        h = h - 12;
        diem = "";
    }

    // Add leading zeros to hours, minutes, and seconds if needed
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    // Update the clock display
    myClock.textContent = h + ":" + m + ":" + s + " " + diem;

    // Set a timeout to update the clock again after 1000 milliseconds
    setTimeout(renderTime, 1000);
}
