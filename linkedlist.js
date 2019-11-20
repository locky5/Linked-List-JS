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
    let node = new Node(data)
    let current = this.head

    if (!this.head) { //if it's empty, set head to node
      this.head = node
    } else {
      while (current.next) { //continue on to last node
        current = current.next
      }
      current.next = node //once on last node, set a new 'next' pointer to new node
      this.size++
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

ll.printListData()
