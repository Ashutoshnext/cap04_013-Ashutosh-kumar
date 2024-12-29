let arr=[22,33,,553,433]
function getTopTwo(){
let [first,second]=arr.sort((a,b)=>b-a)
console.log(first,second)
}
getTopTwo(arr)
