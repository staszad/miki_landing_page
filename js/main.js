import anime from "./anime-master/lib/anime.es.js";

let elements = document.getElementsByClassName("circle-abs");
console.log(elements);
let path = anime.path(".motion-path-demo path");

function randomValues() {
    anime({
        targets: elements,
        translateX: function () {
            return anime.random(0, 50);
        },
        translateY: function () {
            return anime.random(0, 50);
        },
        easing: "easeInOutSine",
        duration: function () {
            return anime.random(400, 2000);
        },
        complete: randomValues,
    });
}
randomValues();
