
const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkBtn = document.querySelector("#check-btn")
const displayMsg = document.querySelector("#display-msg")





function userOutputValue(){
    let dobInput = dateOfBirth.value
    let luckyNumberInput = Number(luckyNumber.value)
    if( dobInput && luckyNumberInput){
     let birthDateVaule= dobNumberAdd(dobInput)
  
     if(birthDateVaule%luckyNumberInput===0){
         displayMsg.innerText = "you are lucky"
     }else{
         displayMsg.innerText = "you are unlucky"
     }
    } else{
        displayMsg.innerText = "please fill both input"
    }
    }


  
 function dobNumberAdd(addDobInput){
    let dobHyphenClear =  addDobInput.replaceAll("-", "") 
    let sum = 0
    
    for(i =0; i < addDobInput.length; i++){
        sum += Number(dobHyphenClear.charAt(i))
    }
   
   return sum

 }

checkBtn.addEventListener("click", function(){
  userOutputValue()
})
