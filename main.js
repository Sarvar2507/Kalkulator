const inputCalc = document.querySelector(".account")
const resultClac = document.querySelector(".result")

function input(i) {
    inputCalc.value = inputCalc.value + i
}

function result () {
    if(eval(inputCalc.value) == undefined) {
        resultClac.value = "0.00"
        inputCalc.value = "0.00"
    } if (eval(inputCalc.value) == Infinity) {
        resultClac.value = ""
        inputCalc.value = "eror"
    }

    resultClac.value = eval(inputCalc.value)
    inputCalc.value = eval(inputCalc.value)
} 

function backspace() {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length-1)
}

function reset() {
    resultClac.value = ""
    inputCalc.value = ""
}