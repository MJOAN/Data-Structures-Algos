/*
ALGORITHMS
  Authorship: Credit for the code in this file goes to Benoit Vallon,
  author of blog: http://blog.benoitvallon.com/ and my tutor, 
  Kirsten Brown. I studied these algorithms on my own, and found 
  the logic for each noted below was what made most sense to me. I have
  written a pseudo code section to confirm my understanding.
*/


/*
Binary
Time: O(log 2 n) 
Space: O(1)
Pseudo: Take in array, and key. Set lo and hi pointers. 
While lo is <= hi, set mid pointer. 
If mid value is equal to our key, that's great, return that index.
If our key is < our mid value, set hi to mid - 1, else 
set lo to mid + 1. All else, return -1.
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
Pseudo: Take in array, set sorted boolean to false.
While sorted is true, set sorted to true, loop through array.
If value i in array is > value i + 1, set sorted to false, 
and perform swap. Return array.
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
Pseudo:
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
Selection 
Time: Ω(n^2), Θ(n^2), O(n^2) 
Space: O(1)
Pseudo: Take in array, set len to array length. Iterate or loop through
array length set variable min to i. Iterate or loop through inner array
setting j to i + 1. If value at j is <= value at min, set min to j. If 
min is not equal to 1, perform swap. Return array.
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
Pseudo: Take in array. Iterate or loop through array length, set variable 
temp to array at i and variable j to i - 1. While j is >= 0 and value at
j is > temp, set value at j + 1 to j and decrement j. Once out of while loop,
set value at j + 1 to temp. Return array.
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
Pseudo: Setup heapify, heapsort and swap functions. Heapify function 
takes in array, and index. Set variables left, right and max. If left 
is < array length and value at left is > value at max set max to left.
If right is < array length and value at right is > value at max set 
max to right. If max is not equal to index perform swap, and recursively call
heapify. Heapsort function takes in array, set len to array length. Iterate 
or loop setting i to middle of array, i >= 0 and decrementing i. Recursively
call heapify taking in array and index. Iterate or loop through setting i to
length - 1, i > 0 and decrementing i. Perform swap, decrement length, and 
recursively call heapify passing in array, and 0. 

A Heap comes in two forms MIN or MAX, implemented as tree or array. 
When building a Heap we always start top to bottom left to right. When we 
add and item it has to be at LEFT most avaiable position. MIN Heap: down the 
tree elements get larger, MIN at root. MAX Heap: down the tree elements 
get smaller, MAX at root. 

	root = index=1
       parent = index/2
       /    \
    left     right  
 (index*2)  (index*2)+1

Example:

                                * n = index of [] 
                                * child = 2 * i + 1 or 2 
          20                    parent     child
       /     \                  ------     -----
      13        9                       /   2 n + 1     
    /   \      / \                 n  
   8     5    3    7                    \   2 n + 2  
  / \    / \                     
 6   2  1   3                     
                               * child index n - 1 / 2 to find parent
                                  n - 1 
                                  -----  <--  n 
                                    2 
 

parent = 20, i = 0        i   child
left child  -> 2*0 +1  -> 1   13
right child -> 2*0 +2  -> 2   9

child = 9, i = 2          i   child
left child  -> 2*2 +1  -> 5   3
right child -> 2*2 +2  -> 6   7

index:     0   1  2  3  4  5  6  7  8  9
array:  [ 20, 13, 9, 8, 5, 3, 7, 6, 2, 1 ] 
*/

const heapify = (a, i) => {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;
  
        if (left < len && a[left] > a[max])   max = left;
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
Pseudo: Setup functions mergesort, and merge. Mergesort function takes in 
array, and sets variables for left, right and middle. Return merge recursively, 
passing in mergesort twice, once with left pointer and other with right pointer.
Merge function takes in left and right pointers. Create emtpy array. While there 
are still elements in both arrays, if first element of left is < first element in right, 
shift element from left and push to result array. Else shift from right and push to 
result array. Return all results from array, left and right. 
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
