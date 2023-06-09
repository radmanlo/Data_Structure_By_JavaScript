
/*
    Array Initialization
*/

// create an empty array
const arr1 = new Array()
// console.log(arr1) //=> []

// create an array with 5 empty items
const arr2 = new Array(5)
// console.log(arr2) //=> [ <5 empty items> ] 

// create an array with 5 specified items
const arr3 = new Array(1,2,"BMW", "Java", 5 )
// console.log(arr3) //=> [ 1, 2, 'BMW', 'Java', 5 ]

// create an array with 1 item 
const arr4 = new Array("1")
// console.log(arr4) //=> [ '1' ]

// create an empty array 
const arr5 = []
// console.log(arr5) //=> []

// create an array with 5 specified items
const arr6 = ["Python", 22, "JavaScript", 56, "a"]
// console.log(arr6) //=> ["Python", 22, "JavaScript", 56, "a"]

// create an array with specifed elemets
let alphabets = Array.of("A", "B", "C");
// console.log(alphabets) //=> [ 'A', 'B', 'C' ]



/*
    Array Property
*/

// find the length of array
const length =  arr3.length
// console.log( `length of arr3 is ${length}`) //=> length of arr3 is 5



/*
    Array Methods
*/

// reversing the array
const reversedArr3 = arr3.reverse()
// console.log(arr3) //=> [ 5, 'Java', 'BMW', 2, 1 ]
// console.log(reversedArr3) //=> [ 5, 'Java', 'BMW', 2, 1 ]

// sort the city array in ascending order
const city = ["California", "Barcelona", "Paris", "Kathmandu"]
let sortedArray = city.sort()
// console.log(sortedArray) //=> [ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]
// console.log(city) //=> [ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]

// filling every element of the array with 'Cherry' 
const filedArr = arr6.fill("Cherry")
// console.log(arr6) //=> [ 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry' ]
// console.log(filedArr) //=> [ 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry' ]

// filling array by start and end point .fill(value, start, end) 
const filedArr2 = arr6.fill(15, 2, 4)
// console.log(filedArr) //=> [ 'Cherry', 'Cherry', 15, 15, 'Cherry' ]
// console.log(arr6) //=> [ 'Cherry', 'Cherry', 15, 15, 'Cherry' ]

// join all elements of array using space  .join(separator)
const message = ["JavaScript", "is", "fun."]
const joinedMessage = message.join(" ")
// console.log(joinedMessage) //=> JavaScript is fun.
// console.log(message) //=> [ 'JavaScript', 'is', 'fun.' ]

// returns a string with elements of the array separated by commas
const stringArr6 = arr6.toString()
// console.log(stringArr6) //=> Cherry,Cherry,15,15,Cherry
// console.log(arr6) //=>[ 'Cherry', 'Cherry', 15, 15, 'Cherry' ]

// remove the last element
const cities = ["Madrid", "New York", "Kathmandu", "Paris"];
const removedCity = cities.pop();
// console.log(cities) //=> [ 'Madrid', 'New York', 'Kathmandu' ]  
// console.log(removedCity) //=> Paris

// removes the first element of the array
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Watermelon"]
const firstFruit = fruits.shift()
// console.log(fruits) //=> [ 'Orange', 'Lemon', 'Apple', 'Watermelon' ]
// console.log(firstFruit) //=>Banana

// add items or an item into the end of the array
const cars = ["BMW", "Benz", "Toyota"]
const addedCar = cars.push("Honda")
// console.log(addedCar) //=> 4
// console.log(cars) //=> [ 'BMW', 'Benz', 'Toyota', 'Honda' ]

// add new element to the start of the array 
const arrTemp = [1, 2, 3, 4]
const returnOfUnshift = arrTemp.unshift(5) 
// console.log(arrTemp) //=> [ 5, 1, 2, 3, 4 ]
// console.log(returnOfUnshift) //=> 5

// merging 2 arrays to each other 
const music1 = new Array("Rap", "Jazz", "Classic")
const music2 = ["Hip hop", "Country", "traditional"]
const concatMusic = music1.concat(music2)
// console.log(music1) //=> [ 'Rap', 'Jazz', 'Classic' ]
// console.log(music2) //=> [ 'Hip hop', 'Country', 'traditional' ]
// console.log(concatMusic) //=> [ 'Rap', 'Jazz', 'Classic', 'Hip hop', 'Country', 'traditional' ]

// add, remove or replace the emlenets //=> arr.splice(start, deletCount, addItem1, ... , addItemN)
const num = [1,2,3,4,5,6,7,8]
const spliceReturn = num.splice(1, 4, 99, 88)
// console.log(spliceReturn) //=> [ 2, 3, 4, 5 ]
// console.log(num) //=>  [1, 99, 88, 6, 7, 8 ]

