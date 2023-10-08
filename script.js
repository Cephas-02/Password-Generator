const lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*():;=+-_'[]\|?/.,<>`~{}";

const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

generateBtn.addEventListener('click', () => {

    const length = lengthEl.value;
    let charcters = "";
    let password = "";

    if (lowercaseEl.checked) {
        charcters += lowercaseletters;
    }

    if (uppercaseEl.checked) {
        charcters += uppercaseletters;
    }

    if (numberEl.checked) {
        charcters += numbers;
    }

    if (symbolEl.checked) {
        charcters += symbols;
    }

    for (let i = 0; i < length; i++) {
        
        password += charcters.charAt(Math.floor(Math.random() * charcters.length));

        passwordEl.value = password;
        
    }

});