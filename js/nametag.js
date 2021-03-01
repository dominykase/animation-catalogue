const container = document.getElementById("container");
const textLarge = document.getElementById("textLarge");
const textSmall = document.getElementById("textSmall");

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
console.log(vw + "x" + vh);

Velocity(container, { width: "5%", height: "20%" }, { duration: 300, easing: "ease-out", delay: 100});
Velocity(container, { width: "10%", height: "7%", borderRadius: "0" }, { duration: 250, easing: "linear"});
Velocity(container, { width: "100%" }, { duration: 600, easing: "ease-out"});
Velocity(container, { height: "100%"}, { duration: 1000, easing: "ease-out"});

if (vw >= 420) {
    Velocity(textLarge, { display: "inline", opacity: 1, fontSize: "40px"}, { duration: 400, easing: "ease-out", delay: 1850});
    Velocity(textSmall, { display: "inline", opacity: 1, fontSize: "25px"}, { duration: 400, easing: "ease-out", delay: 1850});
} else {
    Velocity(textLarge, { display: "inline", opacity: 1, fontSize: "10vw"}, { duration: 400, easing: "ease-out", delay: 1850});
    Velocity(textSmall, { display: "inline", opacity: 1, fontSize: "6vw"}, { duration: 400, easing: "ease-out", delay: 1850});
}
