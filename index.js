
const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkBtn = document.querySelector("#check-btn")
const displayMsg = document.querySelector("#display-msg")
const formEl = document.querySelector("#my-form")
const contentBox = document.querySelector(".content")




function userOutputValue() {
    let dobInput = dateOfBirth.value
    let luckyNumberInput = Number(luckyNumber.value)
    if (dobInput && luckyNumberInput) {
        let birthDateVaule = dobNumberAdd(dobInput)

        if (birthDateVaule % luckyNumberInput === 0) {
            displayMsg.innerText = "Yay! you are lucky 🤩"
            contentBox.style.padding = "1.9rem 3rem"
        } else {
            displayMsg.innerText = "Sorry but you are unlucky 😢"
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
