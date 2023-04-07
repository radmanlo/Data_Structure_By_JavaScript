
/*
//      Node Class
// Link list including number of nodes which have element
// and next properties. element is the value of the node and
// next points to the next node if there is any
*/
class Node {

    // private propeties
    #element 
    #next

    // constructor
    constructor (element){
        this.#element = element
        this.#next = null
    }

    // Getter Methods
    get element(){
        return this.#element
    }

    get next(){
        return this.#next
    }

    // Setter Methods
    set element (element){
        this.#element = element
    }

    set next (Node){
        this.#next = Node
    }
}

/*
//      Link List class
// its constructor has head which points to the first node of link list
// it is containg add, remove, isEmpty and ... functions
*/
class LinkedList {

    // Private Properties
    #head
    #size

    // constructor
    constructor (){
        this.#head = null
        this.#size = 0
    }

    add (element) {
        const newNode = new Node(element)
        if (this.#size === 0){
            this.#head = newNode
            this.#size++
            return true
        }else{
            let curNode = this.#head
            for (let i = 0; i < this.#size; i++){
                if (curNode.next != null)
                    curNode = curNode.next
                else{
                    curNode.next = newNode
                    this.#size++
                    return true
                }
            }
            return false
        }
    }

    // insert the element to the desire location
    insertAt(element, location){
        const newNode = new Node(element)
        let curNode = this.#head
        if (location >= 0 && location < this.#size ){
            for (let i = 0; i < this.#size; i++){
                if(location == 0){
                    const nodeTemp = this.#head
                    this.#head = newNode
                    this.#head.next = nodeTemp
                    this.#size++
                    return true
                }
                if (location - 1 === i){
                    const nodeTemp = curNode.next
                    curNode.next= newNode
                    newNode.next = nodeTemp
                    this.#size++
                    return true
                }
                else
                    curNode = curNode.next
            }
            return false
        }
        return false
    }

    // remove the Node from the desire location
    removeFrom(location) {
        if (this.isEmpty()){
            return false
        }
        let curNode = this.#head
        let preNode = curNode
        if (location >= 0 && location < this.#size ){
            if (location == 0){
                this.#head = curNode.next
                this.#size--
                return true
            } else {
                for (let i = 0; i <this.#size; i++){
                    if ( i == location){
                        preNode.next = curNode.next
                        curNode.next = null
                        this.#size--
                        return true
                    } 
                    preNode = curNode
                    curNode = curNode.next
                }
                return false
            }
        }
        return false
    }

    // remove the node based on its element
    removeElement(element) {
        if (this.isEmpty()){
            return false
        }
        let curNode = this.#head
        let preNode = curNode
        for (let i = 0; i < this.#size; i++){
            if (i === 0 && curNode.element === element){
                this.#head = curNode.next
                this.#size--
                return true
            } else {
                console.log(curNode.element)
                if ( element === curNode.element){
                    preNode.next = curNode.next
                    curNode.next = null
                    this.#size--
                    return true
                } 
                preNode = curNode
                curNode = curNode.next
            }
        }
        return false
    }

    // indicates linked list is empty or not
    isEmpty (){
        if (this.#size === 0 && this.#head === null)
            return true
        return false
    }

    // prints nodes in the linked list
    printList (){
        if (this.isEmpty()){
            console.log("Linked List is empty")
        }
        let curNode = this.#head
        for (let i = 0; i < this.#size; i++){
            if (i == 0){
                console.log( `Node ${i} => ${curNode.element}`)
                curNode = curNode.next
            }else{
                console.log(`Node ${i} => ${curNode.element}`)
                curNode = curNode.next
            }
        }
    }

    // return the size of the list
    get sizeOfList (){
        return this.#size
    }
}

// const linkedList = new LinkedList()

// // Add method examples
// linkedList.add("radman1")
// linkedList.add("radman2")
// linkedList.add("radman3")
// linkedList.add("radman4")

// // InsertAt method examples
// linkedList.insertAt("radman0", 0)
// linkedList.insertAt("radman2'", 2)
// linkedList.insertAt("radman5'", 5)
// linkedList.insertAt("radman6'", 6)
// linkedList.insertAt("radman4'", 4)

// // printList and removeFrom examples
// linkedList.printList()
// console.log("------------------------------------------")
// console.log(linkedList.removeFrom(5))
// console.log(linkedList.sizeOfList)
// linkedList.printList()
// console.log("------------------------------------------")
// console.log(linkedList.removeFrom(5))
// console.log(linkedList.sizeOfList)
// linkedList.printList()
// console.log(linkedList.removeFrom(5))
// console.log(linkedList.sizeOfList)
// linkedList.printList()
// console.log(linkedList.removeFrom(5))
// console.log(linkedList.sizeOfList)
// linkedList.printList()
// console.log("------------------------------------------")

// // removeElement examples
// console.log(linkedList.removeElement("radman1"))
// console.log(linkedList.sizeOfList)
// linkedList.printList()
// console.log("------------------------------------------")
// console.log(linkedList.removeElement("radman4'"))
// console.log(linkedList.sizeOfList)
// linkedList.printList()

// console.log(linkedList.removeFrom(0))
// console.log(linkedList.removeFrom(0))
// console.log(linkedList.removeFrom(0))
// linkedList.printList()

// // is empty example
// console.log(linkedList.isEmpty())