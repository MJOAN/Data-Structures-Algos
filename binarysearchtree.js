/**
Binary Search Tree
      Average                           Worst
   	  Access Search Insertion Deletion	Access Search Insertion Delete
Time: Θ(log(n))		    	            O(n)		
Space: O(n)
*/

/**
 * 
 * 
 *              
 *              4
 *           /     \
 *        2           6
 *      /   \       /   \
 *     1     3     5     7
 *    -^--^--^--^--^--^--^-
 *     1  2  3  4  5  6  7
 *
 * In a Binary Tree each node can have two children:
 *
 *     - Left: Less than parent node's value.
 *     - Right: Greater than parent node's value.
 *
 *
 * Tree traversal looking for (5): 
 *
 *             (4)         <--- 5 > 4, so move right.
 *           /     \
 *        2         (6)    <--- 5 < 6, so move left.
 *      /   \       /   \
 *     1     3    (5)    7 <--- We've reached 5!
 *
*/

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null 
	}

	insert(data) {
		let node = new Node(data)
		if(!this.root) {
			this.root = node;
			return this;
		} else {
			let current = this.root
			while(current) {
				if(data === current.data) return undefined;
				if(data < current.data) {
					if(!current.left) {
						current.left = node
						return this;
					} else {
						current = current.left;
					}
				} else if (data > current.data) {
					if(!current.right) {
						current.right = node
						return this;
					} else { 
						current = current.right
					}
				}
			}
		} 
	}
	search(data) {
		let node = new Node(data)
		if(!this.root) {
			return null; 
		} 
		let current = this.root; 
		while(current) {
			if(node.data === current.data) {
				return node; 
			} else if (node.data < current.data) {
				if(!current.left) {
					current.left = node
					return node;
				} else {
					current = current.left
				}
			} else if (node.data > current.data) {
				if(!current.right) {
					current.right = node 
					return node;
				} else {
					current = current.right
				}
			} else {
				return null;
			}
		}
    }
    remove(node, data) {
        if(!node) return null
        if(data === node.data) {
            if(!node.left && !node.right) return null
            if(!node.left) return node.right
            if(!node.right) return node.left
            const temp = this.getMin(node.right)
            node.value = temp
            node.right = this.remove(node.right, temp)
            return node
        } else if (node.data < node.left) {
            node.left = this.remove(node.left, data)
            return node
        } else {
            node.right = this.remove(node.right, data)
            return node
        }
    }
    getMin = function(node) {
        if(!node) node = this.root
        while(node.left) {
            node = node.left
        }
        if(node.left === null) return node
        else return this.getMin(node.left)
    return node.data;
    }
    getMax = function(node) {
        if(!node) node = this.root
        while(node.right) {
            node = node.right
        }
    return node.data;
    }
	breadthFirst(data) {
		let node = this.root
		let queue = []
		let visited = []
		queue.push(node);

		while(queue.length) {
			node = queue.shift();
			visited.push(node.data)
			if(node.left)   queue.push(node.left)
			if(node.right)  queue.push(node.right)
		}
		return visited;
	}
	depthFirstPre() {
		let visited = []
		let current = this.root;
		function util(node) {
			visited.push(node.data)
			if(node.left) util(node.left) 
			if(node.right) util(node.right)
		}
		util(current)
		return visited;
	}
	depthFirstPost() {
		let visited = []
		let current = this.root;
		function util(node) {
			if(node.left) util(node.left) 
			if(node.right) util(node.right)
			visited.push(node.data)
		}
		util(current)
		return visited;
	}
	depthFirstIn() { 
		let visited = []
		let current = this.root;
		function util(node) {
			node.left && util(node.left) 
			visited.push(node.data)
			node.right && util(node.right)
		}
		util(current)
		return visited;
	}
}

let tree = new BinarySearchTree()
tree.root = new Node(50)
tree.insert(25)
tree.insert(78)
tree.insert(12)
tree.insert(63)
tree.search(63)
console.log(tree)
tree.breadthFirst()
console.log(tree)
tree.depthFirstPre() 