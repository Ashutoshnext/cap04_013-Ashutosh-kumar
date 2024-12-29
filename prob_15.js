const user = {id:123, profile: { name: 'jhon Deo', address: { city: "Los Angeles", zipcode: "90001" } } };


// const user = { id: 123, profile: { name: "John Doe" } };



let id=user?.id ?? 'Id: Information not available';
let name=user?.profile?.name ?? 'Name: Information not available';
let city=user?.profile?.address?.city ?? 'City: Information not available';
let zipcode=user?.profile?.address?.zipcode ?? 'ZIP: Information not available';



console.log(`${name}( ID:${id}) lives in ${city} (${zipcode}) `)



