/*
  Authorship: Credit for the code in this file goes to Colt Steele,
  author of https://www.udemy.com/js-algorithms-and-data-structures-masterclass/ 
  and my tutor, Kirsten Brown. I studied these algorithms on my own, and found 
  the logic for each noted below was what made most sense to me. I have
  written a pseudo code section to confirm my understanding.
*/


/*
Graphs: Breadth First Traversal & Depth First Traversal
Time: O(V+E)
Space: O(V)

           1   
        /     \ 
       2       3   
     /   \      
    4     5
          
(a) Inorder (Left, Root, Right) : 4 2 5 1 3
(b) Preorder (Root, Left, Right) : 1 2 4 5 3
(c) Postorder (Left, Right, Root) : 4 5 2 3 1
(d) Level Order (Breadth First) : 1 2 3 4 5 
*/


class Graph {
	constructor() {
		this.adjacencyList = {}
	}
	addVertex(vertex) {
		if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
	}
	addEdge(vertex1, vertex2) {
		if(!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = []
			this.adjacencyList[vertex1].push(vertex2)
			this.adjacencyList[vertex2].push(vertex1)
	}
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)

		this.adjacencyList[vertex2] = 
		this.adjacencyList[vertex2].filter(v => v !== vertex1)
	}
	removeVertex(vertex) {
		while(this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop()
			this.removeEdge(vertex, adjacentVertex)
		}
		delete this.adjacencyList[vertex]
	}
	depthFirst(node) {
		const result = []
		const visited = {}
		const adjacencyList = this.adjacencyList;

		function util(vertex) {
			if(!vertex) return null; 
			visited[vertex] = true;
			result.push(vertex)
        
        adjacencyList[vertex].forEach(neighbor => {
			if(!visited[neighbor]) {
				return util(neighbor)
				}
		    })
		return result;
    	}
	}
	breadthFirst(node) {
		const queue = []
		const visited = {}
		const result = []
		queue.push(node)
		visited[node] = true;
		while(queue.length) {
			visited[node] = false;
			for(let i = 0; i< queue.length; i++) {
				let node = queue.shift()
				if(node.value === value) {
					visited[node] = true;
					return node
				}
				if(node.left) {
					queue.push(tree[node.left])
				}
				if(node.right) {
					queue.push(tree[node.right])
				}
			}
		}
		return null;
	}  
}

let g = new Graph()
g.addVertex("tokyo")
g.addVertex("new york")
g.addVertex("london")
g.addVertex("paris")
g.addVertex("tahiti")
g.addVertex("guam")
g.addVertex("singapore")
g.addVertex("frankfurt au main")
g.addEdge("tokyo", "new york")
g.addEdge("london", "paris")
g.addEdge("new york", "paris")
g.addEdge("tahiti", "london")
g.addEdge("gaum", "tahiti")
g.addEdge("singapore", "tokyo")
g.addEdge("tokyo", "gaum")
g.addEdge("frankfurt au main", "paris")
g.addEdge("frankfurt au main", "london")
g.addEdge("frankfurt au main", "new york")
g.addEdge("london", "singapore")
g.removeVertex("frankfurt au main", "london")
console.log(g)
