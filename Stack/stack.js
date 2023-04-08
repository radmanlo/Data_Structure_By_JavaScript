class Stack {

    // Private variables
    #items

    // Constructor
    constructor(){
        this.#items = []
    }

    // add item to the begining of the items array and return its index
    push (item){
        return this.#items.push(item)
    }

    // delete the item from the begining of the stack and return its value (Last in First Out)
    pop (){
        if (!this.isEmpty()){
            return this.#items.pop()
        }
        return null
    }

    // return the top most item from stack but does not delete it
    peek (){
        if (!this.isEmpty())
            return this.#items[ (this.#items.length) - 1]
        return null
    }
    
    // return true if the stack be empty
    isEmpty(){
        if (this.#items.length === 0)
            return true
        return false
    }

    // print out all items in the stack
    printStack() {
        if (!this.isEmpty()){
            this.#items.forEach(item => console.log(item))
        }
        else
            console.log("Stack is Empty")
    }
}

// Create an object from Stack
const stack = new Stack()

console.log("--------------push----------------")
// testing push function
console.log(stack.push("Fruit"))
console.log(stack.push("Car"))
console.log(stack.push("laptop"))
console.log(stack.push("Desk"))
console.log(stack.push("Monitor"))
// print the Stack
stack.printStack()

console.log("----------------pop--------------")
// testing pop function
stack.pop()
stack.pop()
// print the Stack
stack.printStack()

console.log("-----------------peek-------------")
// testing peek function
console.log(stack.peek())

console.log("---------------isEmpty---------------")
console.log(stack.isEmpty())

