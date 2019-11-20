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

  deleteFrontNode() {
    let current = this.head
    this.head = current.next //just go to next node over
    this.size--
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

  deleteBackNode() {
    let current = this.head
    let previous

    while(current.next) {
      previous = current
      current = current.next
    }
    previous.next = current.next //skip over the middle node
    this.size--
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
    let previous
    while (count < index) {
      previous = current //node before the index
      current = current.next //node after the index since the first node starts at '1' and the index starts at '0'
      count++
    }
    node.next = current //therefore the node after the inserted one is the 'current' node
    previous.next = node //while the previous node's 'next' points to the new node

    this.size++
  }

  deleteNodeAtIndex(index) {
    if (index > 0 && index > this.size) {
      return
    }

    let current = this.head
    let previous
    let count = 0
    while (count < index) {
      previous = current
      current = current.next
      count++
    }
    previous.next = current.next
    this.size--
  }

  getDataAtIndex(index) {
    if (index > 0 && index > this.size) {
      return
    } else if (index === 0) {
      console.log(this.head.data)
    }

    let current = this.head
    let count = 0
    while (count < index) {
      current = current.next
      count++
    }
    console.log(current.data)
  }



  printListData() {
    let current = this.head //start from beginning

    while(current) {
      console.log(current.data)
      current = current.next //go to next node
    }
  }

  clearListData() {
    this.head = null //removing the initial head removes the entire list
    this.size = 0
  }
}

let ll = new LinkedList()

ll.addNoteToFront(100)
ll.addNoteToFront(200)
ll.addNoteToFront(300)

ll.addNodeToBack(400)

ll.insertNodeAtIndex(50, 2)

// ll.getDataAtIndex(2)

ll.deleteNodeAtIndex(2)

ll.printListData()
