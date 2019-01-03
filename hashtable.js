/*
Hash Table
      Average                           Worst
   	  Access Search Insertion Deletion	Access Search Insertion Delete
Time: N/A	 Θ(1)	Θ(1)	  Θ(1)	    N/A	   O(n)	  O(n)	    O(n)		
Space: O(n)
*/

class HashTable {
	constructor(size = 65) {
		this.keyMap = new Array(size)
	}
	_hash(key, len) {
		let total = 0; 
		let prime = 31;
			for (let i = 0; i < key.length; i++) {
				let char = key[i];
				let value = char.charCodeAt(0) - 96;
				total = (total * prime + value) % len; 
			}
		return total;
	}
	set(key, value) {
		let index = this._hash(key);
			if(!this.keyMap[index]) {
				this.keyMap[index] = []
			}
			this.keyMap[index].push([key, value])
	}
	get(key) {
		let index = this._hash(key)
		if(this.keyMap[index]) {
			for(let i = 0; i < this.keyMap[index].length; i++) {
				if(this.keyMap[index][i][0] === key) {
					console.log(this.keyMap[index][i][0])
					return this.keyMap[index][i][1]
				}
			}
		}
	}
	values(key) {
		let values = []
		for(let i = 0; i < this.keyMap.length; i++) {
			if(this.keyMap[i]) {
				for(let j = 0; j < this.keyMap[i].length; j++) {
					values.push(this.keyMap[i][j][1])
				}
			}
		}
		return values;
	}
}

let ht = new HashTable() 
ht._hash("computers", 27)
ht._hash("microprocessors", 38)
ht._hash("transistors", 23)
ht._hash("silicon", 23)
ht.set("memory_address_6", "0101011")
ht.set("memory_address_1", "1100001")
ht.set("memory_address_2", "1101101")
ht.set("memory_address_3", "1010111")
ht.set("memory_address_4", "1110000")
ht.set("memory_address_5", "1100110")
console.log(ht)
ht.get("memory_address_3")
ht.get("memory_address_4")
ht.values("memory_address_2")