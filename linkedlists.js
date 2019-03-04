/*
  Authorship: Credit for the code in this file goes to Colt Steele,
  author of https://www.udemy.com/js-algorithms-and-data-structures-masterclass/ 
  and my tutor, Kirsten Brown. I studied these algorithms on my own, and found 
  the logic for each noted below was what made most sense to me. I am
  working on pseudo code section to confirm my understanding.
*/


/*
Singly Linked List
      Average                           Worst
   	  Access Search Insertion Deletion	Access Search Insertion Delete
Time: Θ(n)	  Θ(n)	 Θ(1)	   Θ(1)		O(n)   O(n)	  O(1)	    O(1)	
Space: O(n)
Pseudo: 

*/

class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class LinkedList {
	constructor(data) {
		this.tail = null;
		this.head = null;
		this.size = 0;
	}
	add(data) {
		if(!this.head) {
			this.head = node;
			this.tail = node;
		} else{ 
			this.tail.next = null;
			this.tail = node;
		}
		this.size++;
	}
	insertAt(index) {
		if(!this.head) {
			return null;
		}
		if(index === 0) {
			this.head = new Node(data, this.head)
		}
		const prev = this.getAt(index-1); 
		const curr = new Node(data, prev.next)
		prev.next = curr;
	}
	insertLast(data) {
		const last = this.getLast()

		if(last) {
			last.next = new Node(data)
		} else {
			this.head = new Node(data)
		}
		this.length++;
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
	getIndex(index) {
		let count = 0
		let curr = this.head;
		while(curr) {
			if(counter === index) return curr;
			counter++;
			curr = curr.next
		}
		return null;	
	}
	size() {
		let counter = 0; 
		let node = this.head;
		while(node) {
			counter++
			node = node.next;
		}
		return counter;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		if(!this.head) {
			return null;
		}
		let node = node.next;
		while(node) {	
			if(!node.next) {
				return node;
			}
			node = node.next;
		}
	}
	removeFirst() {
		if(!this.head) {
			return;
		}
		this.head = this.head.next;
		this.length--;
	}
	removeLast() {
		if(!this.head) {
			return;
		}
		if(!this.head.next) {
			this.head = null;
			return;
		}
		let prev = this.head;
		let curr = this.head.next;
		while(curr.next) {
			prev = curr;
			curr = curr.next;
		}
		prev.next = null;
		this.length--
	}
	removeIndex(index) {
		if(!this.head) {
			return null;
		}
		if(index === 0) {
			this.head = this.head.next;
			return;
		}
	const prev = this.getIndex(index-1);
	if(!prev || !prev.next) {
		return;
	} 
	prev.next = prev.next.next;
	}
	clear() {
		this.head = null;
	}
}

let list = new LinkedList()
list.add("concurrent")
list.add("logic")
list.add("embedded_software")
list.add('binary')
list.add('operating_system')
list.add('multiprocessing')
list.add('central_processing_unit')
list.add("address_bus")
console.log(list)
list.remove("logic")
console.log(list)
