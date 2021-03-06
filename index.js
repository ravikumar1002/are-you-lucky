
const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkBtn = document.querySelector("#check-btn")
const displayMsg = document.querySelector("#display-msg")
const formEl = document.querySelector("#my-form")
const contentBox = document.querySelector(".content")
const imgBackground = document.querySelector(".img-background")
const pageContent = document.querySelector(".page-content")

let  today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); 
const yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
console.log( today)

dateOfBirth.setAttribute("max", `${today}`)

function userOutputValue() {

    let dobInput = dateOfBirth.value
    let luckyNumberInput = Number(luckyNumber.value)
    if (dobInput && luckyNumberInput) {
        let birthDateVaule = dobNumberAdd(dobInput)

        if (birthDateVaule % luckyNumberInput === 0) {
            pageContent.style.background = "none"
            imgBackground.classList.add("img-background-add")
            displayMsg.innerText = "ðð your birthday is luckyð¤©"
            contentBox.style.padding = "1.9rem 3rem"
        } else {
            pageContent.style.background = "block"
            imgBackground.classList.remove("img-background-add")
            displayMsg.innerText = "ð­ð± your birthday is NOT lucky, so sad ð¢"
            contentBox.style.padding = "1.9rem 3rem"
        }
    }
}



function dobNumberAdd(addDobInput) {
    let dobHyphenClear = addDobInput.replaceAll("-", "")
    let sum = 0

    for (i = 0; i < addDobInput.length; i++) {
        sum += Number(dobHyphenClear.charAt(i))
    }

    return sum

}

formEl.addEventListener("submit", function (e) {

    e.preventDefault()
})


checkBtn.addEventListener("click", function () {

    userOutputValue()
})
