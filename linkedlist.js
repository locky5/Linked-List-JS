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
  }

  insertNodeAtIndex(data, index) { //fix this up
    let current = this.head

    if (index > 0 && this.head) {
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      current.next = new Node(data, current.next.next)
    }
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
