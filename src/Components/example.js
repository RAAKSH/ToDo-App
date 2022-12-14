var userList=[{name:'raksha',age:29},{name:'sam',age:12},{name:'xyz',age:13}]

var totalAge=userList.map((item)=>{
    return item.name
})
var lengthAge=userList.length;
var avgAge=totalAge/lengthAge;

console.log("avg",avgAge);
console.log(totalAge);

var agebar=userList.filter(item =>item>30)

console.log(agebar);