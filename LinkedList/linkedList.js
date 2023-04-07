
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
            return 'new Node is created'
        }else{
            let curNode = this.#head
            for (let i = 0; i < this.#size; i++){
                if (curNode.next != null)
                    curNode = curNode.next
                else
                    curNode.next = newNode
            }
            this.#size++
        }
    }
    // functions to be implemented
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)
 
    // Helper Methods
    // isEmpty
    PrintList (){
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

    // return the first node of link list
    get head (){
        return this.#head
    }

    // return the size of the list
    get sizeOfList (){
        return this.#size
    }
}
const linkedList = new LinkedList()
linkedList.add("radman1")
linkedList.add("radman2")
linkedList.add("radman3")
linkedList.add("radman4")
console.log(linkedList.sizeOfList)
linkedList.PrintList()