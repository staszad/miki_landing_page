import anime from "./anime-master/lib/anime.es.js";

let elements = document.getElementsByClassName("circle-abs");
console.log(elements);
var tl = anime.timeline({
    easing: "easeOutExpo",
});

// Add children
tl.add(
    {
        targets: "#c-red-1",
        translateX: function () {
            return anime.random(0, 50);
        },
        translateY: function () {
            return anime.random(0, 50);
        },
        duration: function () {
            return anime.random(400, 2000);
        },
        loop: true,
    },
    0
)
    .add(
        {
            targets: "#c-yellow-1",
            translateX: 250,
            duration: 2000,
        },
        0
    )
    .add(
        {
            targets: "#c-black-1",
            translateX: 250,
            duration: 1000,
        },
        0
    );

// function randomValues() {
anime({
    targets: "#c-red-1",
    easing: "linear",
    translateX: function () {
        return anime.random(0, 50);
    },
    translateY: function () {
        return anime.random(0, 50);
    },
    duration: function () {
        return anime.random(400, 2000);
    },
    direcrtion: "alternate",
    loop: true,
});
// }
// randomValues();
