const reverseWords=(str)=>{
    let tem=[...str].reverse()
    let result='';
     for(i=0;i<tem.length;i++){
         result+=tem[i]
     }
     console.log(result)
 }
 reverseWords('hello world')
 
 
 