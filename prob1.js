
let arr=[1,12,3,4,5,6,7]
const filterAndDouble=(arr)=>{
        let result=[]
       let temarr=arr.filter((item)=> item>=5)
       
       temarr.map((item)=>{
           result.push(item*2)
       })
       console.log(result)
    

}
filterAndDouble(arr)


