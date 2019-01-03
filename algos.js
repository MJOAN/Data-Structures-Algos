/*
ALGORITHMS
*/


/*
Binary
Time: O(log 2 n) 
Space: O(1)
*/

const binary = (a, key) => {
	let lo = 0;
	let hi = a.length - 1;
		while (lo <= hi) {
			let mid = lo + Math.floor((hi - lo) / 2);
			if (a[mid] === key) return mid;

			if (key < a[mid]) {
					hi = mid - 1;
				//return binary(a, lo, mid-1) if recursive
			} else {
					lo = mid + 1;
				//return binary(a, mid+1, hi) if recursive
			}
		}     
	return -1;
};
  
  
let a = [10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222];
console.log(binary(a, 63));
  


/*
Bubble
Time: Ω(n), Θ(n^2), O(n^2) 
Space: O(1)
*/

const bubble = (a) => {
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                sorted = false;
                let temp = array[i];
                array[i] = array[i+1]
                array[i+1] = temp;
            }
        }
    }
    return array;
}
  
array = [98, 45, 34, 23, 12, 33, 87, 99, 65, 37]  
console.log(bubble(array));


/*
Quick 
Time: Ω(n log(n)), Θ(n log(n)), O(n^2)	 
Space: O(log(n))
*/

const partition = (a, pivot, left, right) => { 
    let pivot = a[Math.floor(left+right/2)]

    while(left <= right) {
        if(a[left] < pivot) {
            left++
        }
        if(a[right] > pivot) {
            right--
        }
        if(left >= right) {
            swap(a, left, right)
            left++; 
            right--;
        }
    }
    return left;
}

const quick = (a, low = 0, high = a.length-1) => {
    if (a.length > 1) {
        let index = partition(a, low, high);
        if (low < index - 1) {
                quick(a, low, index-1);
        }
        if (high > index) {
                quick(a, index, high);
        }
    }
    return a;
}

const swap = (a, i, j) => {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

array = [98, 45, 34, 23, 12, 33, 87, 99, 65, 37]  
console.log(quick(array));

/*
Quick Pseudo:

Part I: 
  declare partition(array, i, j, pivot)
  pick pivot (methods vary: random, mid, first, etc.)
  pick pointers (left(i) and right(j) in array)

      if(i < pivot) then i++  			    i -> left LESS than pivot then i increment
      if(i > pivot) then stop         		stop check j first 
          if(j > pivot) then j--  	 		j -> right GREATER than pivot then j decrement
          if(j < pivot) then stop   		stop, look at i	
      swap(i, j)  				            swap
      continue; 

Part II:
  do pointers meet? 
  if(i >= j) 			                    after the final swaps if i is LESS than j then i crossed paths with j!  
  swap (i, j)
      else 
          swap(pivot, i)		            now there is nothing greater than j so we swap pivot
          return i 		                    index of item in place!

Part III:  
  declare quicksort(array, i, j)
  if (j <= i) return;
  int j = partition(array, i, j);
  sort(array, i, j-1)
  sort(array, j+1, j)
*/ 


/*
Selection 
Time: Ω(n^2), Θ(n^2), O(n^2) 
Space: O(1)
*/

const selection = (a) => {
    let len = a.length;
        for(let i = 0; i < len; i++) {
            let min = i
            for(let j = i + 1; j < len; j++)
                if(a[j] <= a[min]) {
                    min = j
                }
                if(min !== i) {
                    let temp = a[min]
                    a[min] = a[i]
                    a[i] = temp
                }
            }
        return a;
    }
    
a = [98, 45, 34, 23, 12, 33, 87, 99, 65, 37]  
console.log(selection(a));



/*
Insertion 
Time: Ω(n^2), Θ(n^2), O(n^2) 
Space: O(1)
*/

const insertion = (a) => {
    for(let i = 0; i < a.length; i++) {
        let temp = a[i]
        let j = i - 1
            while(j >= 0 && a[j] > temp) {
                a[j+1] = a[j]
                j--
            }
            a[j+1] = temp
        }
    return a;
}
a = [98, 45, 34, 23, 12, 33, 87, 99, 65, 37]  
console.log(insertion(a));



/*
Heap 
Time: Ω(n log(n)), Θ(n log(n)), O(n log(n)) 
Space: O(1)   
*/

const heapify = (a, i) => {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;
  
        if (left < len && a[left] > a[max])	max = left;
        if (right < len && a[right] > a[max]) max = right;
        
        if (max != i) {
            swap(a, i, max);
            heapify(a, max);
        }
    return a;
  }
  
const swap = (a, first, last) => {
    let temp = a[first];
    a[first] = a[last];
    a[last] = temp;
    return a;
  }
  
const heapsort = (a) => {
    len = a.length;
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapify(a, i);
    }
    for (let i = len - 1; i > 0; i--) {
        swap(a, 0, i);
        len--;
        heapify(a, 0);
    }
      return a;
  }
  
let arr = [23, -3, 34, -35, -1, 465, 1, 34, 6, 231, 56, 67, 98, 43, 3, 564]
console.log(heapsort(arr));



  /*
Merge
Time: Ω(n log(n)), Θ(n log(n)), O(n log(n)) 
Space: O(n)
*/

const mergesort = (a) => {
    if(a.length < 2) {
      return a;
    }
  
    var mid = Math.floor(a.length / 2);
    var lo = a.slice(0, mid);
    var hi = a.slice(mid);
  
    return merge(mergesort(lo), mergesort(hi));
  }
  
  const merge = (lo, hi) => {
    var a = [];
  
    while(lo.length && hi.length) {
      if(lo[0] < hi[0]) {
        a.push(lo.shift());
      } else {
        a.push(hi.shift());
      }
    }
    return a.concat(lo.slice()).concat(hi.slice());
  }
