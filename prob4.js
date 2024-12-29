const counter={
    count:0,
    Increment:function(num){
        return this.count+num
    },
    Decrement:function(num){
          return this.count-num
    },
    Reset:function(){
          return this.count
    },
} 
let incrementResult=counter.Increment(3);
let decrementResult=counter.Decrement(1);
let resetResult=counter.Reset();
console.log(decrementResult)