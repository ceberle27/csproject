//this code makes the numbers you put in do what you choose, add, subtract, divide, or multiply.
//it makes it multiply divide add and subtract

var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);


function doMath() {
   //addition
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    //subtraction
    if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    } 
    
     //divition
    if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    //multiplication
    if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    //to the power of...
    if  (dropdown.value == "^"){
        answer =  Math.pow(parseInt(input1.value) , parseInt(input2.value));
        display.innerHTML = answer;
    }
        //Absolute Value    
    if  (dropdown.value == "%"){
        answer = parseInt(input1.value) % parseInt(input2.value);
        display.innerHTML = answer;
  
    }    
}
