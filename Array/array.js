
/*
    Array Initialization
*/

//create an empty array
const arr1 = new Array()
//console.log(arr1) //=> []

//create an array with 5 empty items
const arr2 = new Array(5)
//console.log(arr2) //=> [ <5 empty items> ] 

//create an array with 5 specified items
const arr3 = new Array(1,2,"BMW", "Java", 5 )
//console.log(arr3) //=> [ 1, 2, 'BMW', 'Java', 5 ]

//create an array with 1 item 
const arr4 = new Array("1")
//console.log(arr4) //=> [ '1' ]

//create an empty array 
const arr5 = []
//console.log(arr5) //=> []

//create an array with 5 specified items
const arr6 = ["Python", 22, "JavaScript", 56, "a"]
//console.log(arr6) //=> ["Python", 22, "JavaScript", 56, "a"]



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
//console.log(concatMusic) [ 'Rap', 'Jazz', 'Classic', 'Hip hop', 'Country', 'traditional' ]




// https://www.programiz.com/javascript/library/array#:~:text=In%20JavaScript%2C%20Array%20is%20a,default%20or%20custom%20sorting%20rules.


