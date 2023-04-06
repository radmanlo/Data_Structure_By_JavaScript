
## array.js provides example and explanation <br />

# Initialize an Array

const arr1 = new Array() <br />
const arr2 = new Array(5)<br />
const arr3 = new Array(1,2,"BMW", "Java", 5 )<br />
const arr4 = new Array("1")<br />
const arr5 = []<br />
const arr6 = ["Python", 22, "JavaScript", 56, "a"]<br />

# Array Property

const length = array.length

# Array Methods

const reversedArray = array.reverse()<br />
const sortedArray = array.sort()<br />
const filedArr = array.fill(value, start, end)<br />
const joinedString = array.join(separator)<br />
const stringOfArray = array.toString()<br />
const removedElement = array.pop()<br />
const shifedElement = array.shift()<br />
const IndexOfPushedElement = array.push(element)<br />
const unshifedElement = arrTemp.unshift(element)<br />
const concatArray = array1.concat(arrayw)<br />
const spliceArray = array.splice(start, deletCount, addItem1, ... , addItemN)<br />
const lastIndex = array.lastIndexOf(element)<br />
const firstIndex = array.indexOf(element)<br />
const sliceArray = array.slice( start, end)<br />
const firstIndex = arr.findIndex(callback(element, index, arr),thisArg)<br />
const value = array.find(callback(element, index, arr),thisArg)<br />
const boolInclude = arraray.includes(element)<br />
const resultReduceRight = array.reduceRight(callback(accumulator, currentValue), initialValue)<br />
const resultReduce = array.reduce(callback(accumulator, currentValue), initialValue)<br />
const boolIsArray = Array.isArray(array)<br />
const newArrayFilter = array.filter(callback(element), thisArg)<br />
const newArrayMap = arr.map(callback(currentValue), thisArg)<br />
array.forEach(function(currentValue, index, arr), thisValue)<br />
const boolSome = array.some(callback(currentValue), thisArg)<br />
const boolEvery = array.every(function(currentValue, index, arr), thisValue)<br />
const newArrayEntries = array.entries()<br />
const newArrayKes = array.keys()<br />
const newArrayValues = array.values()<br />
const newArrayFrom = Array.from(arraylike, mapFunc, thisArg)<br />
array.copyWithin(target, start, end)<br />
const newArrayFlat = array.flat(depth)<br />

# Spread Operator

const arrCopy = [...array]<br />
