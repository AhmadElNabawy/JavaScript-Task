const isNumber=function(num){
    return !isNaN(Number(num));
}


const calc=function(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    if(isNumber(num1) && isNumber(num2)){
        document.getElementById("result").value=num1+num2;
    }else{
        alert("Invalid Inputs");
    }
}