function add(a,b){
    return (+a)+(+b);
}

function subtract(a,b){
    return (+a)-(+b);
}

function multiply(a,b){
    return (+a)*(+b);
}

function divide(a,b){
    return (+a)/(+b);
}

let number1 = "";
let operator;
let number2 = "";
let bool = true;

function operate(operator, nmb1, nmb2){
    if(operator == "+"){return add(nmb1,nmb2);}
    if(operator == "-"){return subtract(nmb1, nmb2);}
    if(operator == "*"){return multiply(nmb1, nmb2);}
    if(operator == "/"){return divide(nmb1, nmb2);}
}

function clears(){
    number1 = "";
    number2 = "";
    operator = "";
    bool = true;
}

function equivalate(){ 
    if(number2 == 0 && operator == "/"){
        screen.textContent = "nuh uh";
        clears();
    }
    else if (number1 != "" && number2 != "" && operator != ""){
        answer = operate(operator, number1, number2);
        if(answer.toString().length > 15){
            answer = answer.toString();
            answer = answer.substring(0,15);
        }
        screen.textContent = +answer;
        number1 = "";
        number2 = "";
        bool = true;
    }   
}

const screen = document.querySelector(".screen");

const numbers = Array.from(document.querySelectorAll(".number"));
numbers.forEach((item) => item.addEventListener('click', function(){
    if(bool){
        number1 += "" + item.textContent;
        if(number1.toString().length > 15){
            number1 = number1.toString();
            number1 = number1.substring(0,15);
        }
        screen.textContent = +number1;
    }
    else{
        number2 += "" + item.textContent;
        if(number2.toString().length > 15){
            number2 = number2.toString();
            number2 = number2.substring(0,15);
        }
        screen.textContent = +number2;
    }
}))

const operators = document.querySelectorAll(".operator");
operators.forEach((item) => item.addEventListener('click', function(){
    if(number2 != ""){
        equivalate();
    }
    if(screen.textContent != ""){
        number1 = screen.textContent;
    }
    operator = item.textContent;
    bool = false;
}))

const equals = document.querySelector(".equals");
equals.addEventListener('click', equivalate);

const clear = document.querySelector(".clear");
clear.addEventListener('click', function(){
    clears();
    screen.textContent = "";
})

