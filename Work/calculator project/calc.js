function calculator() {
    //get the element and store them in variables
    var add = document.getElementById("add")
    var subtract = document.getElementById("subtract")
    var multiply = document.getElementById("multiply")
    var divide = document.getElementById("divide")
    var equals = document.getElementById("equal")
    var clear =document.getElementById("clear")
    var result = 0
    var operation =""

    function doOperation() {
         var number = document.getElementById("display").value
         number = parseInt(number)
         document.getElementById("display").value=""

       //check if any operation has been selected

       if (operation == ""){
        result=number
       }

       if ( operation == "add"){
        result = result + number
       }
    
        //minus
        if ( operation == "subtract"){
          result = result - number
        }

        //multiply
        if( operation=="multiply"){
            result = result * number
        }

        //divide
        if (operation == "divide"){
            result = result / number
        }

    }

        //add

        add.onclick = function(){
            doOperation()
            operation = "add"
        }

        //substract

        subtract.onclick = function(){
            doOperation()
            operation = "subtract"
        }

        //multiply

        multiply.onclick = function() {
            doOperation()
            operation = "multiply"
        }

        //divide

        divide.onclick = function() {
            doOperation()
            operation = "divide" 

        }
        //equals

        equals.onclick = function(){
            doOperation()
            document.getElementById("display").value = result
        }
        //clear 
        clear.onclick = function() {
            document.getElementById("display").value =""
            result = 0
        }
    }
    

 calculator()