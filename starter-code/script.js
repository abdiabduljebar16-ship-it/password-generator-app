const passwordlengthInput = document.querySelector("#length"); 
const passwordlength = document.querySelector(".passwordLength");
const copy = document.querySelector("#copy");
const generatedPassword = document.querySelector(".generatedPassword");
const includeLowercase = document.querySelector("#lowercase");
const includeUppercase = document.querySelector("#uppercase");
const includeNumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");
const btn = document.querySelector(".generate");

copy.addEventListener("click", async ()=>{
    await navigator.clipboard.writeText(generatedPassword.textContent);
})
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
let characters = "";

btn.addEventListener("click", (event)=>{
    if(includeUppercase.checked && includeLowercase.checked && includeNumbers.checked && includeSymbols.checked){
        characters = uppercase + lowercase + symbols + numbers ;
        console.log(characters);
        passwordGenerator(characters);
    } else if (includeUppercase.checked && includeLowercase.checked && includeNumbers.checked ){
        characters = uppercase + lowercase + numbers ;
        console.log(characters);
        passwordGenerator(characters);
    } else if (includeUppercase.checked && includeLowercase.checked && includeSymbols.checked){
        characters = uppercase + lowercase + symbols ;
        console.log(characters);
        passwordGenerator(characters);
    } else if (includeUppercase.checked && includeNumbers.checked && includeSymbols.checked) {
        characters = uppercase + numbers + symbols;
        console.log(characters);
        passwordGenerator(characters);
    } else if (includeLowercase.checked && includeNumbers.checked && includeSymbols.checked){
        characters = lowercase + numbers + symbols ;
        console.log(characters);
        passwordGenerator(characters);
    } else if (includeUppercase.checked && includeLowercase.checked) {
        characters = uppercase + lowercase;
        console.log(characters);
        passwordGenerator(characters);
    } else if (includeUppercase.checked && includeNumbers.checked){
        characters = uppercase + numbers ;
        console.log(characters);
        passwordGenerator(characters);
    } else if (includeUppercase.checked && includeSymbols.checked){
        characters = uppercase + symbols ;
        console.log(characters);
        passwordGenerator(characters);
    } else if (includeLowercase.checked && includeNumbers.checked){
        characters = lowercase + numbers ;
        console.log(characters);
        passwordGenerator(characters);
    } else if (includeLowercase.checked && includeSymbols.checked){
        characters = lowercase + symbols ;
        console.log(characters);
        passwordGenerator(characters);
    } else if (includeNumbers.checked && includeSymbols.checked){
        characters = numbers + symbols ;
        console.log(characters);
        passwordGenerator(characters);
    } else if (includeUppercase.checked){
        characters = uppercase ;
        console.log(characters);
        passwordGenerator(characters);
    }  else if (includeLowercase.checked){
        characters = lowercase ;
        console.log(characters);
        passwordGenerator(characters);
    }  else if (includeNumbers.checked){
        characters = numbers ;
        console.log(characters);
        passwordGenerator(characters);
    }  else if (includeSymbols.checked){
        characters = symbols ;
        console.log(characters);
        passwordGenerator(characters);
    }
    
})

async function passwordGenerator (characters){
    passwordlengthInput.addEventListener("input", ()=>{
        const length = Number(passwordlengthInput.value);
        passwordlength.textContent = length;
        let passsword = "";
        for (let index = 0; index < length; index++) {
            const randomIndex = Math.floor(Math.random()*characters.length);
            const character = characters[randomIndex];
            passsword += character;
        }
        console.log(passsword);
        generatedPassword.textContent = passsword;
    })
    }