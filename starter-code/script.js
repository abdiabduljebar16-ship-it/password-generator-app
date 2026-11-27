const passwordlengthInput = document.querySelector("#length"); 
const passwordlength = document.querySelector(".passwordLength");
const copy = document.querySelector("#copy");
const generatedPassword = document.querySelector(".generatedPassword");
const includeLowercase = document.querySelector("#lowercase");
const includeUppercase = document.querySelector("#uppercase");
const includeNumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");
const btn = document.querySelector(".generate");
const box1 = document.querySelectorAll(".box1");
const box2 = document.querySelectorAll(".box2");
const box3 = document.querySelectorAll(".box3");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
let characters = "";

copy.addEventListener("click", async ()=>{
    await navigator.clipboard.writeText(generatedPassword.textContent);
})

btn.addEventListener("click", (event)=>{
    if(includeUppercase.checked && includeLowercase.checked && includeNumbers.checked && includeSymbols.checked){
        characters = uppercase + lowercase + symbols + numbers ;
        passwordGenerator(characters);
    } else if (includeUppercase.checked && includeLowercase.checked && includeNumbers.checked ){
        characters = uppercase + lowercase + numbers ;
        passwordGenerator(characters);
    } else if (includeUppercase.checked && includeLowercase.checked && includeSymbols.checked){
        characters = uppercase + lowercase + symbols ;
        passwordGenerator(characters);
    } else if (includeUppercase.checked && includeNumbers.checked && includeSymbols.checked) {
        characters = uppercase + numbers + symbols;
        passwordGenerator(characters);
    } else if (includeLowercase.checked && includeNumbers.checked && includeSymbols.checked){
        characters = lowercase + numbers + symbols ;
        passwordGenerator(characters);
    } else if (includeUppercase.checked && includeLowercase.checked) {
        characters = uppercase + lowercase;
        passwordGenerator(characters);
    } else if (includeUppercase.checked && includeNumbers.checked){
        characters = uppercase + numbers ;
        passwordGenerator(characters);
    } else if (includeUppercase.checked && includeSymbols.checked){
        characters = uppercase + symbols ;
        passwordGenerator(characters);
    } else if (includeLowercase.checked && includeNumbers.checked){
        characters = lowercase + numbers ;
        passwordGenerator(characters);
    } else if (includeLowercase.checked && includeSymbols.checked){
        characters = lowercase + symbols ;
        passwordGenerator(characters);
    } else if (includeNumbers.checked && includeSymbols.checked){
        characters = numbers + symbols ;
        passwordGenerator(characters);
    } else if (includeUppercase.checked){
        characters = uppercase ;
        passwordGenerator(characters);
    }  else if (includeLowercase.checked){
        characters = lowercase ;
        passwordGenerator(characters);
    }  else if (includeNumbers.checked){
        characters = numbers ;
        passwordGenerator(characters);
    }  else if (includeSymbols.checked){
        characters = symbols ;
        passwordGenerator(characters);
    }
    let checkUppercase = [...uppercase].some(character => characters.includes(character) );
    let checkLowercase = [...lowercase].some(character => characters.includes(character) );
    let checkNumbers = [...numbers].some(character => characters.includes(character) );
    let checkSymbols = [...symbols].some(character => characters.includes(character) );/*
    if(){

    }else if (){

    }else if (){

    } else {

    }
})
*/
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
        //console.log(passsword);
        generatedPassword.textContent = passsword;
    })
    }
