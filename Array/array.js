
/*
    Array Initialization
*/

// create an empty array
const arr1 = new Array()
//console.log(arr1) //=> []

// create an array with 5 empty items
const arr2 = new Array(5)
//console.log(arr2) //=> [ <5 empty items> ] 

// create an array with 5 specified items
const arr3 = new Array(1,2,"BMW", "Java", 5 )
//console.log(arr3) //=> [ 1, 2, 'BMW', 'Java', 5 ]

// create an array with 1 item 
const arr4 = new Array("1")
//console.log(arr4) //=> [ '1' ]

// create an empty array 
const arr5 = []
//console.log(arr5) //=> []

// create an array with 5 specified items
const arr6 = ["Python", 22, "JavaScript", 56, "a"]
//console.log(arr6) //=> ["Python", 22, "JavaScript", 56, "a"]

// create an array with specifed elemets
let alphabets = Array.of("A", "B", "C");
//console.log(alphabets) //=> [ 'A', 'B', 'C' ]



/*
    Array Methods
*/

// find the length of array
const length =  arr3.length
//console.log( `length of arr3 is ${length}`) //=> length of arr3 is 5

// reversing the array
const reversedArr3 = arr3.reverse();
//console.log(arr3) //=> [ 5, 'Java', 'BMW', 2, 1 ]
//console.log(reversedArr3) //=> [ 5, 'Java', 'BMW', 2, 1 ]

// sort the city array in ascending order
const city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedArray = city.sort();
//console.log(sortedArray) //=> [ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]
//console.log(city) //=> [ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]

// filling every element of the array with 'Cherry' 
const filedArr = arr6.fill("Cherry");
//console.log(arr6) //=> [ 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry' ]
//console.log(filedArr) //=> [ 'Cherry', 'Cherry', 'Cherry', 'Cherry', 'Cherry' ]

// filling array by start and end point .fill(value, start, end) 
const filedArr2 = arr6.fill(15, 2, 4)
//console.log(filedArr) //=> [ 'Cherry', 'Cherry', 15, 15, 'Cherry' ]
//console.log(arr6) //=> [ 'Cherry', 'Cherry', 15, 15, 'Cherry' ]

// join all elements of array using space  .join(separator)
const message = ["JavaScript", "is", "fun."];
const joinedMessage = message.join(" ")
//console.log(joinedMessage) //=> JavaScript is fun.
//console.log(message) //=> [ 'JavaScript', 'is', 'fun.' ]

// returns a string with elements of the array separated by commas
const stringArr6 = arr6.toString()
//console.log(stringArr6) //=> Cherry,Cherry,15,15,Cherry
//console.log(arr6) //=>[ 'Cherry', 'Cherry', 15, 15, 'Cherry' ]

// remove the last element
const cities = ["Madrid", "New York", "Kathmandu", "Paris"];
const removedCity = cities.pop();
//console.log(cities) //=> [ 'Madrid', 'New York', 'Kathmandu' ]  
//console.log(removedCity) //=> Paris

// removes the first element of the array
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Watermelon"]
const firstFruit = fruits.shift()
//console.log(fruits) //=> [ 'Orange', 'Lemon', 'Apple', 'Watermelon' ]
//console.log(firstFruit) //=>Banana

// add items or an item into the end of the array
const cars = ["BMW", "Benz", "Toyota"]
const addedCar = cars.push("Honda")
//console.log(addedCar) //=> 4
//console.log(cars) //=> [ 'BMW', 'Benz', 'Toyota', 'Honda' ]

// add new element to the start of the array 
const arrTemp = [1, 2, 3, 4]
const returnOfUnshift = arrTemp.unshift(5) 
//console.log(arrTemp) //=> [ 5, 1, 2, 3, 4 ]
//console.log(returnOfUnshift) //=> 5

// merging 2 arrays to each other 
const music1 = new Array("Rap", "Jazz", "Classic")
const music2 = ["Hip hop", "Country", "traditional"]
const concatMusic = music1.concat(music2)
//console.log(music1) //=> [ 'Rap', 'Jazz', 'Classic' ]
//console.log(music2) //=> [ 'Hip hop', 'Country', 'traditional' ]
//console.log(concatMusic) //=> [ 'Rap', 'Jazz', 'Classic', 'Hip hop', 'Country', 'traditional' ]

// add, remove or replace the emlenets //=> arr.splice(start, deletCount, addItem1, ... , addItemN)
const num = [1,2,3,4,5,6,7,8]
const spliceReturn = num.splice(1, 4, 99, 88)
//console.log(spliceReturn) //=> [ 2, 3, 4, 5 ]
//console.log(num) //=>  1, 99, 88, 6, 7, 8 ]

// return the index of the last occurance of a specified element in parameter arr.lastIndexOf( element, startFromIndex)
const repeatNum = [1,2,1,3,1,4,1,5,1,6,7]
const lastIndexOfReturn = repeatNum.lastIndexOf(1)
//console.log(lastIndexOfReturn) //=> 8
const NaNlastIndexOfReturn = repeatNum.lastIndexOf(50)
//console.log(NaNlastIndexOfReturn) //=> -1

// return the index of the first occurance of a specified element in parameter arr.lastIndexOf( element, startFromIndex)
const IndexOfReturn = repeatNum.indexOf(1)
//console.log(IndexOfReturn) //=> 0
const NaNIndexOfReturn = repeatNum.indexOf(50)
//console.log(NaNIndexOfReturn) //=> -1

// return a subset of the orginal array arr.slice( start, end)
const arrRandom = ["hello", "JavaScript", 0, 525, "A", "car", "apple", 66, 77, 0.125 , 99]
const sliceReturn = arrRandom.slice(2, 6)
//console.log(sliceReturn) //=> [ 0, 525, 'A', 'car' ]
arrRandom.fill("slice")
//console.log(sliceReturn) //=> [ 0, 525, 'A', 'car' ]
//console.log(arrRandom) //=> ['slice', 'slice', 'slice', 'slice', 'slice', 'slice', 'slice', 'slice', 'slice', 'slice', 'slice' ]

// return the index of the first element which satisfy the callback function condition arr.findIndex(callback(element, index, arr),thisArg)
let arr = [1, 2, 3, 4, 5]
const findIndexReturn = arr.findIndex( (element, index, arr) => {
    //console.log(index) //=> 0 //=> 1
    //console.log(arr) //=> [ 1, 2, 3, 4, 5 ] //=> [ 1, 2, 3, 4, 5 ]
    //console.log(element) //=> 1 //=> 2
    return element % 2 === 0
})
//console.log(findIndexReturn) //=> 1

// return the index of the first element which satisfy the callback function condition arr.find(callback(element, index, arr),thisArg) 
arr = [2, 4, 6, 11, 13]
const findReturn = arr.find( (element, index, arr) => {
    //console.log(index) //=> 0 //=> 1 //=> 2 //=> 3 
    //console.log(arr) //=> [ 2, 4, 6, 5, 5 ] //=> [ 2, 4, 6, 5, 5 ] //=> [ 2, 4, 6, 5, 5 ] //=> [ 2, 4, 6, 5, 5 ] //=> [ 2, 4, 6, 5, 5 ]
    //console.log(element) //=> 2 //=> 4 //=> 6 //=> 11
    return element % 2 !== 0
})
console.log(findReturn) //=> 11





// https://www.programiz.com/javascript/library/array#:~:text=In%20JavaScript%2C%20Array%20is%20a,default%20or%20custom%20sorting%20rules.


