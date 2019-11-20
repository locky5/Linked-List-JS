class Node {
  constructor(data, next = null) { //if next is not given, assume it is empty
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  addNoteToFront(data) {
    this.head = new Node(data, this.head) //the new node's 'next' will be the given 'this.head' a.k.a you're shifting the old node over
    this.size++
  }

  addNodeToBack(data) {
    let current = this.head //initialize to beginning

    if (!this.head) { //if the list is empty...
      this.head = new Node(data)
    } else {
      while (current.next) {
        current = current.next //move along the list
      }
      current.next = new Node(data)
    }

    this.size++
  }

  insertNodeAtIndex(data, index) {

    if (index > 0 && index > this.size) {
      return
    } else if (index === 0) {
      this.head = new Node(data, this.head) //just like inserting it into the front
      return
    }

    let current = this.head
    let count = 0
    let node = new Node(data)
    while (count < index) {
      let previous = current //node before the index
      current = current.next //node after the index since the first node starts at '1' and the index starts at '0'
      count++
    }
    node.next = current //therefore the node after the inserted one is the 'current' node
    previous.next = node //while the previous node's 'next' points to the new node

    this.size++
  }

  printListData() {
    let current = this.head //start from beginning

    while(current) {
      console.log(current.data)
      current = current.next //go to next node
    }
  }
}

let ll = new LinkedList()

ll.addNoteToFront(100)
ll.addNoteToFront(200)
ll.addNoteToFront(300)

ll.addNodeToBack(400)

ll.insertNodeAtIndex(50, 2)

ll.printListData()
