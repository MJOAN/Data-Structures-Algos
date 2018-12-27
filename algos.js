/*
ALGORITHMS
*/


/*
Binary
t:  s:  
*/

const binary = (a, key) => {
let low = 0;
let high = a.length - 1;
    while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
        if (a[mid] === key) return mid;

        if (key < a[mid]) {
        high = mid - 1;
        } else {
        low = mid + 1;
        }
    }     
 return -1;
};
  
let a = [10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222];
console.log(binary(a, 63));
  


/*
Bubble
t:  s:  
*/

const bubble = (a) => {
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                sorted = false;
                var temp = array[i];
                array[i] = array[i+1]
                array[i+1] = temp;
            }
        }
    }
    return array;
}
  
array = [98, 45, 34, 23, 12, 33, 87, 99, 65, 37]  
console.log(bubble(array));
// [ 12, 23, 33, 34, 37, 45, 65, 87, 98, 99 ]



/*
Quick 
t:  s:  
*/

const partition = (a, pivot, left, right) => { 
    var pivot = a[Math.floor(left+right/2)]

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
// [ 12, 23, 33, 34, 37, 45, 65, 87, 98, 99 ]

/*
PART I: 
  declare partition(array, i, j, pivot)
  pick pivot (methods vary: random, mid, first, etc.)
  pick pointers (left(i) and right(j) in array)

      if(i < pivot) then i++  			    i -> left LESS than pivot then i increment
      if(i > pivot) then stop         		stop check j first 
          if(j > pivot) then j--  	 		j -> right GREATER than pivot then j decrement
          if(j < pivot) then stop   		stop, look at i	
      swap(i, j)  				            swap
      continue; 

PART II:
  do pointers meet? 
  if(i >= j) 			                    after the final swaps if i is LESS than j then i crossed paths with j!  
  swap (i, j)
      else 
          swap(pivot, i)		            now there is nothing greater than j so we swap pivot
          return i 		                    index of item in place!

PART III:  
  declare quicksort(array, i, j)
  if (j <= i) return;
  int j = partition(array, i, j);
  sort(array, i, j-1)
  sort(array, j+1, j)
*/ 


/*
Selection 
t:  s:  
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
    // [ 12, 23, 33, 34, 37, 45, 65, 87, 98, 99 ]




/*
Heap 
t:  s:  
*/


const heapify = (a, i) => {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;
  
    if (left < len && a[left] > a[max])	max = left;
    if (right < len && a[right] > a[max]) max = right;
    
      if (max != i) {
          swap(a, i, max);
          heapify(a, max);
    }
      return a;
  }
  
  const swap = (a, first, last) => {
    var temp = a[first];
    a[first] = a[last];
    a[last] = temp;
  }
  
  const heapsort = (a) => {
    len = a.length;
    for (var i = Math.floor(len / 2); i >= 0; i--) {
        heapify(a, i);
    }
    for (var i = len - 1; i > 0; i--) {
          swap(a, 0, i);
          len--;
          heapify(a, 0);
    }
      return a;
  }
  
  var arr = [23, -3, 34, -35, -1, 465, 1, 34, 6, 231, 56, 67, 98, 43, 3, 564]
  console.log(heapsort(arr));