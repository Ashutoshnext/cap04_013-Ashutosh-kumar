const transformArrayToObject=(arr)=>{
    
    return  arr.reduce((acc,curr)=>{
         acc[curr]=curr.length
          return acc;
     },{});
 }
 
 
 const result = transformArrayToObject(['apple','banana','cherry']);
 console.log(result); 
 
 
 