class Queue {

    // Private Variables
    #items
     // Array is used to implement a Queue
     constructor() {
        this.#items = []
    }
    
    // Add an item to the end of the Queue and return its index
    enqueue (item) {
        const index = this.#items.length
        this.#items[ this.#items.length] = item
        return index
    }
    
    // remove the function from the begining of the Queue and return its value
    dequeue() {
        if (!this.isEmpty()){
            const value = this.#items[0]
            this.#items = this.#items.slice(1, this.#items.length)
            return value
        }
        return null
    }

    // getting the fron item from Queue without deleting
    peek() {
        if (!this.isEmpty()){
            return this.#items[0]
        }
    }

    // return true if Queue is empty other wise return false
    isEmpty(){
        if (this.#items.length === 0)
            return true
        return false
    }

    // Print all items in the Queue on the console
    printQueue (){
        if (!this.isEmpty())
            this.#items.forEach( item => console.log( item))
        else
            console.log("Queue is Empty")
    }
}

// // Create an object from the Queue class
// const queue = new Queue()

// console.log("-----------------enqueue--------------------")
// // Testing Enqueue function 
// console.log(queue.enqueue("Car"))
// console.log(queue.enqueue("PC"))
// console.log(queue.enqueue("Table"))
// console.log(queue.enqueue("TV"))
// console.log(queue.enqueue("Refrigerator"))

// // Printing the Queue
// queue.printQueue()


// console.log("-----------------dequeue--------------------")
// // Testing dequeue function
// queue.dequeue()
// // Printing the Queue
// queue.printQueue()
// console.log("-----------------dequeue--------------------")
// // Testing dequeue function
// queue.dequeue()
// // Printing the Queue
// queue.printQueue()
// console.log("-----------------dequeue--------------------")
// // Testing dequeue function
// queue.dequeue()
// // Printing the Queue
// queue.printQueue()
// console.log("-----------------dequeue--------------------")
// // Testing dequeue function
// queue.dequeue()
// // Printing the Queue
// queue.printQueue()
// console.log("-----------------dequeue--------------------")
// // Testing dequeue function
// queue.dequeue()
// // Printing the Queue
// queue.printQueue()

// console.log("-----------------peek--------------------")
// // Testing Peek Function
// console.log(queue.peek())

// console.log("-----------------enqueue--------------------")
// // Testing Enqueue function 
// console.log(queue.enqueue("Car"))
// console.log(queue.enqueue("PC"))
// console.log(queue.enqueue("Table"))
// console.log(queue.enqueue("TV"))
// console.log(queue.enqueue("Refrigerator"))

// // Printing the Queue
// queue.printQueue()

// console.log("-----------------peek--------------------")
// // Testing Peek Function
// console.log(queue.peek())
