const $rotator = document.querySelector(".tile__rotator");
const $light = document.querySelector(".tile__light");
// const $test = document.querySelector("#testButton");

function isConnected() {
    let style = window.getComputedStyle($rotator);
    let transformString =
        style["-webkit-transform"] || style["-moz-transform"] || style["transform"];

    if (!transformString || transformString == "none") {
        return true;
    }

    let startIndex = transformString.indexOf("(");
    let transformValue = +transformString.slice(startIndex + 1, -1).split(",")[1];

    return Math.abs(transformValue) < 0.15;
}

setInterval(() => {
    if (isConnected()) {
        document.body.style.backgroundColor = "#A8D1D1";
        $light.classList.add("tile__light--on");
    } else {
        document.body.style.backgroundColor = "#191d20";
        $light.classList.remove("tile__light--on");
    }
}, 1000);

// $test.addEventListener("click", () => {
//     alert(isConnected());
// });