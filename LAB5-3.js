function NightFunction(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("h1").innerHTML = "GOOD EVENING";
    document.getElementById("h2").innerHTML = "This is night time!";
    document.getElementById("a6").innerHTML = "day mode.";
    document.getElementById("button").innerHTML = "Activate the day mode";
    const span = document.querySelector('span.day');
    span.classList.remove('day');
    span.classList.add('night');
    document.getElementById("button").onclick = DayFunction;
}

function DayFunction(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("h1").innerHTML = "GOOD MORNING";
    document.getElementById("h2").innerHTML = "This is day time!";
    document.getElementById("a6").innerHTML = "night mode.";
    document.getElementById("button").innerHTML = "Activate the night mode";
    const span = document.querySelector('span.night');
    span.classList.remove('night');
    span.classList.add('day');
    document.getElementById("button").onclick = NightFunction;
}