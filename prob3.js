const user = [
    { name: "Alice", age: 25, address: "123 Street" },
];

const getUserDetails = (user) => {
    for (i = 0; i < user.length; i++) {
        const result = `${user[i].name} is ${user[i].age} years old and lives at ${user[i].address}`
        console.log(result)
    }
}
getUserDetails(user) 