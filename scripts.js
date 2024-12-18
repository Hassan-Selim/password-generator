// elements //

let passLength = document.getElementById("pass-length");
let lengthInp = document.querySelector(".character-length input");

let uppercaseInp = document.getElementById("uppercase");
let lowercaseInp = document.getElementById("lowercase");
let numbersInp = document.getElementById("numbers");
let symbolsInp = document.getElementById("symbols");

let passwordHtml = document.querySelector(".password");
let generateBtn = document.querySelector(".generate-btn");
let level = document.querySelector(".level h1");
let blocks = document.getElementById("blocks");

let copy = document.querySelector(".fa-copy");
let copid = document.querySelector(".fa-square-check");

let welcomePage = document.querySelector(".welcome");

let body = document.getElementById("body")

// options //
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const sympols = "!@#$%^.&*";

// functions //

lengthInp.addEventListener("input", function () {
  passLength.innerHTML = this.value;
});
// [ randum index]
function rnd(n) {
  return Math.floor(Math.random() * n);
}

// [ generate ]

function generate(length) {
  let pass = "";

  while (pass.length < length) {
    if (uppercaseInp.checked && pass.length < length) {
      pass += uppercase[rnd(uppercase.length)];
    }
    if (lowercaseInp.checked && pass.length < length) {
      pass += lowercase[rnd(lowercase.length)];
    }
    if (numbersInp.checked && pass.length < length) {
      pass += numbers[rnd(numbers.length)];
    }
    if (symbolsInp.checked && pass.length < length) {
      pass += sympols[rnd(sympols.length)];
    }
  }
  return pass;
}
generateBtn.addEventListener("click", function () {
  passwordHtml.innerHTML = generate(lengthInp.value);
  level.innerHTML = checkStrength();
  blocks.classList = checkStrength();
});

// [ check strength ]
function checkStrength() {
  const lenght = lengthInp.value;
  let checked = 0;
  if (uppercaseInp.checked) checked++;
  if (lowercaseInp.checked) checked++;
  if (numbersInp.checked) checked++;
  if (symbolsInp.checked) checked++;

  if (lenght < 8) return "easy";
  else if (lenght >= 8 && checked == 1) return "easy";
  else if (lenght >= 8 && checked > 1 && checked < 4) return "medium";
  else if (lenght >= 8 && checked == 4) return "hard";
}
// [ coby ]

copy.addEventListener("click", function () {
  const text = passwordHtml.innerHTML;
  navigator.clipboard.writeText(text);
  window.alert("Password Copid");
});
