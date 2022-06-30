var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var adicionar = document.getElementById("adicionar");
var subtrair = document.getElementById("subtrair");

adicionar.addEventListener("click", increment);
subtrair.addEventListener("click", decrement);

function increment () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    colorRed();
    disableButton();
}

function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    colorRed();
    disableButton();
}

function colorRed() {
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = "red";
    }else if(currentNumber >=0){
        document.getElementById("currentNumber").style.color = "black"
    }
}

function disableButton(){
    if(currentNumber == -10){
        document.getElementById("subtrair").disabled = true;
    }else {
        document.getElementById("subtrair").disabled = false;
    }
    if(currentNumber == 10){
        document.getElementById("adicionar").disabled = true;
    }else {
        document.getElementById("adicionar").disabled = false;
    }
}