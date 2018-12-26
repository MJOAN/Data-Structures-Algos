/*
ALGOS: 
*/


/*
Bubble
t:  s:  
*/

const bubbleSort = (a) => {
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
console.log(bubbleSort(array));
// [ 12, 23, 33, 34, 37, 45, 65, 87, 98, 99 ]



/*
Quick 
t:  s:  
*/

const partition = (array, pivot, left, right) => { 
    var pivot = array[Math.floor(left+right/2)]

    while(left <= right) {
        if(array[left] < pivot) {
            left--
        }
        if(array[right] > pivot) {
            right--
        }
        if(left >= right) {
            swap(array, left, right)
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
