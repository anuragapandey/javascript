// array is object ,that enables storing a collection of multiple 
//items under a single variables such as name and has
// members for performing common array opertions.

// javascript array resizable and csn be mixed of diff. data types 
//javascript array are zero indexed
//javascript array-copy operation create shallow copies.
const myArr =[1,2,3,4,5]
const myHeroes = ["aman","anurag"]

const myArr2 = new Array(1,2,3,4,)
//console.log(myArr[1])

//array method 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

//const newArr=myArr.join()

//console.log(myArr);
//console.log(typeof newArr);

// slice , splice  

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log("C",myArr)

console.log(myn2);





