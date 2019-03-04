/*
  Authorship: Credit for the code in this file goes my tutor, Kirsten Brown. 
  I studied these algorithms on my own, and found the logic for each noted 
  below was what made most sense to me.
*/


/*
Queue 
      Average                           Worst
   	  Access Search Insertion Deletion	Access Search Insertion Delete
Time: Θ(n)	 Θ(n)	Θ(1)	  Θ(1)	    O(n)   O(n)	  O(1)	    O(1)	
Space: O(n)
*/


class Node {
	constructor() {
		this.value = value
		this.next = null; 
	}
}
class Queue {
	constructor() {
		this.first = null
		this.last = null; 
		this.size = 0;
	}

	enqueue(value) { // add to end of list
		let node = new Node(value);
		if(!this.first) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node
			this.last = node;
		}
		this.size++
	}
	dequeue() { // return first from list
		if(!this.first) return null
		let temp = this.first;
		if(this.first === this.last) {
			this.last = null
		}
		this.first = this.first.next
		this.size--
		return temp.value;
	}
}

class QElement {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
	}	
}

class PriorityQueue {
	constructor() {
		this.array = []
	}
	enqueue(data, priority) {
		const qElement = new QElement(data, priority)
		let contains = false;
		for(let i = 0; i < this.array.length; i++) {
			if(this.array[i].priority > qElement.priority) {
				this.array.splice(i, 0, qElement)
				console.log('a[i]',this.array[i].priority)
				contains = true;
				break;
			}
		}
		if(!contains) {
			this.array.push(qElement)
		}
	}
	dequeue() { // remove from end of beginning
		if(this.array.length) {
			return this.array.shift()
		}
	}
}

const priorityQueue = new PriorityQueue(); 
priorityQueue.enqueue("Neutron", 2234); 
priorityQueue.enqueue("Quark", 1234); 
priorityQueue.enqueue("Gluon", 2546); 
priorityQueue.enqueue("Neutrino", 3432); 
priorityQueue.enqueue("Electron", 2321);
priorityQueue.enqueue("Proton", 113);  
priorityQueue.dequeue().data;
priorityQueue.dequeue().data;
console.log(priorityQueue.array);
