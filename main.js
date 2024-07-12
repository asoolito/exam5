const userForm = document.querySelector(".form")
const userInput = document.querySelector(".Input")
const userInput2 = document.querySelector(".Input2")
const userBtn = document.querySelector(".Btn");
const userBtn2 = document.querySelector(".questions");
const userList = document.querySelector(".list");

userBtn.addEventListener("click",(evt)=>{
    evt.preventDefault();

    if (userInput.value == "sigma" && userInput2.value == "sigma") {
        confirm("Xush kelibsiz")
    }else{
        alert("yo'qol chiqibket uyalmagan uyatsiz")
    }
    userInput.value = ""    
    userInput2.value = ""

})
    userBtn2.addEventListener("click", (evt) => {
        evt.preventDefault();
        let userSorov = prompt("Savolingizni kiriting");
        let userSavol = document.createElement("h2");
        userSavol.textContent = "Sizning savolingiz: " + userSorov;
        userSavol.className  = "Savol"
        userList.appendChild(userSavol);
    });
    