let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let green_walk = document.getElementById("green-walk");
let red_walk = document.getElementById("red-walk");
let i = 0;
let car_1 = document.getElementById("car-1");
let car_2 = document.getElementById("car-2")
let walk = document.getElementById("walk");
function change() {
    i++;
    red.style.backgroundColor = "rgb(50, 0, 0)";
    green.style.backgroundColor = "rgb(0, 50, 0)";
    green_walk.style.backgroundColor = "rgb(0, 50, 0)";
    yellow.style.backgroundColor = "rgb(50, 50, 0)";
    red_walk.style.backgroundColor = "rgb(50, 0, 0)";
    if (i%60 <= 20) {
        setTimeout(function(){
            car_2.style.top = "100vh"
            car_1.style.top = "-20vh"
            walk.style.left = `${62.25 - (i%60)*1.25 - 5}%`
            
        },1);
        car_1.style.transition = "0s"
        car_2.style.transition = "0s"
        car_2.style.top = "120vh"
        car_1.style.top = "-30vh"
        walk.style.transition = ".1s"
        red.style.backgroundColor = "red"
        green_walk.style.backgroundColor = "green"
    }
    else if (i%60 <= 40) {
        yellow.style.backgroundColor = "yellow"
        red_walk.style.backgroundColor = "red"
        walk.style.transition = "0s"
        walk.style.left = "62.25%"
    }
    else{
        green.style.backgroundColor = "green"
        red_walk.style.backgroundColor = "red"
        car_1.style.top = `${(i%60 - 40)*10-20}vh`
        car_2.style.top = `${(60 - i%60)*10 - 100}vh`
    }
}
setInterval(change, 100)