// return the index of the last occurance of a specified element in parameter arr.lastIndexOf( element, startFromIndex)
const repeatNum = [1,2,1,3,1,4,1,5,1,6,7]
const lastIndexOfReturn = repeatNum.lastIndexOf(1)
// console.log(lastIndexOfReturn) //=> 8
const NaNlastIndexOfReturn = repeatNum.lastIndexOf(50)
// console.log(NaNlastIndexOfReturn) //=> -1

// return the index of the first occurance of a specified element in parameter arr.lastIndexOf( element, startFromIndex)
const IndexOfReturn = repeatNum.indexOf(1)
// console.log(IndexOfReturn) //=> 0
const NaNIndexOfReturn = repeatNum.indexOf(50)
// console.log(NaNIndexOfReturn) //=> -1

// return a subset of the orginal array arr.slice( start, end)
const arrRandom = ["hello", "JavaScript", 0, 525, "A", "car", "apple", 66, 77, 0.125 , 99]
const sliceReturn = arrRandom.slice(2, 6)
// console.log(sliceReturn) //=> [ 0, 525, 'A', 'car' ]
arrRandom.fill("slice")
// console.log(sliceReturn) //=> [ 0, 525, 'A', 'car' ]
// console.log(arrRandom)  //=> ['slice', 'slice', 'slice', 'slice', 'slice', 'slice', 'slice', 'slice', 'slice', 'slice', 'slice' ]

// return the index of the first element which satisfy the callback function condition arr.findIndex(callback(element, index, arr),thisArg)
let arr = [1, 2, 3, 4, 5]
const findIndexReturn = arr.findIndex( (element, index, arr) => {
    // console.log(index)     //=> 0                  //=> 1
    // console.log(arr)      //=> [ 1, 2, 3, 4, 5 ]  //=> [ 1, 2, 3, 4, 5 ]
    // console.log(element) //=> 1                  //=> 2
    return element % 2 === 0
})
// console.log(findIndexReturn) //=> 1

// return the value of the first element which satisfy the callback function condition arr.find(callback(element, index, arr),thisArg) 
arr = [2, 4, 6, 11, 13]
const findReturn = arr.find( (element, index, arr) => {
    // console.log(index)     //=> 0                  //=> 1                  //=> 2                  //=> 3 
    // console.log(arr)      //=> [ 2, 4, 6, 5, 5 ]  //=> [ 2, 4, 6, 5, 5 ]  //=> [ 2, 4, 6, 5, 5 ]  //=> [ 2, 4, 6, 5, 5 ] 
    // console.log(element) //=> 2                  //=> 4                  //=> 6                  //=> 11
    return element % 2 !== 0
})
//console.log(findReturn) //=> 11

// check whether or not a value is in the array or not return true or false
arr = ["hello", "JavaScript", 55, 94, "A", 16]
const includesReturn = arr.includes("JavaScript")
// console.log(includesReturn) //=> true

/* 
// By executing a cacllback function it reduce the array into a single value
// it starts from right and goes to left it means if we do not specify 
// the initial value for accumulator will be the most right item
// arr.reduceRight(callback(accumulator, currentValue), initialValue)
*/
arr = [1, 2, 3, 4]
const resultReduceRight = arr.reduceRight ((accumulator, currentValue)=>{
    // console.log(accumulator)    //=> 4    //=> 7    //=> 9
    // console.log(currentValue)  //=> 3    //=> 2    //=> 1
    return accumulator + currentValue
})
// console.log(resultReduceRight) //=> 10

/* 
// By executing a cacllback function it reduce the array into a single value
// it starts from left and goes to right it means if we do not specify 
// the initial value for accumulator will be the most left item
// arr.reduce(callback(accumulator, currentValue), initialValue)
*/
arr = [1, 2, 3, 4]
const resultReduce = arr.reduce((accumulator, currentValue)=> {
    // console.log(accumulator)    //=> 0     //=> 1     //=> 3     //=> 6
    // console.log(currentValue)  //=> 1     //=> 2     //=> 3     //=> 4
    return accumulator + currentValue
}, 0)
// console.log(resultReduce) //=> 10

// check whether an element which is passed as an arugment is a array or not
arr = ["car", "Airplane", "Train", "Bicycle"]
const resultIsArray = Array.isArray(arr)
// console.log(resultIsArray) //=> true
let temp = "Temporary" 
const NaNresultIsArray = Array.isArray(temp)
//console.log(NaNresultIsArray) //=> false

