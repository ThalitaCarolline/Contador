var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;



function increment() {
        
        if (currentNumber<=9){
            currentNumber++;
            currentNumberWrapper.innerHTML = currentNumber;
        }
//se currentNumber for maior que 0, ele vai remover a cor red
        if (currentNumber >= 0){    
            currentNumberWrapper.classList.remove("vermelho")
        }
    }


function decrement() {
        
        if (currentNumber >=-9) {
            currentNumber--;
            currentNumberWrapper.innerHTML = currentNumber;
        } 
//se currentNumber for menor que 0, ele vai add a cor red
        if (currentNumber < 0){
            currentNumberWrapper.classList.add("vermelho")
        }
    }

