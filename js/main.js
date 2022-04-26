import anime from "./anime-master/lib/anime.es.js";

let elements = document.getElementsByClassName("circle-abs");
console.log(elements);

const maxLen = 50;
const minTime = 1000;
const maxTime = 2000;
const easing = "easeInOutSine";
// const easing = "cubicBezier(0.265, 0.425, 0.830, 0.430)";

function randomValuesRed() {
    anime({
        targets: ["#c-red-1", "#c-red-2", "#c-red-3", "#c-red-4"],
        easing: easing,
        translateX: function () {
            return anime.random(0, maxLen);
        },
        translateY: function () {
            return anime.random(0, maxLen);
        },
        duration: function () {
            return anime.random(minTime, maxTime);
        },
        complete: randomValuesRed,
    });
}
function randomValuesBlack() {
    anime({
        targets: ["#c-black-1", "#c-black-2", "#c-black-3", "#c-black-4"],
        easing: easing,
        translateX: function () {
            return anime.random(0, maxLen);
        },
        translateY: function () {
            return anime.random(0, maxLen);
        },
        duration: function () {
            return anime.random(minTime, maxTime);
        },
        complete: randomValuesBlack,
    });
}
function randomValuesYellow() {
    anime({
        targets: ["#c-yellow-1", "#c-yellow-2", "#c-yellow-3", "#c-yellow-4"],
        easing: easing,
        translateX: function () {
            return anime.random(0, maxLen);
        },
        translateY: function () {
            return anime.random(0, maxLen);
        },
        duration: function () {
            return anime.random(minTime, maxTime);
        },
        complete: randomValuesYellow,
    });
}
randomValuesRed();
randomValuesBlack();
randomValuesYellow();