// return new array including of the elements which satisfy the condition defined by the callback function
// arr.filter(callback(element), thisArg)
arr = [10, 44, 33, 61, 99, 85, 77, 12]
const resultFilter = arr.filter(element =>{
    if (element % 2 === 0)
        return true
    else
        return false
})
// console.log(resultFilter)  //=> [ 10, 44, 12 ]

// create a new array with the return value of the callback function
// arr.map(callback(currentValue), thisArg)
arr = [1, 2, 3, 4, 5, 6]
const resultMap = arr.map(element=>{
    return element * 2
})
// console.log(arr)  //=> [ 1, 2, 3, 4, 5, 6 ]
// console.log(resultMap) //=> [ 1, 2, 3, 4, 5, 6 ]

// for each elemet in the array execute the callback function
// array.forEach(function(currentValue, index, arr), thisValue)
arr = ["Apple", "Orange", "Banana", "strawberry"]
arr.forEach (element =>{
    // console.log(element)   //=> Apple    //=> Orange    //=> Orange    //=> strawberry
})

// this function return true if any element of the array pass the condtion defined in the callback function
// arr.some(callback(currentValue), thisArg)
arr = [1, 3, 5, 8, 9, 11, 41]
const resultSome = arr.some (element=> element % 2 === 0)
// console.log(resultSome)  //=> true

// return true if all elements in the array pass the condition defiend by callback function
// array.every(function(currentValue, index, arr), thisValue)
arr = [1, 2, 3, 4, "Apple", 8, 9, 10]
const resultEvery = arr.every (element => Number.isInteger(element))
// console.log (resultEvery)  //=> false

// return a new array Iterator containg the objects with the key of index and value of the array's value in that index
arr = ["car", "Airplane", "Train", "Bicycle"]
const resultEntries = arr.entries()
// for (let temp of resultEntries){
//    console.log(typeof(temp))  //=> object         //=> object              //=> object          //=> object   
//    console.log(temp)         //=> [ 0, 'car' ]   //=>  [ 1, 'Airplane' ]  //=> [ 2, 'Train' ]  //=> [ 3, 'Bicycle' ]
// }
// console.log(resultEntries)  //=> Object [Array Iterator] {}

// return a new array iterator containg of the keys (index number) of each element in the array
arr = ["Snake", "Lion", "Camel", "Donkey "]
const resultKeys = arr.keys()
// for (let temp of resultKeys){
//    console.log(typeof(temp))  //=> number   //=> number   //=> number   //=> number   
//    console.log(temp)         //=> 0        //=> 1        //=> 2        //=> 3
// }
// console.log(resultEntries)  //=> Object [Array Iterator] {}

// return a new array iterator containg of the values of each element in the array
arr = ["Snake", "Lion", "Camel", "Donkey "]
const resultValues = arr.values()
// for (let temp of resultValues){
//     console.log(typeof(temp))  //=> string   //=> string   //=> string   //=> string   
//     console.log(temp)         //=> Snake        //=> Line        //=> Camel        //=> Donkey
// }
// console.log(resultEntries)  //=> Object [Array Iterator] {}

// return a new array from any array-like or iterable object and it call a map function for each element
// Array.from(arraylike, mapFunc, thisArg)
const resultFrom = Array.from("javascript", element => element.toUpperCase() )
// console.log(resultFrom)   //=> [ 'J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T' ]

arr = ["Java", "Ruby", "JavaScript", "C++", "TypeScript"]
// copies array elements from  one position to another (it does not return new array it change the original array)
// arr.copyWithin(target, start, end)
const resultCopyWithin = arr.copyWithin(0, 2, 4)
// console.log(arr)                 //=> [ 'JavaScript', 'C++', 'JavaScript', 'C++', 'TypeScript' ]
// console.log(resultCopyWithin)   //=> [ 'JavaScript', 'C++', 'JavaScript', 'C++', 'TypeScript' ]

// create and return a new array by flattening a nested array up to specified depth
arr = [1, 0, 5, [45, 55, 98, [155, 286, 398, [4567, 2589]]]]
const resultFlat = arr.flat(2)
// console.log(resultFlat)   //=> [ 1, 0, 5, 45, 55, 98, 155, 286, 398, [ 4567, 2589 ] ]

/*
// Spreed operator
// this used for deep copy of an array
 */
arr = ["Java", "Python", "JavaScript", "GO"]
const arrCopy = [...arr]
arrCopy[0] = "Roby"
arrCopy[2] = 0.8555
// console.log(arr)        //=> [ 'Java', 'Python', 'JavaScript', 'GO' ]
// console.log(arrCopy)   //=> [ 'Roby', 'Python', 0.8555, 'GO' ]

