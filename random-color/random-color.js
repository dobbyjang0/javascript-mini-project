const $colorBtn = document.querySelector(".colorBtn");
const $body = document.querySelector("body");

$colorBtn.addEventListener("click", () => {
    const $newCircle = document.createElement("div");
    const randomColor = getRandomColor();

    $newCircle.classList.add("circle");
    $newCircle.style.backgroundColor = randomColor;

    $body.appendChild($newCircle);

    $colorBtn.innerHTML = `Change<br/>${getRandomWord()}`;

    setTimeout(() => {
        $body.style.backgroundColor = randomColor;
        $newCircle.remove();
    }, 3000);
});

function getRandomColor() {
    const randomNum = () => ~~(Math.random() * 256);
    return `rgba(${randomNum()},${randomNum()},${randomNum()})`;
}

function getRandomWord() {
    const wordArr = [
        "Color",
        "Future",
        "Yourself",
        "Reality",
        "World",
        "Mind",
        "Consciousness",
        "Time",
        "Space",
        "Brain",
        "Structure",
        "Soul",
        "Mental",
        "Spirit",
        "Now",
        "Present",
        "Past",
        "History",
        "Zeitgeist",
        "Zen",
        "Emptiness",
        "Dream",
        "Heaven",
        "Happiness",
        "Emotion",
        "Life",
        "Society",
        "Id",
        "Ego",
        "Identity",
        "Love",
        "Apathy",
        "Family",
        "Infinity",
        "Trauma",
        "Nothing",
        "All",
        "Meaningless",
        "Blank",
        "Futility",
        "Lies",
        "Shame",
        "Self-Worth",
        "Fear",
        "Loneliness",
        "Failure",
        "Result",
        "Honor",
        "Hope",
        "Guilty",
        "Alienation",
        "Wish",
        "Substance",
        "Success",
    ];

    return wordArr[~~(Math.random() * wordArr.length)];
}