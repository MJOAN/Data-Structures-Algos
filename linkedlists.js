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
	insertLast(data) {
		const last = this.getLast()

		if(last) {
			last.next = new Node(dat)
		} else {
			this.head = new Node(data)
		}
		this.length++;
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