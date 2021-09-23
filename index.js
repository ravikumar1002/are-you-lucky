
const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkBtn = document.querySelector("#check-btn")
const displayMsg = document.querySelector("#display-msg")
const formEl = document.querySelector("#my-form")
const contentBox = document.querySelector(".content")
const imgBackground = document.querySelector(".img-background")
const pageContent = document.querySelector(".page-content")




function userOutputValue() {
    let dobInput = dateOfBirth.value
    let luckyNumberInput = Number(luckyNumber.value)
    if (dobInput && luckyNumberInput) {
        let birthDateVaule = dobNumberAdd(dobInput)

        if (birthDateVaule % luckyNumberInput === 0) {
            pageContent.style.background = "none"
            imgBackground.classList.add("img-background-add")
            displayMsg.innerText = "🎉🎊 your birthday is lucky🤩"
            contentBox.style.padding = "1.9rem 3rem"
        } else {
            pageContent.style.background = "block"
            imgBackground.classList.remove("img-background-add")
            displayMsg.innerText = "😭😱 your birthday is NOT lucky, so sad 😢"
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
