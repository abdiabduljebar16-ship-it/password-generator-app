const passwordlengthInput = document.querySelector("#length"); 
const passwordlength = document.querySelector(".passwordLength");
const copy = document.querySelector("#copy");
const generatedPassword = document.querySelector(".generatedPassword");
const includeLowercase = document.querySelector("#lowercase");
const includeUppercase = document.querySelector("#uppercase");
const includeNumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");
console.log(generatedPassword.textContent);
passwordlengthInput.addEventListener("input", (event)=>{
    event.preventDefault();
    passwordlength.textContent = Number(passwordlengthInput.value);
    console.log( Number(passwordlengthInput.value));
})
copy.addEventListener("click", async ()=>{
    await navigator.clipboard.writeText(generatedPassword.textContent);
})
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword(length) {
    let characters = "";

    if (includeLowercase.checked) {
        characters += lowercase;
    }

    if (includeUppercase.checked) {
        characters += uppercase;
    }

    if (includeNumbers.checked) {
        characters += numbers;
    }

    if (includeSymbols.checked) {
        characters += symbols;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(
            Math.random() * characters.length
        );

        password += characters[randomIndex];
    }

    return password;
}