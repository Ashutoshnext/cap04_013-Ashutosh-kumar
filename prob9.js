const mathOperations ={
    add:function(a,b){
        return a+b;
    },
    subtract:function(a,b){
        return a-b;
    },
    multiply:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        return a/b
    }
}

const add=mathOperations.add(2,3);
const subtract=mathOperations.subtract(2,3);
const multiply=mathOperations.multiply(2,3);
const divide=mathOperations.divide(9,3);
console.log(multiply)
