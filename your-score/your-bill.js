const $sliderInput = document.querySelector(".slider__input");
const $sliderNumber = document.querySelector(".slider__number");

const $countInput = document.querySelector(".count__input");
const $plusButton = document.querySelector(".plus__button");
const $minusButton = document.querySelector(".minus__button");

$sliderInput.addEventListener("input", () => {
    let value = $sliderInput.value;

    $sliderInput.style.background = `linear-gradient(to right, #a899fe ${value}%, #e0e0e0 ${value}%)`;
    $sliderNumber.firstElementChild.innerHTML = value;
    $sliderNumber.style.left = `${value}%`;
    $sliderNumber.classList.add("show");
});

$sliderInput.addEventListener("focusout", () => {
    $sliderNumber.classList.remove("show");
});

$plusButton.addEventListener("click", () => {
    $countInput.value++;
});

$minusButton.addEventListener("click", () => {
    $countInput.value--;
});