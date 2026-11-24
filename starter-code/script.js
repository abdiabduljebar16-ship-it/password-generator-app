const passwordlengthInput = document.querySelector("#length"); 
const passwordlength = document.querySelector(".passwordLength");
const copy = document.querySelector("#copy");
const generatedPassword = document.querySelector(".generatedPassword");
console.log(generatedPassword.textContent);
passwordlengthInput.addEventListener("input", (event)=>{
    event.preventDefault();
    passwordlength.textContent = Number(passwordlengthInput.value);
    console.log( Number(passwordlengthInput.value));
})
copy.addEventListener("click", async ()=>{
    await navigator.clipboard.writeText(generatedPassword.textContent);
})
