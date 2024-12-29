const people = [ 
    { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, 
{ name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } 
]

let result=[]
for(i=0;i<people.length;i++){
    let {name,address:{city,street:{name:streetname,number}}}=people[i];
result.push(`${name} lives in ${city} on ${streetname} in ${number}`);
}

console.log(result)


