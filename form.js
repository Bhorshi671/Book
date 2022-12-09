const form = document.querySelector("form")
eName = form.querySelector(".name"),
eInput = eField.querySelector("input"),
pPass = form.querySelector(".password"),
pInput = pField.querySelector("input");
form.onsubmit = (e)=>{
    e.preventDefault();
    (eInput.value == "") ? eName.classList.add("shake", "error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();