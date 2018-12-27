/*
Linked Lists
t:  s: 
*/

class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class LinkedList {
	constructor(data) {
		this.head = null;
		this.size = 0;
	}
	add(data) {
		let node = new Node(data);
		if(!this.head) {
			this.head = node;
			this.tail = node;
		} else{ 
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
	}
	remove(data) {
		let prev = this.head;
		let current = this.head; 

		while(current) {
			if(current.data === data) {
				if(current === this.head) {
					this.head = this.head.next;
				}
				if(current = this.tail) {
					this.tail = prev;
				}
				prev.next = current.next;
				this.size--
			} else {
				prev = current
				current = current.next
			}
		}
	}
	reverse() {
		let node = this.head
		this.head = this.tail;
		this.tail = node;
		let prev = null;
		let next; 

		for(let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			node = next;
			prev = node;
		}
	}
	//getIndex easy
	//getSize
	//getFirst
	//getLast
	//removeFirst
	//removeLast

}

var list = new LinkedList()
list.add("A!")
list.add("B")
list.add("C")
console.log(list)
console.log('******add****')
console.log('**********')
console.log('**********')
list.remove("B")
console.log('******remove****')
console.log(list)